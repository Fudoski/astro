package com.astro.webapp.service;

import com.astro.webapp.entity.Course;
import com.astro.webapp.entity.Module;
import com.astro.webapp.repository.CourseRepository;
import com.astro.webapp.repository.ModuleRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

@Service
@RequiredArgsConstructor
public class CoursesService {

    private final CourseRepository courseRepository;
    private final ModuleRepository moduleRepository;

    public Course createNew(Course course) {
        return courseRepository.save(course);
    }

    @Transactional
    @Cacheable("courses")
    public List<Course> getAll() {
        return StreamSupport.stream(courseRepository.findAll().spliterator(), false).toList();
    }

    public Optional<Course> getById(Integer id) {
        return courseRepository.findById(id)
                .map(course -> {
                    course.setModules(moduleRepository.findByCourseId(course.getId()));
                    return course;
                });
    }

    public Module addModule(Integer courseId, Module module) {
        Course course = courseRepository.findById(courseId).orElseThrow();
        module.setCourse(course);
        module.setCourseId(course.getId());
        return moduleRepository.save(module);
    }
}
