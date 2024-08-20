package com.astro.webapp.dto.course;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateCourseRequest {

    @NotBlank(message = "Course name cannot be blank")
    private String name;
}
