import { useRef, useState } from "react";
import Tooltip from "./Tooltip";

type ButtonWithTooltipProps = {
  tooltipContent: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonWithTooltip({ tooltipContent, ...reset }: ButtonWithTooltipProps) {
  const [targetReact, setTargetReact] = useState<{
    left: number;
    top: number;
    right: number;
    bottom: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <button
        {...reset}
        ref={buttonRef}
        onPointerEnter={() => {
          const react = buttonRef.current?.getBoundingClientRect();
          setTargetReact({
            left: react?.left || 0,
            top: react?.top || 0,
            right: react?.right || 0,
            bottom: react?.bottom || 0,
          });
        }}
        onPointerLeave={() => {
          setTargetReact(null);
        }}
      />
      {targetReact !== null && <Tooltip targetReact={targetReact}>{tooltipContent}</Tooltip>}
    </>
  );
}
