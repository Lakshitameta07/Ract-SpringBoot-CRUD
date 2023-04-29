package com.services.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.services.backend.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}