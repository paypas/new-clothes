package com.sales.management.model;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class UserModel {
	public long id;
	public long roles;
	public String full_name;
	public String username;
	public String email;
	public String password;
	public String address;
	
	
	
	public UserModel() {
	}



	public UserModel(long id, long roles, String full_name, String username, String email, String password, String address) {
		this.id = id;
		this.roles = roles;
		this.full_name = full_name;
		this.username = username;
		this.email = email;
		this.password = password;
		this.address = address;
	}



	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	@Column(name = "roles", nullable = false)
	public long getRoles() {
		return roles;
	}



	public void setRoles(long roles) {
		this.roles = roles;
	}



	@Column(name = "full_name", nullable = false)
	public String getFull_name() {
		return full_name;
	}



	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}



	@Column(name = "username", nullable = false)
	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	@Column(name = "email", nullable = false)
	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}
	
	public void setPasswordWithoutEncrypt(String password){
		this.password = password;
	}
	
	
	@Column(name = "address", nullable = false)
	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String toString() {
		return email;
		
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
