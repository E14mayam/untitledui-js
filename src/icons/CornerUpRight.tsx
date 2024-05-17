import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const CornerUpRight: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 20V18.6C4 15.2397 4 13.5595 4.65396 12.2761C5.2292 11.1471 6.14708 10.2292 7.27606 9.65396C8.55953 9 10.2397 9 13.6 9H20M20 9L15 14M20 9L15 4"
        {...pathProps}
      />
    </SVG>
  );
};

export default CornerUpRight;

