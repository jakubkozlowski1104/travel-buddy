package com.travelBuddy.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserCountriesVisitedDTO {
    private String userId;
    private String username;
    private String countryName;
    private String countryCode;
}
