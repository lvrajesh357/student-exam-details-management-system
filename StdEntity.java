	package com.std.details.entity;
	
	import jakarta.persistence.*;
	
	@Entity
	@Table(name="examdetails")
	public class StdEntity {
	
	    @Id
	    @GeneratedValue(strategy=GenerationType.IDENTITY)
	    private long sno;
	    
	  
	    
	    @Column(name = "name")
	    private String name;

	    @Column(name = "telugu")
	    private int telugu;

	    @Column(name = "hindi")
	    private int hindi;

	    @Column(name = "english")
	    private int english;

	    @Column(name = "maths")
	    private int maths;

	    @Column(name = "science")
	    private int science;

	    @Column(name = "social")
	    private int social;

	    @Column(nullable = false)
	    private double total;

	    @Column(nullable = false)
	    private double percentage;

	    @Column(name = "student_rank")
	    private Integer rank;

	    @Column(nullable = false)
	    private String status;
	
	
	    
	   
	    
	
	    public StdEntity() {}
	
	    public StdEntity(String name, int telugu, int hindi, int english, int maths, int science, int social) {
	        this.name = name;
	        this.telugu = telugu;
	        this.hindi = hindi;
	        this.english = english;
	        this.maths = maths;
	        this.science = science;
	        this.social = social;
	        calculateTotalAndPercentage();
	    }
	
	    public long getSno() {
	        return sno;
	    }
	
	    public void setSno(long sno) {
	        this.sno = sno;
	    }
	
	    public String getName() {
	        return name;
	    }
	
	    public void setName(String name) {
	        this.name = name;
	    }
	
	    public int getTelugu() {
	        return telugu;
	    }
	
	    public void setTelugu(int telugu) {
	        this.telugu = telugu;
	        calculateTotalAndPercentage();
	    }
	    
	   
	
	    public int getHindi() {
	        return hindi;
	    }
	
	    public void setHindi(int hindi) {
	        this.hindi = hindi;
	        calculateTotalAndPercentage();
	    }
	    
	   
	    public int getEnglish() {
	        return english;
	    }
	
	    public void setEnglish(int english) {
	        this.english = english;
	        calculateTotalAndPercentage();
	    }
	    
	    
	    public int getMaths() {
	        return maths;
	    }
	
	    public void setMaths(int maths) {
	        this.maths = maths;
	        calculateTotalAndPercentage();
	    }
	    
	
	    public int getScience() {
	        return science;
	    }
	
	    public void setScience(int science) {
	        this.science = science;
	        calculateTotalAndPercentage();
	    }
	    
	   
	    public int getSocial() {
	        return social;
	    }
	
	    public void setSocial(int social) {
	        this.social = social;
	        calculateTotalAndPercentage();
	    }
	    
	
	    public double getTotal() {
	        return total;
	        
	    }
	    
	    public void setTotal(double total) {
	    	this.total=total;
	    }
	
	    public double getPercentage() {
	        return percentage;
	    }
	    public void setPercentage(double percentage) {
	    	this.percentage=percentage;
	    }
	
	    public Integer getRank() {
	        return rank;
	    }
	
	    public void setRank(Integer rank) {
	        if ("Pass".equals(this.status)) {
	            this.rank = rank;
	        }
	        else {
	            this.rank = null;
	        }
	    }
	
	    public String getStatus() {
	        return status;
	    }
	    public void setStatus(String status) {
	    	this.status=status;
	    }
	    
	    
	    
	    private void calculateTotalAndPercentage() {
	        int totalMarks = 0;
	        boolean isFail = false;
	        boolean isAbsent = false;

//	        String[] subjects = {telugu, hindi, english, maths, science, social};
	        
	        
	       int[] subjects = {(int) this.telugu, (int) this.hindi, (int) this.english, (int) this.maths, (int) this.science, (int) this.social};


	       for (int marks : subjects) {
	    	    if (marks == 0) { // or some other special number to represent absence
	    	        isAbsent = true; // Mark as absent
	    	    } 
	    	    else {
	    	       if (marks <= 35) {
	    	            isFail = true; // Mark as fail if marks are less than or equal to 35
	    	        }
	    	        totalMarks += marks;
	    	    }
	       }
	        if (isAbsent) {
	            this.status = "Absent";
	            this.total = 0;
	            this.percentage = 0;
	            this.rank = null;
	        }
	        else {
	            this.total = totalMarks;
	            this.percentage = (totalMarks / 600.0) * 100;
	            this.status = isFail ? "Fail" : "Pass";
	            if (this.status.equals("Fail")) {
	                this.rank = null;
	            }
	        }
	    }
	
	}
	
	
