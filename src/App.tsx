import React from "react";
import "./App.css";
import { useGetGeneraQuery } from "./types.generated";

function App() {
  const { data } = useGetGeneraQuery();
  return (
    <div>
      Genera:
      <ul>
        {data?.genera.map((genus) => {
          return (
            <li>
              {genus.name} ({genus.commonNames.join(",")}) Species:
              <ul>
                {genus.species.map((species) => {
                  return (
                    <li>
                      {species.name} ({species.commonNames.join(",")})
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
