package com.sales.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sales.management.model.RolesModel;

public interface RolesRepository extends JpaRepository<RolesModel, Long> {

}
