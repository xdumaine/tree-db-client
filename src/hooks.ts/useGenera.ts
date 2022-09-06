import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { client } from "../api";

export const useGenera = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    client
      .query({
        query: gql`
          query ExampleQuery {
            genera {
              name
              commonNames
              speciesCount
            }
          }
        `,
      })
      .then((response) => {
        console.log(response);
        setData(response.data?.genera);
      });
  }, []);

  return data;
};
