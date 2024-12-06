package com.travelBuddy.services;

import com.travelBuddy.models.*;
import com.travelBuddy.repositories.CountryRepo;
import com.travelBuddy.repositories.TravelTypeRepo;
import com.travelBuddy.repositories.TripRepo;
import com.travelBuddy.repositories.UserRepo;
import jakarta.transaction.Transactional;
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
    private final TravelTypeRepo travelTypeRepo;

    // Tworzenie nowego Tripa
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
        Trip existingTrip = getTripById(tripId); // Pobierz istniejący Trip z bazy danych

        // Aktualizacja tylko nie-nullowych pól
        if (updatedTrip.getTripName() != null) {
            existingTrip.setTripName(updatedTrip.getTripName());
        }
        if (updatedTrip.getDaysOfTravel() != null) {
            existingTrip.setDaysOfTravel(updatedTrip.getDaysOfTravel());
        }
        if (updatedTrip.getStartDate() != null) {
            existingTrip.setStartDate(updatedTrip.getStartDate());
        }
        if (updatedTrip.getEndDate() != null) {
            existingTrip.setEndDate(updatedTrip.getEndDate());
        }
        if (updatedTrip.getEstimatedCost() != null) {
            existingTrip.setEstimatedCost(updatedTrip.getEstimatedCost());
        }
        if (updatedTrip.getDescription() != null) {
            existingTrip.setDescription(updatedTrip.getDescription());
        }
        if (updatedTrip.getLookingFor() != null) {
            existingTrip.setLookingFor(updatedTrip.getLookingFor());
        }
        if (updatedTrip.getPhotos() != null) {
            existingTrip.setPhotos(updatedTrip.getPhotos());
        }

        if (updatedTrip.getTravelTypes() != null && !updatedTrip.getTravelTypes().isEmpty()) {
            existingTrip.getTravelTypes().clear(); // Wyczyść aktualne typy podróży
            updatedTrip.getTravelTypes().forEach(travelType -> {
                TravelType dbTravelType = travelTypeRepo.findById(travelType.getId())
                        .orElseThrow(() -> new RuntimeException("TravelType not found with id: " + travelType.getId()));
                existingTrip.getTravelTypes().add(dbTravelType); // Dodaj zaktualizowane typy
            });
        }


        // Obsługa Countries
        if (updatedTrip.getTripCountries() != null && !updatedTrip.getTripCountries().isEmpty()) {
            List<TripCountries> tripCountries = updatedTrip.getTripCountries().stream().map(tripCountry -> {
                Country country = countryRepo.findById(tripCountry.getCountry().getId())
                        .orElseThrow(() -> new RuntimeException("Country not found with id: " + tripCountry.getCountry().getId()));
                TripCountries newTripCountry = new TripCountries();
                newTripCountry.setCountry(country);
                newTripCountry.setTrip(existingTrip);
                return newTripCountry;
            }).toList();
            existingTrip.getTripCountries().clear(); // Usuń stare relacje
            existingTrip.getTripCountries().addAll(tripCountries); // Dodaj nowe relacje
        }

        // Zapisz zmiany w bazie danych
        return tripRepo.save(existingTrip);
    }


    // Pobranie wszystkich Tripów
    public List<Trip> getAllTrips() {
        return tripRepo.findAll();
    }

    // Pobranie Tripa na podstawie ID
    public Trip getTripById(Long tripId) {
        return tripRepo.findById(tripId)
                .orElseThrow(() -> new RuntimeException("Trip not found with ID: " + tripId));
    }

    // Pobranie Tripów użytkownika
    public List<Trip> getTripsByUser(String userId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        return user.getTrips();
    }

    // Usunięcie Tripa
    public void deleteTrip(Long tripId) {
        tripRepo.deleteById(tripId);
    }

    // Dodanie użytkownika do Tripa
    public void addUserToTrip(String userId, Long tripId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        Trip trip = getTripById(tripId);

        if (!trip.getUsers().contains(user)) {
            trip.getUsers().add(user);
            tripRepo.save(trip);

            if (!user.getTrips().contains(trip)) {
                user.getTrips().add(trip);
                userRepo.save(user);
            }
        } else {
            throw new RuntimeException("User is already part of this trip.");
        }
    }

    // Pobranie użytkowników w Tripie
    @Transactional
    public List<User> getUsersInTrip(Long tripId) {
        Trip trip = getTripById(tripId);
        trip.getUsers().size(); // Wymuszenie inicjalizacji
        return trip.getUsers();
    }

    // Usunięcie użytkownika z Tripa
    public void removeUserFromTrip(String userId, Long tripId) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
        Trip trip = getTripById(tripId);

        if (trip.getUsers().contains(user)) {
            trip.getUsers().remove(user);
            tripRepo.save(trip);
        }

        if (user.getTrips().contains(trip)) {
            user.getTrips().remove(trip);
            userRepo.save(user);
        }
    }

    // Wyszukiwanie Tripów
    public List<Trip> searchTrips(String tripName, LocalDate startDate, LocalDate endDate) {
        return tripRepo.findAll().stream()
                .filter(trip -> (tripName == null || trip.getTripName().contains(tripName)) &&
                        (startDate == null || (trip.getStartDate() != null && !trip.getStartDate().isBefore(startDate))) &&
                        (endDate == null || (trip.getEndDate() != null && !trip.getEndDate().isAfter(endDate))))
                .toList();
    }
}
