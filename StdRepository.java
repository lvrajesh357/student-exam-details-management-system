package com.std.details.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.std.details.entity.StdEntity;

@Repository
public interface StdRepository extends JpaRepository<StdEntity, Long>{

	List<StdEntity> findAllByOrderByTotalDescPercentageAsc();
}
