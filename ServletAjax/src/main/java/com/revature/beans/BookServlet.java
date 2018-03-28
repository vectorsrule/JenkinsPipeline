package com.revature.beans;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebServlet("/book")
public class BookServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException{
		
		Book b = new Book("The Hungry Caterpiller", "Best book ever", 1234567, "Travis", 500);
		ObjectMapper om = new ObjectMapper();
		String bookString = om.writeValueAsString(b);
		System.out.println(bookString);
		resp.getWriter().write(bookString);
		
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException{
		
		ObjectMapper om = new ObjectMapper();
		
		Book b = om.readValue(req.getParameter("book"), Book.class);
		System.out.println(b);
		System.out.println(b.getTitle());
		
	}
}
