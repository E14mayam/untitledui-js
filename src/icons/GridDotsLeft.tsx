import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const GridDotsLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M7.5 3H7.51M7.5 12H7.51M7.5 21H7.51M16.5 3H16.51M16.5 12H16.51M16.5 21H16.51M12 3H12.01M12 12H12.01M12 21H12.01M12 16.5H12.01M12 7.5H12.01M21 3H21.01M21 12H21.01M21 21H21.01M21 16.5H21.01M21 7.5H21.01M3 21V3"
        {...pathProps}
      />
    </SVG>
  );
};

export default GridDotsLeft;

