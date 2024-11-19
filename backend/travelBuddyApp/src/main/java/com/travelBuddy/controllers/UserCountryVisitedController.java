package com.travelBuddy.controllers;

import com.travelBuddy.DTO.UserCountryVisitedDTO;
import com.travelBuddy.models.UserCountryVisited;
import com.travelBuddy.services.UserCountryVisitedService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userCountriesVisited")
@RequiredArgsConstructor
public class UserCountryVisitedController {

    private final UserCountryVisitedService userCountryVisitedService;

    @PostMapping
    public ResponseEntity<UserCountryVisited> addVisit(@RequestBody UserCountryVisitedDTO dto) {
        UserCountryVisited visit = userCountryVisitedService.addVisit(dto);
        return ResponseEntity.ok(visit);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<UserCountryVisited>> getVisitsByUser(@PathVariable String userId) {
        List<UserCountryVisited> visits = userCountryVisitedService.getVisitsByUser(userId);
        return ResponseEntity.ok(visits);
    }

    @GetMapping("/country/{countryId}")
    public ResponseEntity<List<UserCountryVisited>> getVisitsByCountry(@PathVariable Long countryId) {
        List<UserCountryVisited> visits = userCountryVisitedService.getVisitsByCountry(countryId);
        return ResponseEntity.ok(visits);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteVisit(@PathVariable Long id) {
        userCountryVisitedService.deleteVisit(id);
        return ResponseEntity.ok("Visit deleted successfully.");
    }
}
