package com.travelBuddy.controllers;

import com.travelBuddy.models.Notification;
import com.travelBuddy.repositories.UserRepo;
import com.travelBuddy.services.NotificationService;
import com.travelBuddy.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notifications")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;
    private final UserRepo userRepo;
    private final UserService userService;

    @PostMapping
    public ResponseEntity<Notification> createNotification(@RequestParam String userId, @RequestBody String message) {
        return ResponseEntity.ok(notificationService.createNotification(userId, message));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Notification>> getNotificationsForUser(@PathVariable String userId) {
        return ResponseEntity.ok(notificationService.getNotificationsForUser(userId));
    }

    @GetMapping("/notification/{id}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable String id) {
        return ResponseEntity.ok(notificationService.getNotificationById(id));
    }

    @PutMapping("/markAsRead/{id}")
    public ResponseEntity<String> markAsRead(@PathVariable String id) {
        notificationService.markAsRead(id);
        return ResponseEntity.ok("Notification marked as read");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNotification(@PathVariable String id) {
        notificationService.deleteNotification(id);
        return ResponseEntity.ok("Notification deleted successfully");
    }
}
