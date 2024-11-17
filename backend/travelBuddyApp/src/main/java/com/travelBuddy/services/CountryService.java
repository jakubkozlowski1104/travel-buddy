package com.travelBuddy.services;

import com.travelBuddy.models.Country;
import com.travelBuddy.repositories.CountryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CountryService {

    @Autowired
    private CountryRepo countryRepository;

    public List<Country> getAllCountries() {
        return countryRepository.findAll();
    }

    public Country addCountry(Country country) {
        return countryRepository.save(country);
    }

    public Optional<Country> getCountryByName(String name) {
        return countryRepository.findByNameIgnoreCase(name);
    }

    public boolean deleteCountry(String name) {
        Optional<Country> country = countryRepository.findByNameIgnoreCase(name);
        if (country.isPresent()) {
            countryRepository.delete(country.get());
            return true;
        } else {
            return false;
        }
    }
}

