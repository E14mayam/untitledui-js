import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const ImageIndentLeft: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M21 9.25H15M21 4H3M21 14.75H15M21 20H3M4.6 16H9.4C9.96005 16 10.2401 16 10.454 15.891C10.6422 15.7951 10.7951 15.6422 10.891 15.454C11 15.2401 11 14.9601 11 14.4V9.6C11 9.03995 11 8.75992 10.891 8.54601C10.7951 8.35785 10.6422 8.20487 10.454 8.10899C10.2401 8 9.96005 8 9.4 8H4.6C4.03995 8 3.75992 8 3.54601 8.10899C3.35785 8.20487 3.20487 8.35785 3.10899 8.54601C3 8.75992 3 9.03995 3 9.6V14.4C3 14.9601 3 15.2401 3.10899 15.454C3.20487 15.6422 3.35785 15.7951 3.54601 15.891C3.75992 16 4.03995 16 4.6 16Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default ImageIndentLeft;

