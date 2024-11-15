import { Vector3 } from "three";
import { CellType } from "../store/GenericStore";

type TCellSolverProps = {
  position: Vector3;
  type: CellType;
};

function CellSolver({ position, type }: TCellSolverProps) {
  const MeshToDraw = () => {
    if (type === CellType.RED_BOX) {
      return (
        <mesh rotation={[-3.14 / 4, -3.14 / 4, 0]} position={position}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      );
    } else if (type === CellType.BLUE_BOX) {
      return (
        <mesh rotation={[-3.14 / 4, -3.14 / 4, 0]} position={position}>
          <sphereGeometry args={[0.5, 20, 20]} />
          <meshStandardMaterial color={"blue"} />
        </mesh>
      );
    } else if (type === CellType.GREEN_BOX) {
      return (
        <mesh rotation={[-3.14 / 4, -3.14 / 4, 0]} position={position}>
          <coneGeometry args={[0.5, 1, 10, 10]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      );
    }
  };
  return <MeshToDraw />;
}

export default CellSolver;
