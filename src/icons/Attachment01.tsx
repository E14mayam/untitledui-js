"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Attachment01: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21.1525 10.8995L12.1369 19.9151C10.0866 21.9653 6.7625 21.9653 4.71225 19.9151C2.662 17.8648 2.662 14.5407 4.71225 12.4904L13.7279 3.47483C15.0947 2.108 17.3108 2.108 18.6776 3.47483C20.0444 4.84167 20.0444 7.05775 18.6776 8.42458L10.0156 17.0866C9.33213 17.7701 8.22409 17.7701 7.54068 17.0866C6.85726 16.4032 6.85726 15.2952 7.54068 14.6118L15.1421 7.01037"
        {...pathProps}
      />
    </SVG>
  );
};

export default Attachment01;

