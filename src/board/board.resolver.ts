import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { AuthGuard } from 'src/authentication/authentication.guard';
import { Board } from './board.model';
import { BoardService } from './board.service';

@Resolver(() => Board)
@UseGuards(AuthGuard)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => [Board])
  getBoards() {
    const boards = this.boardService.getBoards();
    return boards;
  }

  @Query(() => Board)
  getBoardById(@Args({ name: 'id', type: () => ID }) id: number) {
    const board = this.boardService.getBoardById(id);
    return board;
  }
}
