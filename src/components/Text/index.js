import React from "react";
const variantClasses = {
  h1: "font-bold md:text-[48px] sm:text-[48px] text-[60px]",
  h2: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h3: "font-bold sm:text-[32px] md:text-[38px] text-[42px]",
  h4: "font-bold sm:text-[28px] md:text-[30px] text-[32px]",
  h5: "sm:text-[22.41px] md:text-[24.41px] text-[26.41px]",
  h6: "font-black sm:text-[19.96px] md:text-[21.96px] text-[23.96px]",
  body1: "font-normal sm:text-[19.47px] md:text-[21.47px] text-[23.47px]",
  body2: "text-[18px]",
  body3: "font-bold text-[16px]",
  body4: "font-black text-[100px] md:text-[48px] sm:text-[48px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
