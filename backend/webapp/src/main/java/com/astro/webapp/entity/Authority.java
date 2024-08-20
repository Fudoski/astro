package com.astro.webapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

import static com.astro.webapp.constant.EntityConstants.DEFAULT_VARCHAR_LENGTH;

@Entity
@Table(name = "authorities")
@IdClass(Authority.AuthorityId.class)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Authority {

    @Id
    private String username;

    @Id
    @Column(length = DEFAULT_VARCHAR_LENGTH)
    private String role;

    @MapsId
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "username", nullable = false)
    private User user;

    @Data
    public static class AuthorityId implements Serializable {
        private String username;
        private String role;
    }
}
