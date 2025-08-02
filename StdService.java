package com.std.details.repository.services;

import java.util.List;

import com.std.details.entity.StdEntity;

public interface StdService {
	
	public StdEntity saveentity(StdEntity stdentity);
	
	public void deletestd(long sno);
	
	public StdEntity updatestd(long sno,StdEntity stdentity);
	
	public StdEntity getonerecord(long sno);
	
	public List<StdEntity> allrecords();
	
	public void calculateTotalAndPercentage(StdEntity stdentity);
	
	public  void assignRank();
	
	 

}
