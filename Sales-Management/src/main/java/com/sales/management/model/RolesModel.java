package com.sales.management.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="roles")
public class RolesModel {
	public long id;
	public String roles_name;
	
	
	public RolesModel() {
		
	}
	
	public RolesModel(long id, String roles_name) {
		this.id = id;
		this.roles_name = roles_name;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "roles_name", nullable = false)
	public String getRoles_name() {
		return roles_name;
	}
	public void setRoles_name(String roles_name) {
		this.roles_name = roles_name;
	}
}
