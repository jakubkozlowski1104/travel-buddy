package com.travelBuddy.models;

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
import java.util.List;
import java.util.stream.Collectors;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
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

    @ManyToOne
    @JoinColumn(name = "travel_type", nullable = true)
    private TravelType travelType;

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

    @ManyToMany(mappedBy = "trips")
    private List<User> users;

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TripCountries> tripCountries;

    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserFavouriteTrip> favouriteTrips;

    @JsonManagedReference
    @OneToMany(mappedBy = "trip", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Message> messages;

    public List<Country> getCountries() {
        return tripCountries.stream()
                .map(TripCountries::getCountry)
                .collect(Collectors.toList());
    }
}
