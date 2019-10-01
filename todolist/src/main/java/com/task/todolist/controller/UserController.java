package com.task.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.task.todolist.exception.PasswordException;
import com.task.todolist.exception.UserNotFound;
import com.task.todolist.models.User;
import com.task.todolist.service.UserService;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin
@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/login")
	public ResponseEntity<User>login(@RequestBody User user) throws UserNotFound,PasswordException{
		
		return userService.login(user);
		
	}
	
	@PostMapping("/creatUser")
	public ResponseEntity<User> save(@RequestBody User user){
		
		return userService.save(user);
	}
	
	@GetMapping("/user")
	public List<User> getAll(){
		return userService.getAll();
	}
	
	@PutMapping("/updateUser")
	public ResponseEntity<User> update(@RequestBody User user){
		
		
		return userService.save(user);
	}
	
	

}
