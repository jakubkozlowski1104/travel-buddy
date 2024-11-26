package com.travelBuddy.repositories;

import com.travelBuddy.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepo extends JpaRepository<Message, Long> {
    List<Message> findBySenderUsername(String senderUsername);

    List<Message> findByReceiverUsername(String receiverUsername);

    List<Message> findByTripTripId(Long tripId);
}
