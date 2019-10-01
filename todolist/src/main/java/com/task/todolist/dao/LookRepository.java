package com.task.todolist.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.todolist.models.Look;

public interface LookRepository  extends JpaRepository<Look, Long>{
	Optional<Look> findById(Long id);

}
