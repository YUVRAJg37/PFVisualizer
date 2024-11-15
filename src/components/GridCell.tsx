import { useEffect, useState } from "react";
import { Vector2, Vector3 } from "three";
import genericStore from "../store/GenericStore";

type TGridCellProps = {
  index: Vector2;
  position: Vector3;
};

function GridCell({ index, position }: TGridCellProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isDataSet, setIsDataSet] = useState(false);

  const setCellsData = genericStore((state) => state.setCellsData);

  useEffect(() => {
    if (isDataSet) return;
    if (isClicked) {
      setCellsData(index, new Vector3(position.x, 1, position.z));
      setIsDataSet(true);
    }
  }, [isDataSet, isClicked, setCellsData, position, index]);

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
