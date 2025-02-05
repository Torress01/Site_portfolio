import { SVGProps } from "react";

interface CopyIconProps extends SVGProps<SVGSVGElement>{
  title?: string;
}

export const CopyIcon = ({ title, ...props}: CopyIconProps) => {
  return (
    <svg
      {...props}
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 512 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      {title && <title>{title}</title>}
      <path d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72z"></path>
      <path d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80z"></path>
    </svg>
  );
}