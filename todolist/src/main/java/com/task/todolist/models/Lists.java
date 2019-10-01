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
@Table(name = "lists", schema = "public")
@Data
public class Lists {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="list_id",unique=true)
	private UUID uuid=UUID.randomUUID();
	@Column(name="list_name")
	private String listName;

	@Column(name ="list_description")
	private String listDescription;
	
	@Column(name ="list_statu")
	private String listStatu;
	
	@Column(name ="list_authority")
	private Long listAuthority;

}
