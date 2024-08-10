package com.astro.webapp.service;

import com.astro.webapp.entity.Course;
import com.astro.webapp.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CoursesService {

    private final CourseRepository courseRepository;

    public Course createNew(Course course) {
        return courseRepository.save(course);
    }
}
