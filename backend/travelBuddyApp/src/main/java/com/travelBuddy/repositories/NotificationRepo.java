package com.travelBuddy.repositories;

import com.travelBuddy.models.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NotificationRepo extends JpaRepository<Notification, String> {
    List<Notification> findByUserId(String userId);

    void deleteByUserId(String userId);

    int countByUserIdAndIsReadFalse(String userId);
}
