package com.travelBuddy.repositories;

import com.travelBuddy.models.TravelType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TravelTypeRepo extends JpaRepository<TravelType, Long> {
    boolean existsByNameIgnoreCase(String name);
}
