package com.std.details.repository.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.std.details.entity.StdEntity;
import com.std.details.repository.StdRepository;

@Service
public class StdServiceImp implements StdService{
	
	@Autowired
	private StdRepository stdrep;
	

	@Override
	public StdEntity saveentity(StdEntity stdentity) {
	    //calculate totalpercentage
	    calculateTotalAndPercentage(stdentity);
	    
	   
	    StdEntity savedStudent = stdrep.save(stdentity);

	    // Assign ranks to all students
	    assignRank();

	    // Fetch with rank
	    return stdrep.findById(savedStudent.getSno()).orElse(null);
	}


	@Override
	public void deletestd(long sno) {
		stdrep.deleteById(sno);
		
	}

	
	
	@Override
	public StdEntity updatestd(long sno, StdEntity stdentity) {
	    StdEntity update = stdrep.findById(sno).orElse(null);
	    if (update != null) {
	        update.setTelugu(stdentity.getTelugu());
	        update.setHindi(stdentity.getHindi());
	        update.setEnglish(stdentity.getEnglish());
	        update.setMaths(stdentity.getMaths());
	        update.setScience(stdentity.getScience());
	        update.setSocial(stdentity.getSocial());
	        update.setName(stdentity.getName());

	        // Recalculate total and percentage
	        calculateTotalAndPercentage(update);

	        //save update details
	        StdEntity updatedStudent = stdrep.save(update);

	        // Assign ranks after update
	        assignRank();

	        // Fetch after update details
	        return stdrep.findById(updatedStudent.getSno()).orElse(null);
	    }
	    return null;
	}

	

	
	@Override
	public StdEntity getonerecord(long sno) {
		
		return stdrep.findById(sno).get();
	}
	

	@Override
	public List<StdEntity> allrecords() {
		
		return stdrep.findAll();
	}

	
	@Override
	public void calculateTotalAndPercentage(StdEntity stdentity) {
		
	double total=	stdentity.getTelugu()+stdentity.getHindi()+stdentity.getEnglish()+stdentity.getMaths()+stdentity.getScience()+stdentity.getSocial();
	
	double percentage= (total/600)*100;
	
	stdentity.setTotal(total);
	
	stdentity.setPercentage(percentage);
		
	}


	
	@Override
	public void assignRank() {
	    List<StdEntity> students = stdrep.findAll();
	    if (!students.isEmpty()) {
	        // sort at descending order by percentage
	        students.sort((s1, s2) -> Double.compare(s2.getPercentage(), s1.getPercentage()));

	        int rank = 1;  
	        for (int i = 0; i < students.size(); i++) {
	            // same percentage assign same rank
	            if (i > 0 && students.get(i).getPercentage() == students.get(i - 1).getPercentage()) {
	                students.get(i).setRank(rank);  
	            } else {
	                students.get(i).setRank(rank); 
	            }

	            // check previous percentage and present percentage
	            if (i == students.size() - 1 || students.get(i).getPercentage() != students.get(i + 1).getPercentage()) {
	                rank++;
	            }
	        }

	        // assign ranks
	        stdrep.saveAll(students); 
	    }
	}


}
