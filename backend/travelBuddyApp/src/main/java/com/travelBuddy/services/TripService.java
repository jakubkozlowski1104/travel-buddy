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
        // Obsługa powiązania krajów
        if (trip.getTripCountries() != null) {
            trip.getTripCountries().forEach(tripCountry -> {
                Country country = countryRepo.findById(tripCountry.getCountry().getId())
                        .orElseThrow(() -> new RuntimeException("Country not found with id: " + tripCountry.getCountry().getId()));
                tripCountry.setTrip(trip);
                tripCountry.setCountry(country);
            });
        }
        return tripRepo.save(trip);
    }

    public Trip updateTrip(Long tripId, Trip updatedTrip) {
        Trip existingTrip = getTripById(tripId);

        // Aktualizacja pól tripa
        existingTrip.setTripName(updatedTrip.getTripName());
        existingTrip.setDaysOfTravel(updatedTrip.getDaysOfTravel());
        existingTrip.setStartDate(updatedTrip.getStartDate());
        existingTrip.setEndDate(updatedTrip.getEndDate());
        existingTrip.setEstimatedCost(updatedTrip.getEstimatedCost());
        existingTrip.setDescription(updatedTrip.getDescription());
        existingTrip.setLookingFor(updatedTrip.getLookingFor());

        // Obsługa powiązania krajów
        if (updatedTrip.getTripCountries() != null) {
            existingTrip.getTripCountries().clear(); // Usuń obecne kraje
            updatedTrip.getTripCountries().forEach(tripCountry -> {
                Country country = countryRepo.findById(tripCountry.getCountry().getId())
                        .orElseThrow(() -> new RuntimeException("Country not found with id: " + tripCountry.getCountry().getId()));
                tripCountry.setTrip(existingTrip);
                tripCountry.setCountry(country);
                existingTrip.getTripCountries().add(tripCountry);
            });
        }

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
}
