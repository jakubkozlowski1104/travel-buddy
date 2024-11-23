package com.travelBuddy.repositories;

import com.travelBuddy.models.TripCountries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TripCountriesRepo extends JpaRepository<TripCountries, Long> {
    List<TripCountries> findByTrip_TripId(Long tripId);

    boolean existsByTrip_TripIdAndCountry_Id(Long tripId, Long countryId);
}
