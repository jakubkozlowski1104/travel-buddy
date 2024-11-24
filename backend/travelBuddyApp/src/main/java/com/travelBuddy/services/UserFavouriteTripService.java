package com.travelBuddy.services;

import com.travelBuddy.models.UserFavouriteTrip;
import com.travelBuddy.models.User;
import com.travelBuddy.models.Trip;
import com.travelBuddy.repositories.UserFavouriteTripRepo;
import com.travelBuddy.repositories.TripRepo;
import com.travelBuddy.repositories.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserFavouriteTripService {
    private final UserFavouriteTripRepo favouriteTripRepo;
    private final UserRepo userRepo;
    private final TripRepo tripRepo;

    public UserFavouriteTrip addFavouriteTrip(String userId, Long tripId) {
        if (favouriteTripRepo.existsByUser_IdAndTrip_TripId(userId, tripId)) {
            throw new RuntimeException("Trip is already in favourites!");
        }
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found!"));
        Trip trip = tripRepo.findById(tripId).orElseThrow(() -> new RuntimeException("Trip not found!"));

        UserFavouriteTrip favourite = new UserFavouriteTrip();
        favourite.setUser(user);
        favourite.setTrip(trip);
        return favouriteTripRepo.save(favourite);
    }

    public void removeFavouriteTrip(String userId, Long tripId) {
        UserFavouriteTrip favourite = favouriteTripRepo.findByUserId(userId).stream()
                .filter(fav -> fav.getTrip().getTripId().equals(tripId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Favourite trip not found!"));
        favouriteTripRepo.delete(favourite);
    }

    public List<UserFavouriteTrip> getFavouritesForUser(String userId) {
        return favouriteTripRepo.findByUserId(userId);
    }
}
