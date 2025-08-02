package com.std.details.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.std.details.entity.StdEntity;
import com.std.details.repository.services.StdServiceImp;

@RestController
@RequestMapping("/examdetails")
@CrossOrigin(origins = {"http://localhost:3000"})
public class MyController {

	@Autowired
	private StdServiceImp stdimp;
	
	
	@PostMapping("/exam")
	public StdEntity savedetails(@RequestBody StdEntity stdentity) {
		StdEntity data=stdimp.saveentity(stdentity);
		return data;
	}
	
	@GetMapping("/exam")
	public List<StdEntity> alldetails() {
		List<StdEntity> allrecords=stdimp.allrecords();
		return allrecords;
	}
	
	@GetMapping("/exam/{sno}")
	public StdEntity getonerecord(@PathVariable long sno) {
		StdEntity getrecord=stdimp.getonerecord(sno);
		return getrecord;
	}
	
	@DeleteMapping("/exam/{sno}")
	public void deleterecord(@PathVariable long sno) {
		stdimp.deletestd(sno);
			}
	
	@PutMapping("/exam/{sno}")
	public StdEntity updateRecord(@PathVariable long sno,@RequestBody StdEntity stdentity) {
		StdEntity updateone=stdimp.updatestd(sno, stdentity);
		return updateone;
	}
	
	

}
