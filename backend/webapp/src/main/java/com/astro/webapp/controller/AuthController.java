package com.astro.webapp.controller;

import com.astro.webapp.dto.LoginResponseDto;
import com.astro.webapp.dto.LoginUserDto;
import com.astro.webapp.dto.RegisterUserDto;
import com.astro.webapp.entity.User;
import com.astro.webapp.exception.UserSignUpException;
import com.astro.webapp.service.AuthenticationService;
import com.astro.webapp.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final JwtService jwtService;
    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<User> register(@RequestBody RegisterUserDto registerUserDto) throws UserSignUpException {
        User registeredUser = authenticationService.signUp(registerUserDto);
        registeredUser.eraseCredentials();
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<LoginResponseDto> authenticate(@RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = authenticationService.authenticate(loginUserDto);
        return ResponseEntity.ok(LoginResponseDto.builder()
                .token(jwtService.generateToken(Hibernate.unproxy(authenticatedUser, User.class)))
                .expiresIn(jwtService.getExpirationTime())
                .build());
    }

    @ExceptionHandler
    public ProblemDetail handleSignUpException(UserSignUpException exception) {
        String username = exception.getUsername();
        ProblemDetail errorDetail = ProblemDetail.forStatusAndDetail(
                HttpStatusCode.valueOf(400), "Unable to register a new user");
        errorDetail.setProperty("description", "The username '%s' is already taken".formatted(username));
        return errorDetail;
    }
}
