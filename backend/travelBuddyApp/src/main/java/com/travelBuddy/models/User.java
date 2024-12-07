package com.travelBuddy.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
@JsonIgnoreProperties({"notifications", "countriesVisited", "trips", "favouriteTrips", "sentMessages", "receivedMessages"})
public class User {
    @Id
    @UuidGenerator
    @Column(name = "id", unique = true, nullable = false, updatable = false)
    private String id;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    private String bio;
    private String photoUrl;
    private String interests;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Notification> notifications;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserCountriesVisited> countriesVisited;

    @ManyToMany
    @JoinTable(
            name = "user_trips",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "trip_id")
    )
    private List<Trip> trips;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserFavouriteTrip> favouriteTrips;

    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> sentMessages;

    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> receivedMessages;
}
