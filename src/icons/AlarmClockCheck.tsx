import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const AlarmClockCheck: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        {...pathProps}
        d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M9 13.5L11 15.5L15.5 11M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z"
      />
    </SVG>
  );
};

export default AlarmClockCheck;

