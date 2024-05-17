import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Sunrise: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 18H2M6.31412 12.3141L4.8999 10.8999M17.6858 12.3141L19.1 10.8999M22 18H20M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M22 22H2M16 6L12 2M12 2L8 6M12 2V9"
        {...pathProps}
      />
    </SVG>
  );
};

export default Sunrise;

