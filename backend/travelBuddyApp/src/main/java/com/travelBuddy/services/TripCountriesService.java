package com.travelBuddy.services;

import com.travelBuddy.models.Country;
import com.travelBuddy.models.Trip;
import com.travelBuddy.models.TripCountries;
import com.travelBuddy.repositories.CountryRepo;
import com.travelBuddy.repositories.TripCountriesRepo;
import com.travelBuddy.repositories.TripRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class TripCountriesService {
    private final TripCountriesRepo tripCountriesRepo;
    private final TripRepo tripRepo;
    private final CountryRepo countryRepo;

    public List<Country> getCountriesForTrip(Long tripId) {
        return tripCountriesRepo.findByTrip_TripId(tripId).stream()
                .map(TripCountries::getCountry)
                .collect(Collectors.toList());
    }

    public String addCountryToTrip(Long tripId, Long countryId) {
        if (tripCountriesRepo.existsByTrip_TripIdAndCountry_Id(tripId, countryId)) {
            throw new RuntimeException("Country already associated with this trip.");
        }

        Trip trip = tripRepo.findById(tripId)
                .orElseThrow(() -> new RuntimeException("Trip not found."));
        Country country = countryRepo.findById(countryId)
                .orElseThrow(() -> new RuntimeException("Country not found."));

        TripCountries tripCountries = new TripCountries();
        tripCountries.setTrip(trip);
        tripCountries.setCountry(country);

        tripCountriesRepo.save(tripCountries);
        return "Country added to trip successfully.";
    }

    public String removeCountryFromTrip(Long tripId, Long countryId) {
        TripCountries tripCountry = tripCountriesRepo.findByTrip_TripId(tripId).stream()
                .filter(tc -> tc.getCountry().getId().equals(countryId))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Country not associated with trip."));

        tripCountriesRepo.delete(tripCountry);
        return "Country removed from trip successfully.";
    }
}
