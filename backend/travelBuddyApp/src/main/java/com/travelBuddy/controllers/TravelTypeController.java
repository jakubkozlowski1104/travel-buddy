package com.travelBuddy.controllers;

import com.travelBuddy.models.TravelType;
import com.travelBuddy.services.TravelTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/travel-types")
public class TravelTypeController {

    @Autowired
    private TravelTypeService travelTypeService;

    // Pobierz wszystkie typy podróży
    @GetMapping
    public List<TravelType> getAllTravelTypes() {
        return travelTypeService.getAllTravelTypes();
    }

    // Pobierz szczegóły typu podróży po id
    @GetMapping("/{id}")
    public ResponseEntity<TravelType> getTravelTypeById(@PathVariable Long id) {
        Optional<TravelType> travelType = travelTypeService.getTravelTypeById(id);
        return travelType.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Dodaj nowy typ podróży
    @PostMapping
    public ResponseEntity<TravelType> addTravelType(@RequestBody TravelType travelType) {
        try {
            TravelType savedTravelType = travelTypeService.addTravelType(travelType);
            return ResponseEntity.ok(savedTravelType);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // Usuń typ podróży po id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteTravelType(@PathVariable Long id) {
        boolean isDeleted = travelTypeService.deleteTravelType(id);
        if (isDeleted) {
            return ResponseEntity.ok("Deleted successfully");
        } else {
            return ResponseEntity.status(404).body("Failed to delete: Travel type not found");
        }
    }
}
