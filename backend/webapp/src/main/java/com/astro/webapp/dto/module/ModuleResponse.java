package com.astro.webapp.dto.module;

import com.astro.webapp.dto.AuditResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
public class ModuleResponse extends AuditResponse {
    private int id;
    private int courseId;

    private String name;
}
