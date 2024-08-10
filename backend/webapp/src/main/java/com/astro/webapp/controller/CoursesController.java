package com.astro.webapp.controller;

import com.astro.webapp.dto.CreateCourseRequestDto;
import com.astro.webapp.entity.Course;
import com.astro.webapp.service.CoursesService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/courses")
public class CoursesController {
    private final CoursesService coursesService;

    @PostMapping
    public Course createNewCourse(@RequestBody @Valid CreateCourseRequestDto requestDto) {
        Course course = new Course();
        course.setName(requestDto.getName());
        return coursesService.createNew(course);
    }
}
