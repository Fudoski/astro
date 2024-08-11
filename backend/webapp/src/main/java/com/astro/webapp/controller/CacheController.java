package com.astro.webapp.controller;

import com.astro.webapp.service.CacheService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cache/invalidate")
@RequiredArgsConstructor
public class CacheController {
    private final CacheService cacheService;

    @PostMapping()
    public void invalidateCache() {
        cacheService.invalidateAll();
    }

    @PostMapping("users")
    public void invalidateUsersCache() {
        cacheService.invalidateUserCache();
    }
}
