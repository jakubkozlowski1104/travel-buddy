package com.travelBuddy.DTO;

import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
public class TripRequestDTO {
    private String tripName;
    private Integer daysOfTravel;
    private Long travelTypeId;
    private BigDecimal estimatedCost;
    private LocalDate startDate;
    private LocalDate endDate;
    private String description;
    private String lookingFor;
    private List<Long> countries;
}
