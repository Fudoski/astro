package com.astro.webapp.dto.module;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CreateModuleRequest {
    @NotBlank(message = "Module name cannot be blank")
    private String name;
}
