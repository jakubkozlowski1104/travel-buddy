package com.travelBuddy.controllers;

import com.travelBuddy.models.Country;
import com.travelBuddy.models.Trip;
import com.travelBuddy.models.TripCountries;
import com.travelBuddy.models.TravelType;
import com.travelBuddy.DTO.TripRequestDTO;
import com.travelBuddy.services.TripService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/trips")
@RequiredArgsConstructor
public class TripController {
    private final TripService tripService;

    @PostMapping
    public ResponseEntity<Trip> createTrip(@RequestBody TripRequestDTO tripRequestDTO) {
        Trip trip = mapToTrip(tripRequestDTO);
        Trip createdTrip = tripService.createTrip(trip);
        return ResponseEntity.ok(createdTrip);
    }

    @PutMapping("/{tripId}")
    public ResponseEntity<Trip> updateTrip(@PathVariable Long tripId, @RequestBody Trip updatedTrip) {
        return ResponseEntity.ok(tripService.updateTrip(tripId, updatedTrip));
    }

    @GetMapping
    public ResponseEntity<List<Trip>> getAllTrips() {
        return ResponseEntity.ok(tripService.getAllTrips());
    }

    @GetMapping("/{tripId}")
    public ResponseEntity<Trip> getTripById(@PathVariable Long tripId) {
        return ResponseEntity.ok(tripService.getTripById(tripId));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Trip>> getTripsByUser(@PathVariable String userId) {
        return ResponseEntity.ok(tripService.getTripsByUser(userId));
    }

    @DeleteMapping("/{tripId}")
    public ResponseEntity<String> deleteTrip(@PathVariable Long tripId) {
        tripService.deleteTrip(tripId);
        return ResponseEntity.ok("Trip deleted successfully.");
    }

    @DeleteMapping("/{tripId}/users/{userId}")
    public ResponseEntity<String> removeUserFromTrip(@PathVariable Long tripId, @PathVariable String userId) {
        tripService.removeUserFromTrip(userId, tripId);
        return ResponseEntity.ok("User removed from trip.");
    }

    @GetMapping("/search")
    public ResponseEntity<List<Trip>> searchTrips(
            @RequestParam(required = false) String tripName,
            @RequestParam(required = false) LocalDate startDate,
            @RequestParam(required = false) LocalDate endDate
    ) {
        return ResponseEntity.ok(tripService.searchTrips(tripName, startDate, endDate));
    }

    // Metoda do mapowania TripRequestDTO na Trip
    private Trip mapToTrip(TripRequestDTO tripRequestDTO) {
        Trip trip = new Trip();
        trip.setTripName(tripRequestDTO.getTripName());
        trip.setDaysOfTravel(tripRequestDTO.getDaysOfTravel());
        trip.setEstimatedCost(tripRequestDTO.getEstimatedCost());
        trip.setStartDate(tripRequestDTO.getStartDate());
        trip.setEndDate(tripRequestDTO.getEndDate());
        trip.setDescription(tripRequestDTO.getDescription());
        trip.setLookingFor(tripRequestDTO.getLookingFor());

        // Mapowanie TravelType
        if (tripRequestDTO.getTravelTypeId() != null) {
            TravelType travelType = new TravelType();
            travelType.setId(tripRequestDTO.getTravelTypeId());
            trip.setTravelType(travelType);
        }

        // Mapowanie krajów
        if (tripRequestDTO.getCountries() != null) {
            tripRequestDTO.getCountries().forEach(countryId -> {
                Country country = new Country();
                country.setId(countryId);
                TripCountries tripCountry = new TripCountries();
                tripCountry.setCountry(country);
                tripCountry.setTrip(trip);
                trip.getTripCountries().add(tripCountry);
            });
        }

        return trip;
    }
}
