package com.travelBuddy.controllers;

import com.travelBuddy.models.Country;
import com.travelBuddy.services.TripCountriesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trip-countries")
@RequiredArgsConstructor
public class TripCountriesController {
    private final TripCountriesService tripCountriesService;

    @GetMapping("/{tripId}")
    public ResponseEntity<List<Country>> getCountriesForTrip(@PathVariable Long tripId) {
        return ResponseEntity.ok(tripCountriesService.getCountriesForTrip(tripId));
    }

    @PostMapping("/{tripId}/add/{countryId}")
    public ResponseEntity<String> addCountryToTrip(@PathVariable Long tripId, @PathVariable Long countryId) {
        return ResponseEntity.ok(tripCountriesService.addCountryToTrip(tripId, countryId));
    }

    @DeleteMapping("/{tripId}/remove/{countryId}")
    public ResponseEntity<String> removeCountryFromTrip(@PathVariable Long tripId, @PathVariable Long countryId) {
        return ResponseEntity.ok(tripCountriesService.removeCountryFromTrip(tripId, countryId));
    }
}
