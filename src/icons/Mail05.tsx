import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Mail05: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M13.744 2.63358L21.272 7.52679C21.538 7.69969 21.671 7.78615 21.7674 7.90146C21.8527 8.00354 21.9167 8.12162 21.9558 8.24877C22 8.39241 22 8.55104 22 8.8683V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.8683C2 8.55104 2 8.39241 2.04417 8.24877C2.08327 8.12162 2.14735 8.00354 2.23265 7.90146C2.32901 7.78615 2.46201 7.69969 2.72802 7.52679L10.256 2.63358M13.744 2.63358C13.1127 2.22327 12.7971 2.01812 12.457 1.93829C12.1564 1.86774 11.8436 1.86774 11.543 1.93829C11.2029 2.01812 10.8873 2.22327 10.256 2.63358M13.744 2.63358L19.9361 6.65849C20.624 7.10559 20.9679 7.32915 21.087 7.61264C21.1911 7.86039 21.1911 8.13961 21.087 8.38737C20.9679 8.67086 20.624 8.89441 19.9361 9.34152L13.744 13.3664C13.1127 13.7767 12.7971 13.9819 12.457 14.0617C12.1564 14.1323 11.8436 14.1323 11.543 14.0617C11.2029 13.9819 10.8873 13.7767 10.256 13.3664L4.06386 9.34151C3.37601 8.89441 3.03209 8.67086 2.91297 8.38737C2.80888 8.13961 2.80888 7.86039 2.91297 7.61264C3.03209 7.32915 3.37601 7.1056 4.06386 6.65849L10.256 2.63358M21.5 19L14.8572 13M9.14282 13L2.5 19"
        {...pathProps}
      />
    </SVG>
  );
};

export default Mail05;

