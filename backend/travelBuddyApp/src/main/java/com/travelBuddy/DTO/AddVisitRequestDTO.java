package com.travelBuddy.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddVisitRequestDTO {
    private String userId;
    private Long countryId;
}
