package com.task.todolist.models;
import java.util.UUID;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

import lombok.Data;

@Entity
@Table(name = "user", schema = "public")
@Data
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="user_id",unique=true)
	private UUID uuid=UUID.randomUUID();

	@Column(name="user_name")
	private String userName;

	@Column(name ="user_surname")
	
	private String userSurname;
	
	@Column(name ="user_head")
	
	private String userHead;
	
	@Column(name ="user_email")
	@Email
	private String email;
	
	@Column(name ="user_password")
	private String password;
	
	
	
}
