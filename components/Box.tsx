import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
            px-3
            py-2
            bg-neutral-700
            rounded-lg
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
