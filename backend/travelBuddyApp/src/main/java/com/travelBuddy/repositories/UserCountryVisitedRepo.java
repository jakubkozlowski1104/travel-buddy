package com.travelBuddy.repositories;

import com.travelBuddy.models.UserCountryVisited;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserCountryVisitedRepo extends JpaRepository<UserCountryVisited, Long> {
    List<UserCountryVisited> findByUserId(String userId);
    List<UserCountryVisited> findByCountry_Id(Long countryId);
}
