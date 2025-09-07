import { Injectable } from '@nestjs/common';

import { Board } from './board.model';

@Injectable()
export class BoardService {
  getBoards() {
    return [] as Board[];
  }

  getBoardById(id: number) {
    return {
      id,
      type: 'event',
      title: '이벤트 제목',
      content: '이벤트 내용',
      createdAt: new Date(),
      updatedAt: new Date(),
      reservedAt: new Date(),
    } as Board;
  }
}
