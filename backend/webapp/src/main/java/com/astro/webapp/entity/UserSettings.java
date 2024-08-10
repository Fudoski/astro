package com.astro.webapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user_settings")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserSettings {

    @Id
    private String username;
    @Column(length = 50)
    private String firstname;
    @Column(length = 50)
    private String surname;
}
