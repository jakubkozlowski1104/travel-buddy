package com.travelBuddy.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"users", "tripCountries", "favouriteTrips", "messages"})
@Table(name = "trips")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_id", unique = true, nullable = false, updatable = false)
    private Long tripId;

    @Column(name = "trip_name", nullable = false)
    private String tripName;

    @Column(name = "days_of_travel", nullable = true)
    private Integer daysOfTravel;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "trip_travel_types",
            joinColumns = @JoinColumn(name = "trip_id"),
            inverseJoinColumns = @JoinColumn(name = "travel_type_id")
    )
    private List<TravelType> travelTypes = new ArrayList<>();

    @Column(name = "estimated_cost", precision = 10, scale = 2, nullable = true)
    private BigDecimal estimatedCost;

    @Column(name = "start_date", nullable = true)
    private LocalDate startDate;

    @Column(name = "end_date", nullable = true)
    private LocalDate endDate;

    @Column(name = "description", nullable = true)
    private String description;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = true)
    private LocalDateTime updatedAt;

    @Column(name = "archived_at", nullable = true)
    private LocalDateTime archivedAt;

    @Column(name = "photos", length = 255, nullable = true)
    private String photos;

    @Column(name = "looking_for", nullable = true)
    private String lookingFor;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "trip_users",
            joinColumns = @JoinColumn(name = "trip_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users = new ArrayList<>();


    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TripCountries> tripCountries = new ArrayList<>();

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserFavouriteTrip> favouriteTrips;

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> messages;

    public List<Country> getCountries() {
        if (tripCountries == null) {
            return List.of();
        }
        return tripCountries.stream()
                .map(TripCountries::getCountry)
                .collect(Collectors.toList());
    }

}
