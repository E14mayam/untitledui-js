import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ArrowCircleBrokenLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M20.6621 17C18.933 19.989 15.7013 22 11.9999 22C6.47703 22 1.99988 17.5228 1.99988 12C1.99988 6.47715 6.47703 2 11.9999 2C15.7013 2 18.933 4.01099 20.6621 7M11.9999 8L7.99995 12M7.99995 12L11.9999 16M7.99995 12H21.9999"
        {...pathProps}
      />
    </SVG>
  );
};

export default ArrowCircleBrokenLeft;

