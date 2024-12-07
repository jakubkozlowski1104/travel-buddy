package com.travelBuddy.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        // Tworzymy źródło konfiguracji CORS
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Konfiguracja pozwalająca na uwierzytelnianie (credentials)
        config.setAllowCredentials(true);

        // Dozwolone originy - aktualizuj je, jeśli aplikacja ma inne adresy URL
        config.setAllowedOrigins(List.of(
                "http://localhost:3000", // React (domyślny port dla CRA)
                "http://localhost:4200", // Angular
                "http://localhost:5173"  // Vite (React lub inne frameworki)
        ));

        // Dozwolone nagłówki HTTP
        config.setAllowedHeaders(List.of(
                "Origin",
                "Content-Type",
                "Accept",
                "Authorization",
                "X-Requested-With",
                "Access-Control-Request-Method",
                "Access-Control-Request-Headers"
        ));

        // Nagłówki, które mogą być odsłonięte w odpowiedzi
        config.setExposedHeaders(List.of(
                "Origin",
                "Content-Type",
                "Accept",
                "Authorization"
        ));

        // Dozwolone metody HTTP
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));

        // Rejestracja konfiguracji dla wszystkich ścieżek
        source.registerCorsConfiguration("/**", config);

        // Zwracamy filtr CORS
        return new CorsFilter(source);
    }
}
