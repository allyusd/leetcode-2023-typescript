export const title = "36. Valid Sudoku";

// 2023-09-22
// 後來發現速度會上上下下，決定改回原本作法，然後把共用檢查拉出來
// Accepted
// Runtime Runtime 80 ms Beats 30.86%
export default function isValidSudoku(board: string[][]): boolean {
  const initArray = () => {
    return Array(9)
      .fill(null)
      .map(() => new Set<string>());
  };

  const row: Set<string>[] = initArray();
  const col: Set<string>[] = initArray();
  const box: Set<string>[] = initArray();

  const check = (set: Set<string>, item: string): boolean => {
    if (set.has(item)) {
      return false;
    } else {
      set.add(item);
    }

    return true;
  };

  for (let x = 0; x < board[0].length; x++) {
    for (let y = 0; y < board.length; y++) {
      const item = board[y][x];

      if (item === ".") {
        continue;
      }

      if (!check(row[y], item)) {
        return false;
      }

      if (!check(col[x], item)) {
        return false;
      }

      const by = Math.floor(x / 3) + Math.floor(y / 3) * 3;

      if (!check(box[by], item)) {
        return false;
      }
    }
  }

  return true;
}
