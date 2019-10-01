package com.task.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.task.todolist.models.Todos;
import com.task.todolist.service.TodosService;

@CrossOrigin
@RestController
public class TodosController {
	
	@Autowired
	TodosService todosService;
	
	@PostMapping("/creatTodos")
	public ResponseEntity<Todos> save(@RequestBody Todos todos){
		
		return todosService.save(todos);
	}
	
	@GetMapping("/todos")
	public List<Todos> getAll(){
		return todosService.getAll();
	}
	@GetMapping("/todoss/{id}/yavuz")
	public List<Todos> getAll(@PathVariable (value = "id") Long id){
		return todosService.getAuthorityl(id);
	}
	@GetMapping("/todoss/{id}/{yav}")
	public List<Todos> getAll(@PathVariable (value = "id") Long id, @PathVariable (value ="yav") String yav){
		return todosService.getText(id,yav);
	}
	
	@PutMapping("/updateTodos")
	public ResponseEntity<Todos> update(@RequestBody Todos todos){
		
		
		return todosService.save(todos);
	}

}
