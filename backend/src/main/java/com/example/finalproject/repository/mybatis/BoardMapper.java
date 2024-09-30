package com.example.finalproject.repository.mybatis;

import com.example.finalproject.board.domain.BoardMain;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

public interface BoardMapper {
    int totalPage();
    List<BoardMain> boardMain(int startRow, int endRow);
}
