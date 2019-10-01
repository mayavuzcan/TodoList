package com.task.todolist.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.task.todolist.dao.TodosRepository;
import com.task.todolist.models.Todos;


@Service
public class TodosServiceImpl implements TodosService {
	
	@Autowired
	TodosRepository todosRepository;
	

	@Override
	public ResponseEntity<Todos> save(Todos todo) {
		System.out.println(todo);
		todo = todosRepository.save(todo);		
		return new ResponseEntity<Todos>(HttpStatus.OK);
	}

	@Override
	public List<Todos> getAuthorityl(Long id) {
		return todosRepository.findByTodosAuthority(id);
	}
	@Override
	public List<Todos> getAll(){
		return todosRepository.findAll();
	}

	@Override
	public List<Todos> getText(Long id,String yav) {
		return todosRepository.findByTodosText(yav);
	}
	
	

}
