package com.astro.webapp.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "user_settings")
@Data
public class UserSettings {

    @Id
    private String username;
    private String firstname;
    private String surname;

    @OneToOne
    @MapsId
    @JoinColumn(name = "username")
    private User user;
}
