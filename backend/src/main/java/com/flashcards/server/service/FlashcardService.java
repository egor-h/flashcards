package com.flashcards.server.service;

import com.flashcards.server.dto.FlashcardDto;
import com.flashcards.server.entity.Flashcard;
import com.flashcards.server.form.FlashcardForm;
import com.flashcards.server.repository.FlashcardRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FlashcardService {
    private FlashcardRepository flashcardRepository;

    @Autowired
    public FlashcardService(FlashcardRepository flashcardRepository) {
        this.flashcardRepository = flashcardRepository;
    }

    public FlashcardDto get(long id) {
        var found = flashcardRepository.findById(id).orElseThrow(() -> new RuntimeException("Flashcard not found"));
        return FlashcardDto.toDto(found);
    }

    public List<FlashcardDto> getAll() {
        return flashcardRepository.findAll().stream().map(FlashcardDto::toDto).collect(Collectors.toList());
    }

    public FlashcardDto create(FlashcardForm flashcardForm) {
        return FlashcardDto.toDto(flashcardRepository.save(new Flashcard(0, flashcardForm.getFront(), flashcardForm.getBack())));
    }

    public FlashcardDto update(long id, FlashcardForm flashcardForm) {
        var found = flashcardRepository.findById(id).orElseThrow(() -> new RuntimeException("Flashcard not found"));
        found.setBack(flashcardForm.getBack());
        found.setFront(flashcardForm.getFront());
        return FlashcardDto.toDto(flashcardRepository.save(found));
    }


    public void delete(long id) {
        flashcardRepository.deleteById(id);
    }
}
