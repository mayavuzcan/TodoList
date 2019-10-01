package com.task.todolist.service;

import java.util.List;

import org.springframework.http.ResponseEntity;


import com.task.todolist.models.Lists;

public interface ListsService {
	
	
	ResponseEntity<Lists> save(Lists list);

	/*public PlayerQueryDTO updatePlayer(UUID id,UpdatePlayer playerUpdateDTO);*/
	List<Lists> getAll();
	
	List<Lists> getAuthorityl(Long id);
	List<Lists> getStatus(String status);

	void delete(Long id);


}
