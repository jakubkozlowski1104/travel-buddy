package com.travelBuddy.repositories;

import com.travelBuddy.models.UserCountriesVisited;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserCountriesVisitedRepo extends JpaRepository<UserCountriesVisited, Long> {
    List<UserCountriesVisited> findByUserId(String userId);
    List<UserCountriesVisited> findByCountryId(Long countryId);
}
