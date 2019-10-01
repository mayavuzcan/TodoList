package com.task.todolist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.task.todolist.dao.ListsRepository;

import com.task.todolist.models.Lists;

@Service
public class ListsServiceImpl implements ListsService {
	
	@Autowired
	ListsRepository listRepository;
	

	
	
	@Override
	public ResponseEntity<Lists> save(Lists list) {

		System.out.println(list);
		list = listRepository.save(list);		
		return new ResponseEntity<Lists>(HttpStatus.OK);
	}
	
	@Override
	public List<Lists> getAll(){
		return listRepository.findAll();
	}

	
	
	@Override
	public 	List<Lists> getAuthorityl(Long id){
		
		return listRepository.findByListAuthority(id);
		
	}

	@Override
	public List<Lists> getStatus(String status) {
		
		return listRepository.findByListStatu(status);
	}

	@Override
	public void delete(Long id) {
		
		 listRepository.deleteById(id);
	}


	
	
}
