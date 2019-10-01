package com.task.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.task.todolist.models.Lists;
import com.task.todolist.service.ListsService;

@CrossOrigin
@RestController
public class ListController {
	
	@Autowired
	ListsService listService;
	
	@PostMapping("/creatList")
	public ResponseEntity<Lists> save(@RequestBody Lists list){
		
		return listService.save(list);
	}
	
	@GetMapping("/lists")
	public List<Lists> getAll(){
		return listService.getAll();
	}
	@GetMapping("/listss/{id}")
	public List<Lists> getAll(@PathVariable (value = "id") Long id){
		return listService.getAuthorityl(id);
	}
	
	@GetMapping("/statu/{status}")
	public List<Lists> getAll(@PathVariable (value = "status") String status){
		return listService.getStatus(status);
	}
	
	@PutMapping("/updateLists")
	public ResponseEntity<Lists> update(@RequestBody Lists list){
		
		
		return listService.save(list);
	}
	@DeleteMapping("/deleteList/{id}")
	public void delete(@PathVariable (value = "id") Long id){
		
		 listService.delete(id);
	}
	
	

}
