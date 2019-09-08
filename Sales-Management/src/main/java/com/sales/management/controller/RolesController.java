package com.sales.management.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sales.management.exception.ResourceNotFoundException;
import com.sales.management.model.RolesModel;
import com.sales.management.repository.RolesRepository;

@RestController
@RequestMapping("/api/v1/roles")
public class RolesController {
	@Autowired
	private RolesRepository rolesRepository;
	
	@GetMapping
	public List<RolesModel> getAllRolesModel(){
		return rolesRepository.findAll();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<RolesModel> getRolesModelById(@PathVariable(value = "id") Long studentId)throws ResourceNotFoundException {
		RolesModel student = rolesRepository.findById(studentId).orElseThrow(()->new ResourceNotFoundException(""));
		return ResponseEntity.ok().body(student);
	}

	@PostMapping
	public RolesModel createRolesModel(@Valid @RequestBody RolesModel student) {
		return rolesRepository.save(student);
	}

	@DeleteMapping("/{id}")
	public Map<String, Boolean> deleteRolesModel(@PathVariable(value = "id") Long studentId) throws ResourceNotFoundException{
		RolesModel student = rolesRepository.findById(studentId).orElseThrow(()->new ResourceNotFoundException(""));

		rolesRepository.delete(student);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
