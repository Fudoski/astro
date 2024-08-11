package com.astro.webapp.service;

import com.astro.webapp.entity.Course;
import com.astro.webapp.repository.CourseRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.StreamSupport;

@Service
@RequiredArgsConstructor
public class CoursesService {

    private final CourseRepository courseRepository;

    public Course createNew(Course course) {
        return courseRepository.save(course);
    }

    @Transactional
    @Cacheable("courses")
    public List<Course> getAll() {
        return StreamSupport.stream(courseRepository.findAll().spliterator(), false).toList();
    }
}
