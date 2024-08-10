package com.astro.webapp.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateCourseRequestDto {

    @NotBlank(message = "Course name cannot be blank")
    private String name;
}
