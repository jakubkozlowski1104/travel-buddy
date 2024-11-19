package com.travelBuddy.DTO;

import lombok.Data;

@Data
public class UserCountryVisitedDTO {
    private String userId;
    private Long countryId;
}
