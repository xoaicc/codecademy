import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({array}) => {
  return (
    <div>
      {array.map((ele, i) => {
        const {name, ...description} = ele;
        return <Tile 
        key={i}
        name={name}
        description={description} />})}
    </div>
  );
};
