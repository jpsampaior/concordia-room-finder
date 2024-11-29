import { useState, useEffect } from "react";
import { Step, websterLibraryInstructions } from "@/lib/instructions";

export function useBuildingInstructions(building: string) {
  const [buildingInstructions, setBuildingInstructions] = useState<
    Step[] | null
  >(null);
  const [buildingName, setBuildingName] = useState<string | null>(null);
  const [googleMapsLink, setGoogleMapsLink] = useState<string | null>(null);

  useEffect(() => {
    if (building === "lb") {
      setBuildingInstructions(websterLibraryInstructions);
      setBuildingName("Webster Library");
      setGoogleMapsLink("https://maps.app.goo.gl/CCZFxwnxguz9zqFGA");
    }
  }, [building]);

  return { buildingInstructions, buildingName, googleMapsLink };
}
