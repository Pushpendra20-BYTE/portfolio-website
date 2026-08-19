package com.pushpendra.portfolio.controller;

import com.pushpendra.portfolio.entity.Project;
import com.pushpendra.portfolio.repository.ProjectRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectRepository repository;

    public ProjectController(ProjectRepository repository) {
        this.repository = repository;
    }

    // Get all projects
    @GetMapping
    public List<Project> getAllProjects() {
        return repository.findAll();
    }

    // Add a new project
    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return repository.save(project);
    }
}