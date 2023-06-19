package com.flashcards.server.controller;

import com.flashcards.server.form.FlashcardForm;
import com.flashcards.server.service.FlashcardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@Controller
@RequestMapping("/api/v1/flashcard")
public class FlashcardController {

    private FlashcardService flashcardService;

    @Autowired
    public FlashcardController(FlashcardService flashcardService) {
        this.flashcardService = flashcardService;
    }

    @GetMapping
    public ResponseEntity all() {
        return ResponseEntity.ok(flashcardService.getAll());
    }

    @PostMapping
    public ResponseEntity create(@RequestBody FlashcardForm flashcardForm) {
        var created = flashcardService.create(flashcardForm);
        URI u = URI.create(String.format("/api/v1/flashcard/%s", created.getId()));
        return ResponseEntity.created(u).build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity delete(@PathVariable("id") long id) {
        flashcardService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
