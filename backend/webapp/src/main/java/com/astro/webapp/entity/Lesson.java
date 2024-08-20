package com.astro.webapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;

import static com.astro.webapp.constant.EntityConstants.DEFAULT_VARCHAR_LENGTH;

@Entity
@Table(name = "lessons")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Lesson {

    @Id
    @GeneratedValue
    private int id;

    @Column(name = "module_id", insertable = false, updatable = false)
    private int moduleId;

    @Column(length = DEFAULT_VARCHAR_LENGTH, nullable = false)
    private String name;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @CreatedBy
    @Column(name = "created_by", nullable = false, length = DEFAULT_VARCHAR_LENGTH)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by", nullable = false, length = DEFAULT_VARCHAR_LENGTH)
    private String updatedBy;

    @JoinColumn(name = "module_id", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Module module;
}
