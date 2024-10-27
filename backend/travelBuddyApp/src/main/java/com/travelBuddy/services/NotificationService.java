package com.travelBuddy.services;

import com.travelBuddy.models.Notification;
import com.travelBuddy.models.User;
import com.travelBuddy.repositories.NotificationRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class NotificationService {
    private final NotificationRepo notificationRepo;
    private final UserService userService;

    public Notification createNotification(String userId, String message) {
        User user = userService.getUserById(userId);
        Notification notification = new Notification(user, message);
        return notificationRepo.save(notification);
    }

    public List<Notification> getNotificationsForUser(String userId) {
        return notificationRepo.findByUserId(userId);
    }

    public Notification getNotificationById(String id) {
        return notificationRepo.findById(id).orElseThrow(() -> new RuntimeException("Notification not found"));
    }

    public void markAsRead(String id) {
        Notification notification = getNotificationById(id);
        notification.setRead(true);
        notificationRepo.save(notification);
    }

    public void deleteNotification(String id) {
        notificationRepo.deleteById(id);
    }
}
