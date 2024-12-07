package com.travelBuddy.repositories;

import com.travelBuddy.models.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CountryRepo extends JpaRepository<Country, Long> {
    Optional<Country> findByCode(String code);

    @Query("SELECT c FROM Country c WHERE LOWER(c.name) = LOWER(:name)")
    Optional<Country> findByNameIgnoreCase(@Param("name") String name);
}

