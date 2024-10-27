package com.travelBuddy.services;

import com.travelBuddy.models.User;
import com.travelBuddy.repositories.UserRepo;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.function.BiFunction;
import java.util.function.Function;

import static com.travelBuddy.constants.Constant.PHOTO_DIRECTORY;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

/**
 * @author Junior RT
 * @version 1.0
 * @license Get Arrays, LLC (<a href="https://www.getarrays.io">Get Arrays, LLC</a>)
 * @email getarrayz@gmail.com
 * @since 11/22/2023
 */

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class UserService {
    private final UserRepo userRepo;

    public Page<User> getAllContacts(int page, int size) {
        return userRepo.findAll(PageRequest.of(page, size, Sort.by("name")));
    }

    public User getContact(String id) {
        return userRepo.findById(id).orElseThrow(() -> new RuntimeException("Contact not found"));
    }

    public User createContact(User user) {
        return userRepo.save(user);
    }

    public void deleteContact(User user) {
        // Assignment
    }

    public String uploadPhoto(String id, MultipartFile file) {
        log.info("Saving picture for user ID: {}", id);
        User user = getContact(id);
        String photoUrl = photoFunction.apply(id, file);
        user.setPhotoUrl(photoUrl);
        userRepo.save(user);
        return photoUrl;
    }

    private final Function<String, String> fileExtension = filename -> Optional.of(filename).filter(name -> name.contains("."))
            .map(name -> "." + name.substring(filename.lastIndexOf(".") + 1)).orElse(".png");

    private final BiFunction<String, MultipartFile, String> photoFunction = (id, image) -> {
        String filename = id + fileExtension.apply(image.getOriginalFilename());
        try {
            Path fileStorageLocation = Paths.get(PHOTO_DIRECTORY).toAbsolutePath().normalize();
            if(!Files.exists(fileStorageLocation)) { Files.createDirectories(fileStorageLocation); }
            Files.copy(image.getInputStream(), fileStorageLocation.resolve(filename), REPLACE_EXISTING);
            return ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/contacts/image/" + filename).toUriString();
        }catch (Exception exception) {
            throw new RuntimeException("Unable to save image");
        }
    };
}















