import { useMemo } from "react";
import GridCell from "./GridCell";
import { Vector2, Vector3 } from "three";

type TGridProps = {
  rows: number;
  cols: number;
};

function Grid({ rows, cols }: TGridProps) {
  const elements = useMemo(() => {
    const newElement: JSX.Element[] = [];
    for (let i = 0; i < rows * cols; i++) {
      const colIndex = Math.trunc(i / rows);
      const rowIndex = Math.trunc(i % rows);
      const x = colIndex - cols / 2 + 0.5;
      const z = rowIndex - rows / 2 + 0.5;

      newElement.push(
        <GridCell
          index={new Vector2(colIndex, rowIndex)}
          position={new Vector3(x, 0, z)}
          key={i}
        />
      );
    }
    return newElement;
  }, [rows, cols]);

  return (
    <>
      <group>{elements}</group>
    </>
  );
}

export default Grid;
