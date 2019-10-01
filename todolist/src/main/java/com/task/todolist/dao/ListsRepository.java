package com.task.todolist.dao;

import java.util.List;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.task.todolist.models.Lists;

public interface ListsRepository extends JpaRepository<Lists, Long> {
	@Query("select al from Lists al where email = ?1")
	Optional<Lists> findByEmail(String mail);
	
	@Query(value = "SELECT u FROM Lists u WHERE email = ?1")
	Lists login(String mail);
	
	List<Lists> findByListAuthority(Long id);
	List<Lists> findByListStatu(String id);
	void deleteById(Long id);


}
