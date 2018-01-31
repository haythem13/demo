package com.example.demo;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.Repository.ContactRepository;
import com.example.demo.entities.Contact;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
  @Autowired
	private ContactRepository contactRepository;
  
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		DateFormat df= new SimpleDateFormat("dd/MM/yyyy");
		contactRepository.save(new Contact("benjannet","abdallah","benjanet@gmail.com", df.parse("12/01/1986") , 21111111 ,"abdallah.jpg"));
		contactRepository.save(new Contact("omri","lamine","lamine@gmail.com", df.parse("12/01/1986") , 21111111 ,"lamine.jpg"));
		contactRepository.save(new Contact("sehli","nidhal","nidhal@gmail.com", df.parse("12/01/1986") , 21111111 ,"nidhal.jpg"));
contactRepository.findAll().forEach(c -> {
	System.out.println(c.getNom());
});
	}
}
