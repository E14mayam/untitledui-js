import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Repeat04: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 20.5001C16.6944 20.5001 20.5 16.6945 20.5 12.0001C20.5 9.17456 19.1213 6.67103 17 5.1255M13 22.4001L11 20.4001L13 18.4001M12 3.5001C7.30558 3.5001 3.5 7.30568 3.5 12.0001C3.5 14.8256 4.87867 17.3292 7 18.8747M11 5.6001L13 3.6001L11 1.6001"
        {...pathProps}
      />
    </SVG>
  );
};

export default Repeat04;

