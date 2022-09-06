import React from "react";
import "./App.css";
import { useGenera } from "./hooks.ts/useGenera";

function App() {
  const genera = useGenera();
  return <pre>{JSON.stringify(genera, null, 2)}</pre>;
}

export default App;
