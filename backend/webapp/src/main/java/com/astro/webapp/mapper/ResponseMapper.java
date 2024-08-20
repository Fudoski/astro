package com.astro.webapp.mapper;

import com.astro.webapp.dto.course.CourseResponse;
import com.astro.webapp.dto.module.ModuleResponse;
import com.astro.webapp.entity.Course;
import com.astro.webapp.entity.Module;
import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ResponseMapper {
    private final CourseResponseMapper courseResponseMapper;
    private final ModuleResponseMapper moduleResponseMapper;

    public CourseResponse response(Course course) {
        CourseResponse response = courseResponseMapper.response(course);
        if (course.getModules() != null && Hibernate.isInitialized(course.getModules())) {
            List<ModuleResponse> modules = course.getModules().stream().map(this::response).toList();
            response.setModules(modules);
        }
        return response;
    }

    public ModuleResponse response(Module module) {
        return moduleResponseMapper.response(module);
    }
}
