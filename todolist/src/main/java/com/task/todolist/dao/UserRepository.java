package com.task.todolist.dao;

import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.task.todolist.models.User;;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query("select al from User al where email = ?1")
	Optional<User> findByEmail(String mail);
	
	@Query(value = "SELECT u FROM User u WHERE email = ?1")
	User login(String mail);
}
