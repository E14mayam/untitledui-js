import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Placeholder: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Placeholder;

