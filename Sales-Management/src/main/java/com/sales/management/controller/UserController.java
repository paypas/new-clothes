package com.sales.management.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sales.management.exception.ResourceNotFoundException;
import com.sales.management.model.UserModel;
import com.sales.management.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	private UserRepositoryCrud userRepositoryCrud;
	
	@GetMapping
	public List<UserModel> getAllUserModel(){
		return userRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<UserModel> getUserModelById(@PathVariable(value = "id") Long userId)throws ResourceNotFoundException {
		UserModel user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException(""));
		return ResponseEntity.ok().body(user);
	}
	
//	@GetMapping("/login")
//	public ResponseEntity<UserModel> loginControl(
//			@Valid @RequestBody String data) throws NoSuchAlgorithmException {
//		JsonParser springParse = JsonParserFactory.getJsonParser();
//		Map<String, Object> map = springParse.parseMap(data);
//		
//		String mapArray[]= new String[map.size()];
//
//		UserModel user = userRepository.login(map.get("email").toString(), getMD5(map.get("password").toString()));
//		return ResponseEntity.ok().body(user);
//	}
	
	@GetMapping("/login")
	public String loginControl(
			@Valid @RequestBody String data) throws NoSuchAlgorithmException {
		JsonParser springParse = JsonParserFactory.getJsonParser();
		Map<String, Object> map = springParse.parseMap(data);
		
		String mapArray[]= new String[map.size()];

		UserModel user = userRepository.login(map.get("email").toString(), getMD5(map.get("password").toString()));
		return "redirect:/redirect";
	}
	
	@GetMapping("/findUsername")
	public String findByUsername(
			@Valid @RequestBody String data) {
		JsonParser springParse = JsonParserFactory.getJsonParser();
		Map<String, Object> map = springParse.parseMap(data);
		
		String mapArray[]= new String[map.size()];

		UserModel user = userRepository.findByUsername(map.get("username").toString());
		return "redirect:/redirect";
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<UserModel> updateUserModel(@PathVariable(value = "id") Long userId,
			@Valid @RequestBody String userDetails) throws ResourceNotFoundException, NoSuchAlgorithmException {
		JsonParser springParse = JsonParserFactory.getJsonParser();
		Map<String, Object> map = springParse.parseMap(userDetails);
		
		String mapArray[]= new String[map.size()];
		UserModel user = userRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("UserModel not found for this id :: " + userId));

		user.setEmail(map.get("email").toString());
		user.setFull_name(map.get("full_name").toString());
		user.setUsername(map.get("username").toString());
		user.setPassword(getMD5(map.get("password").toString()));
		user.setRoles(3);
		final UserModel updatedUserModel = userRepository.save(user);
		return ResponseEntity.ok(updatedUserModel);
	}

	@CrossOrigin
	@PostMapping("/register")
	public UserModel createUserModel(@Valid @RequestBody UserModel user) throws NoSuchAlgorithmException {
		user.setRoles(3);
		user.setPassword(getMD5(user.getPassword()));
		return userRepository.save(user);
	}
	
	@GetMapping(value = "/redirect")
	public void method(HttpServletResponse httpServletResponse) {
	    httpServletResponse.setHeader("Location", "localhost:8080/");
	    httpServletResponse.setStatus(302);
	}

	@DeleteMapping("/{id}")
	public Map<String, Boolean> deleteUserModel(@PathVariable(value = "id") Long userId) throws ResourceNotFoundException{
		UserModel user = userRepository.findById(userId).orElseThrow(()->new ResourceNotFoundException(""));

		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	
	
	
	public static String getMD5(String data) throws NoSuchAlgorithmException
    { 
		MessageDigest messageDigest=MessageDigest.getInstance("MD5");

        messageDigest.update(data.getBytes());
        byte[] digest=messageDigest.digest();
        StringBuffer sb = new StringBuffer();
        for (byte b : digest) {
            sb.append(Integer.toHexString((int) (b & 0xff)));
        }
        return sb.toString();
    }
	
}
