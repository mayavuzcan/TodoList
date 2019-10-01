package com.task.todolist.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.todolist.models.Todos;

public interface TodosRepository extends JpaRepository<Todos, Long> {
	
	List<Todos> findByTodosAuthority(Long id);
	List<Todos> findByTodosText(String yav);


}
