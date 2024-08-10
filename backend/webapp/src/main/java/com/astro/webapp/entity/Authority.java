package com.astro.webapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "authorities")
@IdClass(Authority.AuthorityId.class)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Authority {

    @Id
    @Column(length = 50)
    private String username;

    @Id
    @Column(length = 50)
    private String role;

    @Data
    public static class AuthorityId implements Serializable {
        private String username;
        private String role;
    }
}
