import { useRef, useState,useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import TooltipContainer from "./TooltipContainer";

export default function Tooltip({
  children,
  targetReact,
}: {
  children: React.ReactNode;
  targetReact: { left: number; top: number; right: number; bottom: number };
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const now = performance.now();
  while (performance.now() - now < 100) {
    console.log("wait",now,performance.now());
  }

  useLayoutEffect(() => {
    if(ref?.current){
      const { height } = ref.current.getBoundingClientRect();
      setTooltipHeight(height);
    }
  }, []);
  const [tooltipHeight, setTooltipHeight] = useState(0);
  let tooltipX = 0;
  let tooltipY = 0;

  if (targetReact !== null) {
    tooltipX = targetReact.left;
    tooltipY = targetReact.top - tooltipHeight;
    if (tooltipY < 0) {
      tooltipY = targetReact.bottom;
    }
  }
  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      <div>{children}</div>
    </TooltipContainer>,
    document.body
  );
}
