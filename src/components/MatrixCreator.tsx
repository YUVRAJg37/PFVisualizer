import { useShallow } from "zustand/shallow";
import genericStore from "../store/GenericStore";
import { button, useControls } from "leva";

function MatrixCreator() {
  const { setPathMatrix, rowRange, colRange } = genericStore(
    useShallow((state) => ({
      updatePathMatrix: state.updatePathMatrix,
      rowRange: state.rowRange,
      colRange: state.colRange,
    }))
  );

  const updateMatrixData = () => {
    console.log(rowRange, colRange);
  };

  useControls({
    foo: button(() => updateMatrixData()),
  });

  return null;
}

export default MatrixCreator;
