package com.travelBuddy.controllers;

import com.travelBuddy.DTO.AddVisitRequestDTO;
import com.travelBuddy.DTO.UserCountriesVisitedDTO;
import com.travelBuddy.models.UserCountriesVisited;
import com.travelBuddy.services.UserCountriesVisitedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-countries-visited")
public class UserCountriesVisitedController {

    @Autowired
    private UserCountriesVisitedService userCountriesVisitedService;

    @GetMapping
    public List<UserCountriesVisitedDTO> getAllVisits() {
        return userCountriesVisitedService.getAllVisits();
    }

    @GetMapping("/user/{userId}")
    public List<UserCountriesVisitedDTO> getVisitsByUser(@PathVariable String userId) {
        return userCountriesVisitedService.getVisitsByUser(userId);
    }

    @PostMapping
    public ResponseEntity<UserCountriesVisited> addVisit(@RequestBody AddVisitRequestDTO request) {
        UserCountriesVisited visit = userCountriesVisitedService.addVisit(request.getUserId(), request.getCountryId());
        return ResponseEntity.ok(visit);
    }

    @GetMapping("/country/{id}")
    public ResponseEntity<List<UserCountriesVisited>> getVisitsByCountryId(@PathVariable Long id) {
        List<UserCountriesVisited> visits = userCountriesVisitedService.getVisitsByCountryId(id);
        return ResponseEntity.ok(visits);
    }



    @DeleteMapping("/{visitId}")
    public ResponseEntity<String> deleteVisit(@PathVariable Long visitId) {
        boolean deleted = userCountriesVisitedService.deleteVisit(visitId);
        if (deleted) {
            return ResponseEntity.ok("Visit deleted successfully");
        }
        return ResponseEntity.status(404).body("Visit not found");
    }
}
