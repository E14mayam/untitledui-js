"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const LightBulb01: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M15 16.5V19C15 19.9319 15 20.3978 14.8478 20.7654C14.6448 21.2554 14.2554 21.6448 13.7654 21.8478C13.3978 22 12.9319 22 12 22C11.0681 22 10.6022 22 10.2346 21.8478C9.74458 21.6448 9.35523 21.2554 9.15224 20.7654C9 20.3978 9 19.9319 9 19V16.5M15 16.5C17.6489 15.3427 19.5 12.5755 19.5 9.5C19.5 5.35786 16.1421 2 12 2C7.85786 2 4.5 5.35786 4.5 9.5C4.5 12.5755 6.35114 15.3427 9 16.5M15 16.5H9"
        {...pathProps}
      />
    </SVG>
  );
};

export default LightBulb01;

