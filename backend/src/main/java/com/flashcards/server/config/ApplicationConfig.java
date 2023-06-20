package com.flashcards.server.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@OpenAPIDefinition(info = @Info(
        title = "Flashcards backend API",
        description = "Flashcards backend API provides CRUD, fuzzy searching and access management")
)
@Configuration
public class ApplicationConfig {

}
