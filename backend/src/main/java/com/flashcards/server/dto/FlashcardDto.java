package com.flashcards.server.dto;

import com.flashcards.server.entity.Flashcard;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FlashcardDto {
    private long id;
    private String front;
    private String back;

    public static FlashcardDto toDto(Flashcard flashcard) {
        return new FlashcardDto(flashcard.getId(), flashcard.getFront(), flashcard.getBack());
    }
}
