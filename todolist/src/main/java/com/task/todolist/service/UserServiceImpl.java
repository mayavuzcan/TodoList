package com.task.todolist.service;

import java.util.List;


import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.task.todolist.dao.UserRepository;
import com.task.todolist.exception.PasswordException;
import com.task.todolist.exception.UserNotFound;
import com.task.todolist.models.User;

@Service
public class UserServiceImpl implements UserService {

	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public ResponseEntity<User>login(User user) throws UserNotFound,PasswordException{
		
		Optional<User> newUser = userRepository.findByEmail(user.getEmail());
		
		if(newUser.isPresent()) {
			if(StringUtils.equals(newUser.get().getPassword(), user.getPassword())) {
				return new ResponseEntity<User>(newUser.get(),HttpStatus.OK);
			}else {
				throw new PasswordException("Hatalı şifre");
			}
		}else{
			throw new UserNotFound("Player bulunamadı");
		}
		
		
	}
	@Override
	public ResponseEntity<User> save(User user) {

		System.out.println(user);
		user = userRepository.save(user);		
		return new ResponseEntity<User>(HttpStatus.OK);
	}
	
	@Override
	public List<User> getAll(){
		return userRepository.findAll();
	}
	
	
}
