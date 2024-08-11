package com.astro.webapp.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.Cache;
import org.springframework.cache.CacheManager;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
@Slf4j
public class CacheService {
    private final CacheManager cacheManager;

    public void invalidateAll() {
        log.info("Execute cache invalidation");
        cacheManager.getCacheNames().stream()
                .map(cacheManager::getCache)
                .filter(Objects::nonNull)
                .forEach(cache -> {
                    cache.invalidate();
                    log.info("Cache '{}' has been invalidated", cache.getName());
                });
        log.info("All caches are invalidated");
    }

    @Scheduled(fixedRate = 5, timeUnit = TimeUnit.MINUTES)
    public void invalidateUserCache() {
        log.info("Execute users cache invalidation");
        Cache users = cacheManager.getCache("users");
        if (users != null) {
            users.invalidate();
        }
        log.info("Cache 'users' has been invalidated");
    }
}
