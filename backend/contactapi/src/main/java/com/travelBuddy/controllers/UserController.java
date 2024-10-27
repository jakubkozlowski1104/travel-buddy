package com.travelBuddy.controllers;

import com.travelBuddy.models.User;
import com.travelBuddy.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.nio.file.Files;
import java.nio.file.Paths;

import static com.travelBuddy.constants.Constant.PHOTO_DIRECTORY;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

@RestController
@RequestMapping("/contacts")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @PostMapping
    public ResponseEntity<User> createContact(@RequestBody User user) {
        return ResponseEntity.created(URI.create("/contacts/userID")).body(userService.createContact(user));
    }

    @GetMapping
    public ResponseEntity<Page<User>> getContacts(@RequestParam(value = "page", defaultValue = "0") int page,
                                                  @RequestParam(value = "size", defaultValue = "10") int size) {
        return ResponseEntity.ok().body(userService.getAllContacts(page, size));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getContact(@PathVariable(value = "id") String id) {
        return ResponseEntity.ok().body(userService.getContact(id));
    }

    @PutMapping("/photo")
    public ResponseEntity<String> uploadPhoto(@RequestParam("id") String id, @RequestParam("file")MultipartFile file) {
        return ResponseEntity.ok().body(userService.uploadPhoto(id, file));
    }



    @GetMapping(path = "/image/{filename}", produces = { IMAGE_PNG_VALUE, IMAGE_JPEG_VALUE })
    public byte[] getPhoto(@PathVariable("filename") String filename) throws IOException {
        return Files.readAllBytes(Paths.get(PHOTO_DIRECTORY + filename));
    }
}