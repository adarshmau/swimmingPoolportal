package com.example.projectPool.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class MailService {
	
	@Autowired
	private JavaMailSender javaMailSender ;
	
	public String sendEmailToVerify(String email) throws Exception
	{
		MimeMessage mime = javaMailSender.createMimeMessage() ;
		MimeMessageHelper helper = new MimeMessageHelper(mime) ;
		
		helper.setTo(email) ;
		helper.setSubject("Verify Your Email Address") ; 
		
		String activationCode = Util.generateActivationCode() ;		
		StringBuilder link = new StringBuilder() ;
		link.append("<h1>Click on below link to verify email</h1><br>") ;
		link.append("<a href='http://localhost:9090/appUser/verification/email/"+email+"/activationCode/"+activationCode+"'>Verify Email</a>") ;
		
		helper.setText(link.toString(),true) ;
		
		javaMailSender.send(mime) ;
		
		return activationCode ;
	}
	
	public String forgotPasswordLink(String email) throws Exception
	{
		MimeMessage mime = javaMailSender.createMimeMessage() ;
		MimeMessageHelper helper = new MimeMessageHelper(mime) ;
		
		helper.setTo(email) ;
		helper.setSubject("Reset Password Link") ;
		String activationCode = Util.generateActivationCode() ;
		
		StringBuilder text = new StringBuilder() ;
		text.append("<h1>Reset Password</h1>") ;
		text.append("<a href = 'http://localhost:4200/passwordReset/"+email+"/"+activationCode+"'>") ;
		text.append("Click to Reset Password</a>") ;
		
		helper.setText(text.toString(),true) ;
		
		javaMailSender.send(mime) ;	
		return activationCode ;
	}
}
