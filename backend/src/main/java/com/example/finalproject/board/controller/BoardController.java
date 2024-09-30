package com.example.finalproject.board.controller;

import com.example.finalproject.board.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/board")
@CrossOrigin(origins = { "${cors.allowed-origins}" },allowCredentials = "true",methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT})
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping(value = {"/boardmain?page", "/boardmain", "boardmain/", "/boardmain?user_id"})
    public ResponseEntity<?> boardMain(Model model, @RequestParam(required = false, defaultValue = "1") String page) {
        Map<String, Object> board = boardService.boardMain(page);

        return ResponseEntity.ok(board);
    }
}
