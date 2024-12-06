package com.travelBuddy.services;

import com.travelBuddy.models.TravelType;
import com.travelBuddy.repositories.TravelTypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TravelTypeService {

    @Autowired
    private TravelTypeRepo travelTypeRepo;

    public List<TravelType> getAllTravelTypes() {
        return travelTypeRepo.findAll();
    }

    public Optional<TravelType> getTravelTypeById(Long id) {
        return travelTypeRepo.findById(id);
    }

    public TravelType addTravelType(TravelType travelType) {
        if (!travelTypeRepo.existsByNameIgnoreCase(travelType.getName())) {
            return travelTypeRepo.save(travelType);
        }
        throw new IllegalArgumentException("Travel type with this name already exists");
    }

    public boolean deleteTravelType(Long id) {
        if (travelTypeRepo.existsById(id)) {
            travelTypeRepo.deleteById(id);
            return true;
        }
        return false;
    }
}
