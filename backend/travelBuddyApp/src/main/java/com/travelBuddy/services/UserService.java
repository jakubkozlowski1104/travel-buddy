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
import com.travelBuddy.DTO.UserDTO;

import java.util.List;
import java.util.stream.Collectors;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.function.BiFunction;
import java.util.function.Function;

import static com.travelBuddy.constants.Constant.PHOTO_DIRECTORY;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

@Service
@Slf4j
@Transactional(rollbackOn = Exception.class)
@RequiredArgsConstructor
public class UserService {
    private final UserRepo userRepo;

    public Page<User> getAllUsers(int page, int size) {
        return userRepo.findAll(PageRequest.of(page, size, Sort.by("username")));
    }

    public User getUserById(String id) {
        return userRepo.findById(id).orElseThrow(() -> new RuntimeException("Contact not found"));
    }

    public User createUser(User user) {
        return userRepo.save(user);
    }

    public void deleteUser(String id) {
        User user = getUserById(id);
        userRepo.delete(user);
    }

    public String uploadPhoto(String id, MultipartFile file) {
        log.info("Saving picture for user ID: {}", id);
        User user = getUserById(id);
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
                    .path("/users/image/" + filename).toUriString();
        }catch (Exception exception) {
            throw new RuntimeException("Unable to save image");
        }
    };

    private UserDTO convertToUserDTO(User user) {
        List<String> countriesVisited = user.getCountriesVisited()
                .stream()
                .map(visit -> visit.getCountry().getName()) // Pobranie nazwy kraju
                .collect(Collectors.toList());

        return new UserDTO(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getBio(),
                user.getPhotoUrl(),
                user.getInterests(),
                user.getCreatedAt(),
                countriesVisited
        );
    }

    public List<UserDTO> getAllUsersAsDTO(int page, int size) {
        return userRepo.findAll(PageRequest.of(page, size, Sort.by("username")))
                .stream()
                .map(this::convertToUserDTO)
                .collect(Collectors.toList());
    }
}