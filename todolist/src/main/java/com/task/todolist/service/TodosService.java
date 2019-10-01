package com.task.todolist.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.task.todolist.models.Todos;

public interface TodosService {
	
	ResponseEntity<Todos> save(Todos list);
	
	List<Todos> getAll();


	List<Todos> getAuthorityl(Long id);
	List<Todos> getText(Long id, String yav);
}
