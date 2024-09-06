"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const FolderQuestion: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM9.8501 11.7522C10.0263 11.2514 10.3741 10.829 10.8318 10.56C11.2896 10.2909 11.8278 10.1926 12.3511 10.2824C12.8744 10.3721 13.3491 10.6442 13.691 11.0504C14.033 11.4566 14.2201 11.9707 14.2193 12.5017C14.2193 14.0006 11.971 14.75 11.971 14.75M12 17.75H12.01"
        {...pathProps}
      />
    </SVG>
  );
};

export default FolderQuestion;

