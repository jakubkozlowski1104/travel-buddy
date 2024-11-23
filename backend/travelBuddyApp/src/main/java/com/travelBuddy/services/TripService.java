package com.travelBuddy.services;

import com.travelBuddy.models.Country;
import com.travelBuddy.models.Trip;
import com.travelBuddy.models.User;
import com.travelBuddy.repositories.CountryRepo;
import com.travelBuddy.repositories.TripRepo;
import com.travelBuddy.repositories.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TripService {
    private final TripRepo tripRepo;
    private final UserRepo userRepo;
    private final CountryRepo countryRepo;

    public Trip createTrip(Trip trip) {
        return tripRepo.save(trip);
    }

    public Trip updateTrip(Long tripId, Trip updatedTrip) {
        Trip existingTrip = getTripById(tripId);
        existingTrip.setTripName(updatedTrip.getTripName());
        existingTrip.setDaysOfTravel(updatedTrip.getDaysOfTravel());
        existingTrip.setStartDate(updatedTrip.getStartDate());
        existingTrip.setEndDate(updatedTrip.getEndDate());
        existingTrip.setEstimatedCost(updatedTrip.getEstimatedCost());
        existingTrip.setDescription(updatedTrip.getDescription());
        return tripRepo.save(existingTrip);
    }

    public List<Trip> getAllTrips() {
        return tripRepo.findAll();
    }

    public Trip getTripById(Long tripId) {
        return tripRepo.findById(tripId).orElseThrow(() -> new RuntimeException("Trip not found"));
    }

    public List<Trip> getTripsByUser(String userId) {
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return user.getTrips();
    }

    public void deleteTrip(Long tripId) {
        tripRepo.deleteById(tripId);
    }

    public void removeUserFromTrip(String userId, Long tripId) {
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Trip trip = getTripById(tripId);
        user.getTrips().remove(trip);
        userRepo.save(user);
    }

    public List<Trip> searchTrips(String tripName, LocalDate startDate, LocalDate endDate) {
        return tripRepo.findAll().stream()
                .filter(trip -> (tripName == null || trip.getTripName().contains(tripName)) &&
                        (startDate == null || (trip.getStartDate() != null && !trip.getStartDate().isBefore(startDate))) &&
                        (endDate == null || (trip.getEndDate() != null && !trip.getEndDate().isAfter(endDate))))
                .toList();
    }

//    public void addCountryToTrip(Long tripId, Long countryId) {
//        Trip trip = getTripById(tripId);
//        Country country = countryRepo.findById(countryId).orElseThrow(() -> new RuntimeException("Country not found"));
//        trip.getCountries().add(country);
//        tripRepo.save(trip);
//    }

//    public List<Country> getCountriesInTrip(Long tripId) {
//        Trip trip = getTripById(tripId);
//        return trip.getCountries();
//    }

//    public void removeCountryFromTrip(Long tripId, Long countryId) {
//        Trip trip = getTripById(tripId);
//        Country country = countryRepo.findById(countryId).orElseThrow(() -> new RuntimeException("Country not found"));
//        trip.getCountries().remove(country);
//        tripRepo.save(trip);
//    }
}
