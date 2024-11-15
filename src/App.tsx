import { useControls } from "leva";
import "./App.css";
import Grid from "./components/Grid";
import { useEffect } from "react";
import genericStore from "./store/GenericStore";
import { useThree } from "@react-three/fiber";
import CellDataSelector from "./components/CellDataSelector";
import CellSolver from "./components/CellSolver";

function App() {
  const { camera } = useThree();
  const cellsData = genericStore((state) => state.cellsData);

  const { rows, cols } = useControls({
    rows: {
      value: 25,
      step: 1,
      max: 100,
      min: 1,
    },
    cols: {
      value: 40,
      step: 1,
      max: 100,
      min: 1,
    },
  });

  useEffect(() => {
    if (camera) {
      camera.rotation.set(-3.14 / 2, 0, 0);
      camera.position.set(0, 5, 0);
    }
  }, [camera]);

  useEffect(() => {
    console.log(cellsData);
  }, [cellsData]);

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <CellDataSelector />
      <Grid rows={rows} cols={cols} />
      {cellsData.map((cellData, index) => (
        <CellSolver
          position={cellData.position}
          type={cellData.type}
          key={index}
        />
      ))}
    </>
  );
}

export default App;
