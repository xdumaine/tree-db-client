import React from "react";
import "./App.css";
import { useGenera } from "./hooks.ts/useGenera";

function App() {
  const genera = useGenera();
  return (
    <ul>
      {(genera as any)?.map((genus: any) => {
        return (
          <li>
            {genus.name} ({genus.commonNames.join(",")})
          </li>
        );
      })}
    </ul>
  );
}

export default App;
