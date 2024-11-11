import { useState, useEffect } from "react";
import { Step, websterLibraryInstructions } from "@/lib/instructions";

export function useBuildingInstructions(building: string) {
  const [buildingInstructions, setBuildingInstructions] = useState<Step[] | null>(null);
  const [buildingName, setBuildingName] = useState<string | null>(null);

  useEffect(() => {
    if (building === "lb") {
      setBuildingInstructions(websterLibraryInstructions);
      setBuildingName("Webster Library");
    } else {
      setBuildingInstructions(null);
      setBuildingName(null);
    }
  }, [building]);

  return { buildingInstructions, buildingName };
}