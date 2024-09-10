"use client";

import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const MessageHeartSquare: FC<SVGComponentProps> = ({
  pathProps,
  ...props
}) => {
  return (
    <SVG {...props}>
      <Path
        d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C18.7202 18 17.8802 18 16.2 18H13.6837C13.0597 18 12.7477 18 12.4492 18.0613C12.1844 18.1156 11.9282 18.2055 11.6875 18.3285C11.4162 18.4671 11.1725 18.662 10.6852 19.0518L8.29976 20.9602C7.88367 21.2931 7.67563 21.4595 7.50054 21.4597C7.34827 21.4599 7.20422 21.3906 7.10923 21.2716C7 21.1348 7 20.8684 7 20.3355V18C6.07003 18 5.60504 18 5.22354 17.8978C4.18827 17.6204 3.37962 16.8117 3.10222 15.7765C3 15.395 3 14.93 3 14V7.8Z"
        {...pathProps}
      />
      <Path
        
        
        d="M11.9969 7.69925C11.0972 6.6604 9.59689 6.38095 8.46961 7.33223C7.34234 8.2835 7.18364 9.87399 8.06889 10.9991C8.61733 11.6961 9.99389 12.9691 10.962 13.837C11.3176 14.1557 11.4953 14.3151 11.7087 14.3793C11.8918 14.4344 12.1021 14.4344 12.2851 14.3793C12.4985 14.3151 12.6763 14.1557 13.0319 13.837C13.9999 12.9691 15.3765 11.6961 15.9249 10.9991C16.8102 9.87399 16.6709 8.2735 15.5242 7.33223C14.3776 6.39096 12.8966 6.6604 11.9969 7.69925Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default MessageHeartSquare;

