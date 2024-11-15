import { useControls } from "leva";
import genericStore, { CellType } from "../store/GenericStore";

function CellDataSelector() {
  const setCurrentCellType = genericStore((state) => state.setCurrentCellType);
  useControls({
    cellType: {
      options: {
        Red: 0,
        Blue: 1,
        Green: 2,
      },
      onChange: (value) => {
        if (value === 0) setCurrentCellType(CellType.RED_BOX);
        else if (value === 1) setCurrentCellType(CellType.BLUE_BOX);
        else if (value === 2) setCurrentCellType(CellType.GREEN_BOX);
      },
    },
  });

  return null;
}

export default CellDataSelector;
