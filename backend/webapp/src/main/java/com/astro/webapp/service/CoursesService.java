package com.astro.webapp.service;

import com.astro.webapp.db.entity.Course;
import com.astro.webapp.db.entity.Module;
import com.astro.webapp.db.repository.CourseRepository;
import com.astro.webapp.db.repository.ModuleRepository;
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
        return StreamSupport.stream(courseRepository.findAll().spliterator(), false)
                .peek(this::loadModulesForCourse)
                .toList();
    }

    public Optional<Course> getById(Integer id) {
        return courseRepository.findById(id)
                .stream()
                .peek(this::loadModulesForCourse)
                .findAny();
    }

    public Module addModule(Integer courseId, Module module) {
        Course course = courseRepository.findById(courseId).orElseThrow();
        module.setCourse(course);
        module.setCourseId(course.getId());
        return moduleRepository.save(module);
    }

    private void loadModulesForCourse(Course course) {
        course.setModules(moduleRepository.findByCourseId(course.getId()));
    }

    public Module findModule(Integer moduleId) {
        return moduleRepository.findById(moduleId).orElseThrow();
    }
}
