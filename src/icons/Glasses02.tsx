"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Glasses02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M10 14.5347C11.2335 13.8218 12.7663 13.8218 13.9999 14.5347M2 15L2.70149 7.98511C2.72808 7.71915 2.74138 7.58617 2.76178 7.47208C3.00222 6.12702 4.1212 5.11436 5.48352 5.00894C5.59907 5 5.73271 5 6 5M22 15L21.2985 7.98511C21.2719 7.71916 21.2586 7.58617 21.2382 7.47208C20.9978 6.12702 19.8788 5.11436 18.5165 5.00894C18.4009 5 18.2673 5 18 5M8.82843 12.1716C10.3905 13.7337 10.3905 16.2663 8.82843 17.8284C7.26634 19.3905 4.73367 19.3905 3.17157 17.8284C1.60948 16.2663 1.60948 13.7337 3.17157 12.1716C4.73366 10.6095 7.26633 10.6095 8.82843 12.1716ZM20.8284 12.1716C22.3905 13.7337 22.3905 16.2663 20.8284 17.8284C19.2663 19.3905 16.7337 19.3905 15.1716 17.8284C13.6095 16.2663 13.6095 13.7337 15.1716 12.1716C16.7337 10.6095 19.2663 10.6095 20.8284 12.1716Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Glasses02;

