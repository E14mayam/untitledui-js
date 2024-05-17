import { FC } from "react";
import { SVG, Path, SVGComponentProps } from "../template";

const Beaker02: FC<SVGComponentProps> = ({ pathProps, ...props }) => {
  return (
    <SVG {...props}>
      <Path
        d="M9 6V10.5012C9 11.0521 9 11.3276 8.93132 11.5829C8.87047 11.809 8.77037 12.0228 8.63557 12.2143C8.48344 12.4305 8.27182 12.6068 7.84859 12.9595L4.15141 16.0405C3.72818 16.3932 3.51656 16.5695 3.36443 16.7857C3.22963 16.9772 3.12953 17.191 3.06868 17.4171C3 17.6724 3 17.9479 3 18.4988V18.8C3 19.9201 3 20.4802 3.21799 20.908C3.40973 21.2843 3.71569 21.5903 4.09202 21.782C4.51984 22 5.0799 22 6.2 22H17.8C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V18.4988C21 17.9479 21 17.6724 20.9313 17.4171C20.8705 17.191 20.7704 16.9772 20.6356 16.7857C20.4834 16.5695 20.2718 16.3932 19.8486 16.0405L16.1514 12.9595C15.7282 12.6068 15.5166 12.4305 15.3644 12.2143C15.2296 12.0228 15.1295 11.809 15.0687 11.5829C15 11.3276 15 11.0521 15 10.5012V6M8.3 6H15.7C15.98 6 16.12 6 16.227 5.9455C16.3211 5.89757 16.3976 5.82108 16.4455 5.727C16.5 5.62004 16.5 5.48003 16.5 5.2V2.8C16.5 2.51997 16.5 2.37996 16.4455 2.273C16.3976 2.17892 16.3211 2.10243 16.227 2.0545C16.12 2 15.98 2 15.7 2H8.3C8.01997 2 7.87996 2 7.773 2.0545C7.67892 2.10243 7.60243 2.17892 7.5545 2.273C7.5 2.37996 7.5 2.51997 7.5 2.8V5.2C7.5 5.48003 7.5 5.62004 7.5545 5.727C7.60243 5.82108 7.67892 5.89757 7.773 5.9455C7.87996 6 8.01997 6 8.3 6ZM5.5 17H18.5C18.9647 17 19.197 17 19.3902 17.0384C20.1836 17.1962 20.8038 17.8164 20.9616 18.6098C21 18.803 21 19.0353 21 19.5C21 19.9647 21 20.197 20.9616 20.3902C20.8038 21.1836 20.1836 21.8038 19.3902 21.9616C19.197 22 18.9647 22 18.5 22H5.5C5.03534 22 4.80302 22 4.60982 21.9616C3.81644 21.8038 3.19624 21.1836 3.03843 20.3902C3 20.197 3 19.9647 3 19.5C3 19.0353 3 18.803 3.03843 18.6098C3.19624 17.8164 3.81644 17.1962 4.60982 17.0384C4.80302 17 5.03534 17 5.5 17Z"
        {...pathProps}
      />
    </SVG>
  );
};

export default Beaker02;

