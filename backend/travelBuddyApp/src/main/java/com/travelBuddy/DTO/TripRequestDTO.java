package com.travelBuddy.DTO;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
public class TripRequestDTO {
    private String tripName;
    private Integer daysOfTravel;
    private BigDecimal estimatedCost;
    private LocalDate startDate;
    private LocalDate endDate;
    private String description;
    private String lookingFor;
    private String meetingBefore;
    private String itinerary;
    private String wantToDo;
    private String wantToSee;
    private String ownerId;
    private List<String> languages;
    private List<Long> travelTypeIds;
    private List<Long> countries;
}
