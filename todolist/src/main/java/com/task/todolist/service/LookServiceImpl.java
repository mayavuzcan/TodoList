package com.task.todolist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.task.todolist.dao.LookRepository;
import com.task.todolist.models.Look;

@Service
public class LookServiceImpl implements LookService {

	
	@Autowired
	LookRepository lookRepository;
	
	
	@Override
	public ResponseEntity<Look> save(Look look) {
		System.out.println(look);
		look = lookRepository.save(look);		
		return new ResponseEntity<Look>(HttpStatus.OK);
	}

	@Override
	public List<Look> getAll() {
		
		return lookRepository.findAll();

	}
	
	@Override
	public 	Optional<Look> getId(Long id){
		
		return lookRepository.findById(id);
		
	}

}
