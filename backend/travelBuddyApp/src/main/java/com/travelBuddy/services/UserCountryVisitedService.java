package com.travelBuddy.services;

import com.travelBuddy.DTO.UserCountryVisitedDTO;
import com.travelBuddy.models.Country;
import com.travelBuddy.models.User;
import com.travelBuddy.models.UserCountryVisited;
import com.travelBuddy.repositories.CountryRepo;
import com.travelBuddy.repositories.UserCountryVisitedRepo;
import com.travelBuddy.repositories.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserCountryVisitedService {

    private final UserCountryVisitedRepo userCountryVisitedRepo;
    private final UserRepo userRepo;
    private final CountryRepo countryRepo;

    public UserCountryVisited addVisit(UserCountryVisitedDTO dto) {
        User user = userRepo.findById(dto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
        Country country = countryRepo.findById(dto.getCountryId())
                .orElseThrow(() -> new IllegalArgumentException("Country not found"));

        UserCountryVisited visit = new UserCountryVisited();
        visit.setUser(user);
        visit.setCountry(country);

        return userCountryVisitedRepo.save(visit);
    }

    public List<UserCountryVisited> getVisitsByUser(String userId) {
        return userCountryVisitedRepo.findByUserId(userId);
    }

    public List<UserCountryVisited> getVisitsByCountry(Long countryId) {
        return userCountryVisitedRepo.findByCountry_Id(countryId);
    }

    public void deleteVisit(Long id) {
        Optional<UserCountryVisited> visit = userCountryVisitedRepo.findById(id);
        if (visit.isEmpty()) {
            throw new IllegalArgumentException("Visit not found");
        }
        userCountryVisitedRepo.deleteById(id);
    }
}
