package com.flashcards.server.controller;

import com.flashcards.server.dto.FlashcardDto;
import com.flashcards.server.form.FlashcardForm;
import com.flashcards.server.service.FlashcardService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@Tag(name = "Flashcards", description = "Flashcards CRUD operations")
@RestController
@RequestMapping("/api/v1/flashcard")
public class FlashcardController {

    private FlashcardService flashcardService;

    @Autowired
    public FlashcardController(FlashcardService flashcardService) {
        this.flashcardService = flashcardService;
    }

    @GetMapping
    public ResponseEntity<List<FlashcardDto>> all() {
        return ResponseEntity.ok(flashcardService.getAll());
    }

    @PostMapping
    public ResponseEntity<FlashcardDto> create(@RequestBody FlashcardForm flashcardForm) {
        var created = flashcardService.create(flashcardForm);
        URI u = URI.create(String.format("/api/v1/flashcard/%s", created.getId()));
        return ResponseEntity.created(u).body(created);
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable("id") long id) {
        flashcardService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
