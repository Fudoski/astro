package com.astro.webapp.service.user;

import com.astro.webapp.entity.Authority;
import com.astro.webapp.entity.User;
import com.astro.webapp.exception.UserSignUpException;
import com.astro.webapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User createNewUser(User newUser) throws UserSignUpException {
        boolean exists = userRepository.existsById(newUser.getUsername());
        if (exists) {
            throw new UserSignUpException(newUser.getUsername());
        }
        newUser.setAuthorities(
                List.of(Authority.builder()
                        .username(newUser.getUsername())
                        .role("USER")
                        .build()
                ));
        return userRepository.save(newUser);
    }

    public Optional<User> findByUsername(String username) {
        return userRepository.findById(username);
    }

}
