package com.sales.management.controller;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.sales.management.model.UserModel;

@Repository
public interface UserRepositoryCrud extends CrudRepository<UserModel, Long>{
	@Query("select u from UserModel u where u.email=?3")
	public UserModel login(String email, String password);
}
