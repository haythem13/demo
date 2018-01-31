package com.example.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Repository.ContactRepository;
import com.example.demo.entities.Contact;

@RestController
@RequestMapping("/manager-contact")
public class ContactRestService  {
	@Autowired
	private ContactRepository contactRepository;
	@RequestMapping(value = "/contacts",method= RequestMethod.GET)
	public List<Contact> getContacts(){
		return contactRepository.findAll();
		
	}

	@RequestMapping(value = "/contacts/{id}",method= RequestMethod.GET)
	public Contact getContactById(@PathVariable Long id){
		return contactRepository.findOne(id);
		
	}
	
	@RequestMapping(value = "/contacts",method= RequestMethod.POST)
	public Contact add(@RequestBody	Contact c){
		return contactRepository.save(c);
		
	}
	
	@RequestMapping(value = "/contacts/{id}",method= RequestMethod.DELETE)
	public Boolean DelById(@PathVariable Long id){
		 contactRepository.delete(id);
		return true;
	}
	
	@RequestMapping(value = "/contacts/{id}",method= RequestMethod.PUT)
	public Contact apdate(@PathVariable Long id , @RequestBody	Contact c){
		c.setId(id);
		return contactRepository.save(c);
		
	}

}
