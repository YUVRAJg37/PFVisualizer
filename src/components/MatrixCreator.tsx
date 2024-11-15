import { useShallow } from "zustand/shallow";
import genericStore from "../store/GenericStore";

function MatrixCreator() {
  const { setPathMatrix, cellsData } = genericStore(
    useShallow((state) => ({
      setPathMatrix: state.setPathMatrix,
      cellsData: state.cellsData,
    }))
  );

  const updateMatrixData = () => {};

  return null;
}

export default MatrixCreator;
