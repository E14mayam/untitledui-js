"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Map01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 18L2 22V6L9 2M9 18L16 22M9 18V2M16 22L22 18V2L16 6M16 22V6M16 6L9 2"
        {...pathProps}
      />
    </SVG>
  );
};

export default Map01;

