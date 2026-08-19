package com.pushpendra.portfolio.controller;

import com.pushpendra.portfolio.entity.ContactMessage;
import com.pushpendra.portfolio.repository.ContactMessageRepository;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactMessageController {

    private final ContactMessageRepository repository;
    private final JavaMailSender mailSender;

    public ContactMessageController(
            ContactMessageRepository repository,
            JavaMailSender mailSender) {

        this.repository = repository;
        this.mailSender = mailSender;
    }

    @PostMapping
    public ContactMessage saveMessage(
            @RequestBody ContactMessage contactMessage) {

        // Save message to MySQL
        ContactMessage savedMessage = repository.save(contactMessage);

        // Send email notification
        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setTo("pushpendrasinghr810@gmail.com");
        mail.setSubject("New Portfolio Contact: " + contactMessage.getSubject());

        mail.setText(
                "You have received a new message from your portfolio website.\n\n"
                + "Name: " + contactMessage.getName() + "\n"
                + "Email: " + contactMessage.getEmail() + "\n"
                + "Subject: " + contactMessage.getSubject() + "\n\n"
                + "Message:\n"
                + contactMessage.getMessage()
        );

        mailSender.send(mail);

        return savedMessage;
    }
}