import { useEffect, useState } from "react";
import { Vector2, Vector3 } from "three";
import genericStore from "../store/GenericStore";
import { useShallow } from "zustand/shallow";

type TGridCellProps = {
  index: Vector2;
  position: Vector3;
};

function GridCell({ index, position }: TGridCellProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isDataSet, setIsDataSet] = useState(false);

  const { setCellsData, updateRowRange, updateColRange } = genericStore(
    useShallow((state) => ({
      setCellsData: state.setCellsData,
      updateRowRange: state.updateRowRange,
      updateColRange: state.updateColRange,
    }))
  );

  useEffect(() => {
    if (isDataSet) return;
    if (isClicked) {
      setCellsData(index, new Vector3(position.x, 1, position.z));
      updateRowRange(index.y);
      updateColRange(index.x);
      setIsDataSet(true);
    }
  }, [
    isDataSet,
    isClicked,
    setCellsData,
    position,
    index,
    updateColRange,
    updateRowRange,
  ]);

  return (
    <>
      <mesh position={position} onClick={() => setIsClicked(true)}>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial color={"white"} />
      </mesh>
    </>
  );
}

export default GridCell;
