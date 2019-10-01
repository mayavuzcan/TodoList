package com.task.todolist.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.task.todolist.models.Look;
import com.task.todolist.service.LookService;

@CrossOrigin
@RestController
public class LookController {
	
	@Autowired
	LookService lookService;
	
	@GetMapping("/looks/{id}")
	public Optional<Look> getAll(@PathVariable (value = "id") Long id){
		return lookService.getId(id);
	}
	
	@PostMapping("/creatLook")
	public ResponseEntity<Look> save(@RequestBody Look look){
		
		return lookService.save(look);
	}

}
