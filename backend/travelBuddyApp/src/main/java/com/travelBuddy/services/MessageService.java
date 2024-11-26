package com.travelBuddy.services;

import com.travelBuddy.models.Message;
import com.travelBuddy.models.Trip;
import com.travelBuddy.models.User;
import com.travelBuddy.repositories.MessageRepo;
import com.travelBuddy.repositories.TripRepo;
import com.travelBuddy.repositories.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class MessageService {
    private final MessageRepo messageRepo;
    private final UserRepo userRepo;
    private final TripRepo tripRepo;

    public Message sendMessage(String senderUsername, String receiverUsername, Long tripId, String content) {
        User sender = userRepo.findByUsername(senderUsername)
                .orElseThrow(() -> new RuntimeException("Sender not found!"));
        User receiver = userRepo.findByUsername(receiverUsername)
                .orElseThrow(() -> new RuntimeException("Receiver not found!"));


        Trip trip = tripId != null ? tripRepo.findById(tripId)
                .orElseThrow(() -> new RuntimeException("Trip not found!"))
                : null;

        Message message = new Message();
        message.setSender(sender);
        message.setReceiver(receiver);
        message.setTrip(trip);
        message.setContent(content);

        return messageRepo.save(message);
    }

    public List<Message> getMessagesFromSender(String senderUsername) {
        return messageRepo.findBySenderUsername(senderUsername);
    }

    public List<Message> getMessagesToReceiver(String receiverUsername) {
        return messageRepo.findByReceiverUsername(receiverUsername);
    }

    public List<Message> getMessagesForTrip(Long tripId) {
        return messageRepo.findByTripTripId(tripId);
    }

    public void deleteMessage(Long messageId) {
        Message message = messageRepo.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message not found!"));
        messageRepo.delete(message);
    }
}
