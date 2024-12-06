package com.travelBuddy.repositories;

import com.travelBuddy.models.UserFavouriteTrip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserFavouriteTripRepo extends JpaRepository<UserFavouriteTrip, Long> {
    List<UserFavouriteTrip> findByUserId(String userId);

    boolean existsByUser_IdAndTrip_TripId(String userId, Long tripId);
}
