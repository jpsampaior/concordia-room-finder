import { useState, useEffect } from "react";
import { Step, websterLibraryFloorInstructions } from "@/lib/instructions";

export function useFloorInstructions(building: string, floor: string) {
  const [floorInstructions, setFloorInstructions] = useState<Step[] | null>(
    null
  );

  useEffect(() => {
    if (building === "lb") {
        setFloorInstructions(websterLibraryFloorInstructions.filter((step) => step.floor?.includes(floor)));
    } else {
      setFloorInstructions(null);
    }
  }, [building, floor]);

  return { floorInstructions };
}
