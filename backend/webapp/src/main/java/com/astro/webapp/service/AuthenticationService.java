package com.astro.webapp.service;

import com.astro.webapp.dto.LoginUserDto;
import com.astro.webapp.dto.RegisterUserDto;
import com.astro.webapp.entity.User;
import com.astro.webapp.exception.UserSignUpException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final UsersService usersService;

    public User signUp(RegisterUserDto request) throws UserSignUpException {
        return usersService.createNewUser(User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .build());
    }

    public User authenticate(LoginUserDto request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword())
        );
        return usersService.findByUsername(request.getUsername()).orElseThrow();
    }
}
