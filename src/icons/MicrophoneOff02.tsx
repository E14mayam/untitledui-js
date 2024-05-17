import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const MicrophoneOff02: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M4 12V13C4 17.4183 7.58172 21 12 21C14.4653 21 16.6701 19.8849 18.1376 18.1316M2 2L22 22M16 10.4V7C16 4.79086 14.2091 3 12 3C11.0406 3 10.1601 3.33778 9.47086 3.9009M12 17C9.79086 17 8 15.2091 8 13V8L15.2815 15.288C14.5585 16.323 13.3583 17 12 17Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default MicrophoneOff02;

