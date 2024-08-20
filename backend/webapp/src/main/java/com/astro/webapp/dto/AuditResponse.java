package com.astro.webapp.dto;

import lombok.Data;

import java.time.Instant;

@Data
public class AuditResponse {
    private String createdBy;
    private String updatedBy;

    private Instant createdAt;
    private Instant updatedAt;
}
