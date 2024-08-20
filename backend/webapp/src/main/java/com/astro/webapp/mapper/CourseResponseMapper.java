package com.astro.webapp.mapper;

import com.astro.webapp.dto.course.CourseResponse;
import com.astro.webapp.entity.Course;
import org.springframework.stereotype.Component;

@Component
public class CourseResponseMapper {

    public CourseResponse response(Course course) {
        CourseResponse response = new CourseResponse();
        response.setId(course.getId());
        response.setName(course.getName());

        response.setCreatedBy(course.getCreatedBy());
        response.setUpdatedBy(course.getUpdatedBy());

        response.setCreatedAt(course.getCreatedAt());
        response.setUpdatedAt(course.getUpdatedAt());
        return response;
    }
}
