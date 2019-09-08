package com.sales.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sales.management.controller.UserRepositoryCrud;
import com.sales.management.model.UserModel;
import com.sales.management.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

	@Override
	public UserModel login(String email, String password) {
		// TODO Auto-generated method stub
		return userRepository.login(email, password);
	}

	@Override
	public UserModel findByUsername(String username) {
		// TODO Auto-generated method stub
		return userRepository.findByUsername(username);
	}

}
