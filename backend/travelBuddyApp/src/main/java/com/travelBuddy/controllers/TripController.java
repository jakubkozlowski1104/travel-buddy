package com.travelBuddy.controllers;

import com.travelBuddy.DTO.TripResponseDTO;
import com.travelBuddy.models.*;
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
    public ResponseEntity<Trip> updateTrip(@PathVariable Long tripId, @RequestBody TripRequestDTO tripRequestDTO) {
        Trip updatedTrip = mapToTrip(tripRequestDTO); // Mapowanie z TripRequestDTO
        Trip savedTrip = tripService.updateTrip(tripId, updatedTrip);
        return ResponseEntity.ok(savedTrip);
    }


    @GetMapping
    public ResponseEntity<List<TripResponseDTO>> getAllTrips() {
        List<Trip> trips = tripService.getAllTrips();
        List<TripResponseDTO> responseDTOs = trips.stream()
                .map(this::mapToResponseDTO)
                .toList();
        return ResponseEntity.ok(responseDTOs);
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

    @PostMapping("/{tripId}/users/{userId}")
    public ResponseEntity<String> addUserToTrip(@PathVariable Long tripId, @PathVariable String userId) {
        tripService.addUserToTrip(userId, tripId);
        return ResponseEntity.ok("User added to trip.");
    }

    @DeleteMapping("/{tripId}/users/{userId}")
    public ResponseEntity<String> removeUserFromTrip(@PathVariable Long tripId, @PathVariable String userId) {
        tripService.removeUserFromTrip(userId, tripId);
        return ResponseEntity.ok("User removed from trip.");
    }

    @GetMapping("/{tripId}/users")
    public ResponseEntity<List<User>> getUsersInTrip(@PathVariable Long tripId) {
        List<User> users = tripService.getUsersInTrip(tripId);
        return ResponseEntity.ok(users);
    }


    @GetMapping("/search")
    public ResponseEntity<List<Trip>> searchTrips(
            @RequestParam(required = false) String tripName,
            @RequestParam(required = false) LocalDate startDate,
            @RequestParam(required = false) LocalDate endDate
    ) {
        return ResponseEntity.ok(tripService.searchTrips(tripName, startDate, endDate));
    }

    private Trip mapToTrip(TripRequestDTO tripRequestDTO) {
        Trip trip = new Trip();
        trip.setTripName(tripRequestDTO.getTripName());
        trip.setDaysOfTravel(tripRequestDTO.getDaysOfTravel());
        trip.setEstimatedCost(tripRequestDTO.getEstimatedCost());
        trip.setStartDate(tripRequestDTO.getStartDate());
        trip.setEndDate(tripRequestDTO.getEndDate());
        trip.setDescription(tripRequestDTO.getDescription());
        trip.setLookingFor(tripRequestDTO.getLookingFor());
        trip.setLanguages(tripRequestDTO.getLanguages());
        trip.setMeetingBefore(tripRequestDTO.getMeetingBefore());
        trip.setItinerary(tripRequestDTO.getItinerary());
        trip.setWantToDo(tripRequestDTO.getWantToDo());
        trip.setWantToSee(tripRequestDTO.getWantToSee());
        trip.setOwnerId(tripRequestDTO.getOwnerId());

        // Mapowanie TravelTypes
        if (tripRequestDTO.getTravelTypeIds() != null) {
            List<TravelType> travelTypes = tripRequestDTO.getTravelTypeIds().stream()
                    .map(travelTypeId -> {
                        TravelType travelType = new TravelType();
                        travelType.setId(travelTypeId);
                        return travelType;
                    })
                    .toList();
            trip.setTravelTypes(travelTypes);
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

    private TripResponseDTO mapToResponseDTO(Trip trip) {
        TripResponseDTO responseDTO = new TripResponseDTO(); //nowe
        responseDTO.setTripId(trip.getTripId());
        responseDTO.setTripName(trip.getTripName());
        responseDTO.setDaysOfTravel(trip.getDaysOfTravel());
        responseDTO.setEstimatedCost(trip.getEstimatedCost());
        responseDTO.setStartDate(trip.getStartDate());
        responseDTO.setEndDate(trip.getEndDate());
        responseDTO.setDescription(trip.getDescription());
        responseDTO.setLookingFor(trip.getLookingFor());

        responseDTO.setMeetingBefore(trip.getMeetingBefore());
        responseDTO.setItinerary(trip.getItinerary());
        responseDTO.setWantToDo(trip.getWantToDo());
        responseDTO.setWantToSee(trip.getWantToSee());
        responseDTO.setOwnerId(trip.getOwnerId());
        responseDTO.setLanguages(trip.getLanguages());

        responseDTO.setTravelTypes(trip.getTravelTypes());
        responseDTO.setCountries(trip.getCountries());
        responseDTO.setUsers(trip.getUsers());

        return responseDTO;
    }



}
