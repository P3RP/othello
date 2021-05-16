// 보드 설정
export const HEIGHT = 8;
export const WIDTH = 8;

// -----------------------------------------
// 진행
// -----------------------------------------

// 보드 업데이트
export const updateBoard = (board, row, col, player) => {
  // 새로운 상태의 보드 생성
  const new_board = board.map((v) => v.slice());

  // 선택한 위치로 인해 뒤집어지는 타일 변경
  getBlockReverse(new_board, {
    row: row,
    col: col,
    player: player,
  }).forEach((element) => {
    new_board[element[0]][element[1]] = player;
  });

  // 선택한 위치 타일 변경
  new_board[row][col] = player;

  // 기존 선택 가능 블록 제거
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      if (new_board[i][j] === 2) {
        new_board[i][j] = -1;
      }
    }
  }

  return new_board;
};

// 다음 차례를 위해 보드 설정
export const prepareNextBoard = (board, player, pass) => {
  // 플레이어 변경
  const next_player = player ^ 1;

  // 선택 가능 블록 생성
  const new_pass = [...pass];
  const clickable_block = getClickAvailable(board, next_player);
  if (!clickable_block.length) {
    // 다음 사용자 Pass 허용
    new_pass[next_player] = true;
  } else {
    new_pass[next_player] = false;
    clickable_block.forEach((element) => {
      board[element[0]][element[1]] = 2;
    });
  }

  return [board, next_player, new_pass];
};

// -----------------------------------------
// 진행 조건
// -----------------------------------------

// 방향
const UP = { row: -1, col: 0 };
const DOWN = { row: 1, col: 0 };
const LEFT = { row: 0, col: -1 };
const RIGHT = { row: 0, col: 1 };
const LEFTUP = { row: -1, col: -1 };
const LEFTDOWN = { row: 1, col: -1 };
const RIGHTUP = { row: -1, col: 1 };
const RIGHTDOWN = { row: 1, col: 1 };

// 한 방향으로 뒤집을 수 있는 목록
const checkDirectionReverse = (board, info, direction) => {
  let row = info["row"];
  let col = info["col"];
  const player = info["player"];

  const m_row = direction["row"];
  const m_col = direction["col"];

  const result = [];

  while (true) {
    // 방향으로 이동
    row = row + m_row;
    if (row >= HEIGHT || row < 0) {
      return [];
    }
    col = col + m_col;
    if (col >= WIDTH || col < 0) {
      return [];
    }

    // Board에서 현재 위치에 칩이 있는지
    // 칩이 있다면 무슨 색인지 확인
    const block_state = board[row][col];
    if (block_state === player) {
      return result;
    } else if (block_state === -1 || block_state === 2) {
      return [];
    } else {
      result.push([row, col]);
    }
  }
};

// 블록의 뒤집을 수 있는 위치 계산
export const getBlockReverse = (board, info) => {
  let result = [];

  // 각 방향에 대해서 뒤집을 수 있는 수 확인
  result.push.apply(result, checkDirectionReverse(board, info, UP));
  result.push.apply(result, checkDirectionReverse(board, info, DOWN));
  result.push.apply(result, checkDirectionReverse(board, info, LEFT));
  result.push.apply(result, checkDirectionReverse(board, info, RIGHT));
  result.push.apply(result, checkDirectionReverse(board, info, LEFTUP));
  result.push.apply(result, checkDirectionReverse(board, info, LEFTDOWN));
  result.push.apply(result, checkDirectionReverse(board, info, RIGHTUP));
  result.push.apply(result, checkDirectionReverse(board, info, RIGHTDOWN));

  return result;
};

// 플레이어가 놓을 수 있는 위치 조회
export const getClickAvailable = (board, player) => {
  const result = [];

  for (let row = 0; row < HEIGHT; row++) {
    for (let col = 0; col < WIDTH; col++) {
      // 이미 채워진 칸이면 계산 없이 패스
      if (board[row][col] !== -1) {
        continue;
      }
      if (
        getBlockReverse(board, { row: row, col: col, player: player }).length
      ) {
        result.push([row, col]);
      }
    }
  }
  return result;
};

// -----------------------------------------
// 종료 조건
// -----------------------------------------
const isBoardFull = (board) => {
  const check = new Set();

  // 보드 내의 중복 제거
  board.forEach((element) => {
    element.forEach((i) => {
      check.add(i);
    });
  });

  // 보드 내 -1, 2 값 존재 여부 확인
  if (
    JSON.stringify([...check].sort((a, b) => a - b)) === JSON.stringify([0, 1])
  ) {
    return true;
  } else {
    return false;
  }
};
