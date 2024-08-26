package com.astro.webapp.controller;

import com.astro.webapp.dto.course.CourseResponse;
import com.astro.webapp.dto.course.CreateCourseRequest;
import com.astro.webapp.dto.module.CreateModuleRequest;
import com.astro.webapp.dto.module.ModuleResponse;
import com.astro.webapp.db.entity.Course;
import com.astro.webapp.db.entity.Module;
import com.astro.webapp.mapper.ResponseMapper;
import com.astro.webapp.service.CoursesService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/courses")
public class CoursesController {
    private final CoursesService coursesService;
    private final ResponseMapper responseMapper;

    @PostMapping
    public CourseResponse createNewCourse(@RequestBody @Valid CreateCourseRequest requestDto) {
        Course course = new Course();
        course.setName(requestDto.getName());
        return responseMapper.response(coursesService.createNew(course));
    }

    @GetMapping
    public List<CourseResponse> getAll() {
        return coursesService.getAll().stream()
                .map(responseMapper::response).toList();
    }

    @GetMapping("/{id}")
    public CourseResponse getById(@PathVariable Integer id) {
        return coursesService.getById(id)
                .map(responseMapper::response)
                .orElseThrow();
    }

    @PostMapping("/{id}")
    public ModuleResponse addModule(@PathVariable Integer id, @RequestBody @Valid CreateModuleRequest request) {
        Module module = new Module();
        module.setName(request.getName());
        return responseMapper.response(coursesService.addModule(id, module));
    }

    @GetMapping("/modules/{moduleId}")
    public ModuleResponse getModule(@PathVariable Integer moduleId) {
        Module module = coursesService.findModule(moduleId);
        return responseMapper.response(module);
    }
}
