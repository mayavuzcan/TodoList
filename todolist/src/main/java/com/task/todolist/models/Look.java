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
@Table(name = "looks", schema = "public")
@Data
public class Look {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	
	@Column(name="look_id",unique=true)
	private UUID uuid=UUID.randomUUID();
	
	@Column(name="look_name")
	private String lookName;
	
}
