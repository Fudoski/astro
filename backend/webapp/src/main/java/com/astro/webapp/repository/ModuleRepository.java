package com.astro.webapp.repository;

import com.astro.webapp.entity.Module;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ModuleRepository extends CrudRepository<Module, Integer> {
    List<Module> findByCourseId(int courseId);
}
