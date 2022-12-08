import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder29: "rounded-radius295",
  CircleBorder41: "rounded-radius41",
  CircleBorder32: "rounded-radius32",
  icbCircleBorder48: "rounded-radius48",
};
const variants = {
  FillLime800: "bg-lime_800 text-white_A700",
  FillLime801: "bg-lime_801 text-white_A700_cc",
  icbFillLime800: "bg-lime_800",
};
const sizes = {
  sm: "p-[15px] sm:p-[5px] md:p-[7px]",
  md: "md:p-[10px] p-[20px] sm:px-[15px] sm:py-[7px]",
  lg: "md:p-[11px] p-[23px] sm:px-[15px] sm:py-[9px]",
  xl: "md:p-[13px] p-[26px] sm:px-[15px] sm:py-[10px]",
  smIcn: "md:p-[19px] p-[37px] sm:px-[15px] sm:py-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder29",
    "CircleBorder41",
    "CircleBorder32",
    "icbCircleBorder48",
  ]),
  variant: PropTypes.oneOf(["FillLime800", "FillLime801", "icbFillLime800"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder29",
  variant: "FillLime800",
  size: "md",
};

export { Button };
