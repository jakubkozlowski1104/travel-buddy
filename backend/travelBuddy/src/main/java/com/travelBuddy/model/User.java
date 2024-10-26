    package com.travelBuddy.model;

    import jakarta.persistence.*;
    import lombok.Getter;
    import lombok.Setter;
    import org.hibernate.annotations.CreationTimestamp;
    import org.hibernate.annotations.GenericGenerator;
    import org.hibernate.annotations.UpdateTimestamp;
    import org.hibernate.annotations.UuidGenerator;

    import java.time.LocalDateTime;
    import java.util.UUID;


    @Entity
    @Getter
    @Setter
    @Table(name = "USERS")
    public class User {

        @Id
        @UuidGenerator
        @Column(name = "id", unique = true, nullable = false, updatable = false)
        private String id;

        private String username;
        private String email;

        @Column(nullable = true)
        private String bio;

        @Column(nullable = true)
        private String photoUrl;

        @Column(nullable = true)
        private String interests;

        @CreationTimestamp
        private LocalDateTime createdAt;

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getBio() {
            return bio;
        }

        public void setBio(String bio) {
            this.bio = bio;
        }

        public String getPhotoUrl() {
            return photoUrl;
        }

        public void setPhotoUrl(String photoUrl) {
            this.photoUrl = photoUrl;
        }

        public String getInterests() {
            return interests;
        }

        public void setInterests(String interests) {
            this.interests = interests;
        }

        public LocalDateTime getCreatedAt() {
            return createdAt;
        }

        public void setCreatedAt(LocalDateTime createdAt) {
            this.createdAt = createdAt;
        }


        @PrePersist
        protected void onCreate() {
            this.createdAt = LocalDateTime.now();
        }

        @PreUpdate
        protected void onUpdate() {
        }

    }
