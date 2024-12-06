package com.travelBuddy.controllers;

import com.travelBuddy.models.Message;
import com.travelBuddy.helpers.MessageRequest;
import com.travelBuddy.services.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;

    @PostMapping
    public ResponseEntity<Message> sendMessage(@RequestBody MessageRequest messageRequest) {
        return ResponseEntity.ok(
                messageService.sendMessage(
                        messageRequest.getSenderUsername(),
                        messageRequest.getReceiverUsername(),
                        messageRequest.getTripId(),
                        messageRequest.getContent()
                )
        );
    }

    @GetMapping("/from/{senderUsername}")
    public ResponseEntity<List<Message>> getMessagesFromSender(@PathVariable String senderUsername) {
        return ResponseEntity.ok(messageService.getMessagesFromSender(senderUsername));
    }

    @GetMapping("/to/{receiverUsername}")
    public ResponseEntity<List<Message>> getMessagesToReceiver(@PathVariable String receiverUsername) {
        return ResponseEntity.ok(messageService.getMessagesToReceiver(receiverUsername));
    }

    @GetMapping("/trip/{tripId}")
    public ResponseEntity<List<Message>> getMessagesForTrip(@PathVariable Long tripId) {
        return ResponseEntity.ok(messageService.getMessagesForTrip(tripId));
    }

    @DeleteMapping("/{messageId}")
    public ResponseEntity<String> deleteMessage(@PathVariable Long messageId) {
        messageService.deleteMessage(messageId);
        return ResponseEntity.ok("Message deleted successfully.");
    }
}
