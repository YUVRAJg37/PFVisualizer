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
};

const genericStore = create<TGenericStoreState>((set) => ({
  index: -1,
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
}));

export default genericStore;
