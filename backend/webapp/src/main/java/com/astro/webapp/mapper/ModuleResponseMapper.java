package com.astro.webapp.mapper;

import com.astro.webapp.dto.module.ModuleResponse;
import com.astro.webapp.entity.Module;
import org.springframework.stereotype.Component;

@Component
public class ModuleResponseMapper {

    public ModuleResponse response(Module module) {
        ModuleResponse response = new ModuleResponse();
        response.setId(module.getId());
        response.setCourseId(module.getCourseId());
        response.setName(module.getName());
        response.setCreatedBy(module.getCreatedBy());
        response.setUpdatedBy(module.getUpdatedBy());
        response.setCreatedAt(module.getCreatedAt());
        response.setUpdatedAt(module.getUpdatedAt());
        return response;
    }
}
