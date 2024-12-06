package com.travelBuddy.controllers;

import com.travelBuddy.models.UserFavouriteTrip;
import com.travelBuddy.services.UserFavouriteTripService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/favourites")
@RequiredArgsConstructor
public class UserFavouriteTripController {
    private final UserFavouriteTripService favouriteTripService;

    @PostMapping("/{userId}/add/{tripId}")
    public ResponseEntity<String> addFavouriteTrip(@PathVariable String userId, @PathVariable Long tripId) {
        favouriteTripService.addFavouriteTrip(userId, tripId);
        return ResponseEntity.ok("Trip added to favourites.");
    }

    @DeleteMapping("/{userId}/remove/{tripId}")
    public ResponseEntity<String> removeFavouriteTrip(@PathVariable String userId, @PathVariable Long tripId) {
        favouriteTripService.removeFavouriteTrip(userId, tripId);
        return ResponseEntity.ok("Trip removed from favourites.");
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<UserFavouriteTrip>> getFavouritesForUser(@PathVariable String userId) {
        return ResponseEntity.ok(favouriteTripService.getFavouritesForUser(userId));
    }
}
