import { Vector2, Vector3 } from "three";
import { create } from "zustand";

export enum CellType {
  RED_BOX,
  BLUE_BOX,
  GREEN_BOX,
}

type TCellsData = {
  index: Vector2;
  type: CellType;
  position: Vector3;
};

type TGenericStoreState = {
  currentCellType: CellType;
  setCurrentCellType: (type: CellType) => void;
  cellsData: TCellsData[];
  setCellsData: (index: Vector2, position: Vector3) => void;
  pathMatrix: [];
  updatePathMatrix: (mat: []) => void;
  rowRange: Vector2;
  colRange: Vector2;
  updateRowRange: (range: number) => void;
  updateColRange: (range: number) => void;
};

const genericStore = create<TGenericStoreState>((set) => ({
  index: -1,
  rowRange: new Vector2(Number.MAX_VALUE, Number.MIN_VALUE),
  colRange: new Vector2(Number.MAX_VALUE, Number.MIN_VALUE),
  currentCellType: CellType.RED_BOX,
  setCurrentCellType: (type: CellType) =>
    set(() => ({ currentCellType: type })),
  cellsData: [],
  pathMatrix: [],
  setCellsData: (index: Vector2, position: Vector3) =>
    set((state) => ({
      cellsData: [
        ...state.cellsData,
        { index: index, type: state.currentCellType, position: position },
      ],
    })),
  updatePathMatrix: (mat: []) =>
    set(() => ({
      pathMatrix: mat,
    })),
  updateRowRange: (range: number) =>
    set((state) => ({
      rowRange: new Vector2(
        Math.min(range, state.rowRange.x),
        Math.max(range, state.rowRange.y)
      ),
    })),
  updateColRange: (range: number) =>
    set((state) => ({
      colRange: new Vector2(
        Math.min(range, state.colRange.x),
        Math.max(range, state.colRange.y)
      ),
    })),
}));

export default genericStore;
