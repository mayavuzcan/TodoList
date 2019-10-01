package com.task.todolist.models;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "todos", schema = "public")
@Data
public class Todos {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="todos_id",unique=true)
	private UUID uuid=UUID.randomUUID();
	@Column(name="todos_text")
	private String todosText;

	@Column(name ="todos_description")
	private String todosDescription;
	
	@Column(name ="todos_statu")
	private String todosStatu;
	
	@Column(name ="todos_authority")
	private Long todosAuthority;
	
	@Column(name ="todos_Name")
	private String todosName;
	

}
