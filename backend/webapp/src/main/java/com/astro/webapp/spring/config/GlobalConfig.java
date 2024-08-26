package com.astro.webapp.spring.config;

import com.astro.webapp.db.entity.User;
import com.astro.webapp.db.entity.UserSettings;
import com.astro.webapp.db.repository.UserRepository;
import jakarta.servlet.ServletContext;
import jakarta.servlet.ServletException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.WebApplicationInitializer;

@Configuration
@EnableScheduling
@RequiredArgsConstructor
@Slf4j
public class GlobalConfig implements WebApplicationInitializer {

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        long count = userRepository.count();
        if (count == 0) {
            log.info("Detected first application run, performing user initialization");

            User admin = new User();
            admin.setEnabled(true);
            admin.setAccountNonExpired(true);
            admin.setAccountNonLocked(true);
            admin.setUsername("test@astro.com");
            admin.setPassword(passwordEncoder.encode("password"));

            admin.setUserSettings(
                    UserSettings.builder()
                            .firstname("Test")
                            .surname("Admin")
                            .username(admin.getUsername())
                            .build()
            );

            userRepository.save(admin);
            log.info("Admin user has been registered.");
        }
    }
}
