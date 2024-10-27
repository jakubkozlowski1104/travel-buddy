package com.travelBuddy.controllers;

import com.travelBuddy.DTO.NotificationRequest;
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

    //works
    @PostMapping
    public ResponseEntity<Notification> createNotification(@RequestBody NotificationRequest request) {
        return ResponseEntity.ok(notificationService.createNotification(request.getUserId(), request.getMessage()));
    }

    //works
    @GetMapping("/{userId}")
    public ResponseEntity<List<Notification>> getNotificationsForUser(@PathVariable String userId) {
        return ResponseEntity.ok(notificationService.getNotificationsForUser(userId));
    }

    //works
    @GetMapping("/notification/{id}")
    public ResponseEntity<Notification> getNotificationById(@PathVariable String id) {
        return ResponseEntity.ok(notificationService.getNotificationById(id));
    }

    //works
    @PutMapping("/markAsRead/{id}")
    public ResponseEntity<String> markAsRead(@PathVariable String id) {
        notificationService.markAsRead(id);
        return ResponseEntity.ok("Notification marked as read");
    }

    //work
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNotification(@PathVariable String id) {
        notificationService.deleteNotification(id);
        return ResponseEntity.ok("Notification deleted successfully");
    }

    //works
    @DeleteMapping("/allforUser/{userId}")
    public ResponseEntity<String> deleteAllNotificationsForUser(@PathVariable String userId) {
        notificationService.deleteAllNotificationsForUser(userId);
        return ResponseEntity.ok("All notifications deleted for user: " + userId);
    }

    //works
    @GetMapping("/countUnreadForUser/{userId}")
    public ResponseEntity<Long> countUnreadNotificationsForUser(@PathVariable String userId) {
        long count = notificationService.countUnreadNotificationsForUser(userId);
        return ResponseEntity.ok(count);
    }
}
