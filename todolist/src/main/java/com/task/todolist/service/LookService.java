package com.task.todolist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;

import com.task.todolist.models.Look;

public interface LookService {
	
	ResponseEntity<Look> save(Look look);

	/*public PlayerQueryDTO updatePlayer(UUID id,UpdatePlayer playerUpdateDTO);*/
	List<Look> getAll();
	Optional<Look> getId(Long id);

}
