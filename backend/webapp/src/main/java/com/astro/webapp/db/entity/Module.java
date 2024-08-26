package com.astro.webapp.db.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.Instant;
import java.util.List;

import static com.astro.webapp.constant.EntityConstants.DEFAULT_VARCHAR_LENGTH;

@Entity
@Table(name = "modules")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Module {

    @Id
    @GeneratedValue
    private int id;

    @Column(length = DEFAULT_VARCHAR_LENGTH, nullable = false)
    private String name;

    @Column(name = "course_id", insertable = false, updatable = false, nullable = false)
    private int courseId;

    @OneToMany(mappedBy = "module", fetch = FetchType.LAZY)
    @ToString.Exclude
    private List<Lesson> lessons;

    @CreationTimestamp
    @Column(updatable = false, name = "created_at", nullable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

    @CreatedBy
    @Column(name = "created_by", nullable = false, length = DEFAULT_VARCHAR_LENGTH)
    private String createdBy;

    @LastModifiedBy
    @Column(name = "updated_by", nullable = false, length = DEFAULT_VARCHAR_LENGTH)
    private String updatedBy;

    @JoinColumn(name = "course_id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Course course;
}
