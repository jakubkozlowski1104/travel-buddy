package com.travelBuddy.controllers;

import com.travelBuddy.models.Country;
import com.travelBuddy.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping
    public List<Country> getAllCountries() {
        return countryService.getAllCountries();
    }

    @PostMapping
    public ResponseEntity<Country> addCountry(@RequestBody Country country) {
        Country savedCountry = countryService.addCountry(country);
        return ResponseEntity.ok(savedCountry);
    }

    @GetMapping("/{name}")
    public ResponseEntity<Country> getCountryByName(@PathVariable String name) {
        Optional<Country> country = countryService.getCountryByName(name);
        return country.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{name}")
    public ResponseEntity<String> deleteCountry(@PathVariable String name) {
        boolean isDeleted = countryService.deleteCountry(name);
        if (isDeleted) {
            return ResponseEntity.ok("Deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Failed to delete: Country not found");
        }
    }
}
