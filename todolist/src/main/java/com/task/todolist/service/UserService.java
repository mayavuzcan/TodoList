package com.task.todolist.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.task.todolist.exception.PasswordException;
import com.task.todolist.exception.UserNotFound;
import com.task.todolist.models.User;

public interface UserService {
	
ResponseEntity<User> login(User user) throws UserNotFound, PasswordException;
	
	ResponseEntity<User> save(User user);

	/*public PlayerQueryDTO updatePlayer(UUID id,UpdatePlayer playerUpdateDTO);*/
	List<User> getAll();

}
