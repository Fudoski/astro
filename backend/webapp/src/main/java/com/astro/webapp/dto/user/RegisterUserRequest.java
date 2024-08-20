package com.astro.webapp.dto.user;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterUserRequest {
    @NotBlank
    private String username;
    @NotBlank
    private String password;
}
