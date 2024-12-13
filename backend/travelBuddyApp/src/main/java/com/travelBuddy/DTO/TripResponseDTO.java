package com.travelBuddy.DTO;

import com.travelBuddy.models.Country;
import com.travelBuddy.models.TravelType;
import com.travelBuddy.models.User;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
public class TripResponseDTO {
    private Long tripId;
    private String tripName;
    private Integer daysOfTravel;
    private BigDecimal estimatedCost;
    private LocalDate startDate;
    private LocalDate endDate;
    private String description;
    private String lookingFor;
    private List<TravelType> travelTypes;
    private List<Country> countries;
    private List<User> users; // Directly include User entities
}
