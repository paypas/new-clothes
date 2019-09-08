package com.sales.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sales.management.model.UserModel;

@Repository
public interface UserRepository extends JpaRepository<UserModel, Long> {

	@Query("select u from UserModel u where u.email=?1 and u.password=?2" )
	public UserModel login(String email, String password);
	
	@Query("select u from UserModel u where u.username=?1")
	public UserModel findByUsername(String username);

}
