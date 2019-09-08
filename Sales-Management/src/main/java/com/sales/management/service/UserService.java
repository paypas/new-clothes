package com.sales.management.service;

import com.sales.management.model.UserModel;

public interface UserService {
	UserModel login(String email, String password);
	UserModel findByUsername(String username);
}
