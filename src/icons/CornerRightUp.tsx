"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CornerRightUp: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 20H6.4C9.76031 20 11.4405 20 12.7239 19.346C13.8529 18.7708 14.7708 17.8529 15.346 16.7239C16 15.4405 16 13.7603 16 10.4L16 4M16 4L11 9M16 4L21 9"
        {...pathProps}
      />
    </SVG>
  );
};

export default CornerRightUp;

