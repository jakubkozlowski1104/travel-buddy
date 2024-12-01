package com.travelBuddy.services;

import com.travelBuddy.DTO.UserCountriesVisitedDTO;
import com.travelBuddy.models.Country;
import com.travelBuddy.models.User;
import com.travelBuddy.models.UserCountriesVisited;
import com.travelBuddy.repositories.CountryRepo;
import com.travelBuddy.repositories.UserCountriesVisitedRepo;
import com.travelBuddy.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserCountriesVisitedService {

    @Autowired
    private UserCountriesVisitedRepo userCountriesVisitedRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CountryRepo countryRepo;

    public List<UserCountriesVisitedDTO> getAllVisits() {
        return userCountriesVisitedRepo.findAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public List<UserCountriesVisitedDTO> getVisitsByUser(String userId) {
        return userCountriesVisitedRepo.findByUserId(userId).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    public UserCountriesVisited addVisit(String userId, Long countryId) {
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Country country = countryRepo.findById(countryId).orElseThrow(() -> new RuntimeException("Country not found"));

        UserCountriesVisited visit = new UserCountriesVisited();
        visit.setUser(user);
        visit.setCountry(country);

        return userCountriesVisitedRepo.save(visit);
    }

    public List<UserCountriesVisited> getVisitsByCountryId(Long countryId) {
        return userCountriesVisitedRepo.findByCountryId(countryId);
    }

    public boolean deleteVisit(Long visitId) {
        if (userCountriesVisitedRepo.existsById(visitId)) {
            userCountriesVisitedRepo.deleteById(visitId);
            return true;
        }
        return false;
    }

    private UserCountriesVisitedDTO convertToDTO(UserCountriesVisited visit) {
        return new UserCountriesVisitedDTO(
                visit.getUser().getId(),
                visit.getUser().getUsername(),
                visit.getCountry().getName(),
                visit.getCountry().getCode()
        );
    }
}
