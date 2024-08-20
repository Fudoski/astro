package com.astro.webapp.dto.course;

import com.astro.webapp.dto.AuditResponse;
import com.astro.webapp.dto.module.ModuleResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
public class CourseResponse extends AuditResponse {

    private int id;
    private String name;

    private List<ModuleResponse> modules;
}

