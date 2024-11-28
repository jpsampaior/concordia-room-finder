"use client";

import { useParams } from "next/navigation";
import { useBuildingInstructions } from "@/lib/hooks/useBuildingInstructions";
import { parseRoomNumber } from "@/lib/utils";
import { useFloorInstructions } from "@/lib/hooks/useFloorInstructions";
import { useRoomInstructions } from "@/lib/hooks/useRoomInstructions";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpButtons } from "@/components/help-buttons";

export default function Instructions() {
  const { roomNumber } = useParams();
  const { building, room, floor } = parseRoomNumber(roomNumber as string);

  const { buildingInstructions, buildingName, googleMapsLink, photoURL } =
    useBuildingInstructions(building);
  const { floorInstructions } = useFloorInstructions(building, floor);
  const { roomMapUrl, loading, error } = useRoomInstructions(building, room);

  if (!building || !room || !floor || error?.includes("404")) {
    return (
      <div className="flex h-[95vh] justify-center items-center">
        <h1 className="text-zinc-300 text-xl">Invalid room number</h1>
      </div>
    );
  }

  if (building !== "lb") {
    return (
      <div className="flex h-[95vh] justify-center items-center">
        <h1 className="text-zinc-300 text-xl">
          Instructions not available for this building
        </h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex h-[95vh] justify-center items-center">
        <h1 className="text-zinc-300 text-xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-zinc-300 text-center mt-6">
      <div className="space-y-8">
        <h1 className="text-2xl text-tertiary font-bold">
          Ready to buzz in? Let&apos;s find your room!
        </h1>
        <div className="space-y-5">
          <div className="flex flex-col gap-5 lg:flex-row">
            <Tabs
              defaultValue="metro"
              className="lg:w-1/2 space-y-3 text-start"
            >
              <div>
                <h2 className="font-bold text-lg text-secondary">
                  1. Find the {buildingName} Building
                </h2>
                <div>
                  <h4 className="text-md font-bold">Where are you at?</h4>
                  <TabsList>
                    <TabsTrigger value="metro">Metro</TabsTrigger>
                    <TabsTrigger value="other">Other</TabsTrigger>
                  </TabsList>
                </div>
              </div>
              <div className="space-y-6 lg:flex items-center lg:space-y-0 lg:justify-between">
                <TabsContent value="metro">
                  <div className="space-y-2">
                    {buildingInstructions &&
                      buildingInstructions
                        .filter((step) => step.option === "metro")
                        .map((step, index) => (
                          <div key={index}>
                            <h5 className="font-bold">{step.title}</h5>
                            <div className="space-y-1">
                              {step.instruction.map((instruction, index) => (
                                <p key={index} className="text-base">
                                  {instruction}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                  </div>
                </TabsContent>
                <TabsContent value="other">
                  <div className="space-y-2">
                    {buildingInstructions &&
                      buildingInstructions
                        .filter((step) => step.option === "other")
                        .map((step, index) => (
                          <div key={index}>
                            <h5 className="font-bold">{step.title}</h5>
                            <div className="space-y-1">
                              {step.instruction.map((instruction, index) => (
                                <p key={index} className="text-base">
                                  {instruction}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
            <Tabs
              defaultValue="stairs"
              className="lg:w-1/2 space-y-3 text-start"
            >
              <div>
                <h2 className="font-bold text-lg text-secondary">
                  2. Go to the {floor} floor
                </h2>
                <div>
                  <h4 className="text-md font-bold">
                    What option do you want to take?
                  </h4>
                  <TabsList>
                    <TabsTrigger value="stairs">Stairs</TabsTrigger>
                    <TabsTrigger value="elevator">Elevator</TabsTrigger>
                  </TabsList>
                </div>
              </div>
              <div className="space-y-6 lg:flex items-center lg:space-y-0 lg:justify-between">
                <TabsContent value="stairs">
                  <div className="space-y-2">
                    {floorInstructions &&
                      floorInstructions
                        .filter((step) => step.option === "stairs")
                        .map((step, index) => (
                          <div key={index}>
                            <h5 className="font-bold">{step.title}</h5>
                            <div className="space-y-1">
                              {step.instruction.map((instruction, index) => (
                                <p key={index} className="text-base">
                                  {instruction}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                  </div>
                </TabsContent>
                <TabsContent value="elevator">
                  <div className="space-y-2">
                    {floorInstructions &&
                      floorInstructions
                        .filter((step) => step.option === "elevator")
                        .map((step, index) => (
                          <div key={index}>
                            <h5 className="font-bold">{step.title}</h5>
                            <div className="space-y-1">
                              {step.instruction.map((instruction, index) => (
                                <p key={index} className="text-base">
                                  {instruction}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          <div className="space-y-3 text-start">
            <h2 className="font-bold text-lg text-secondary">
              3. Get to {roomNumber}
            </h2>
            <div className="space-y-2">
              <p className="text-base">
                <span className="font-bold">
                  Follow the floor map to get to your room
                </span>
                : The room will be marked with a red circle on the map.
              </p>
              {error ? (
                <p className="text-base text-red-500">
                  {!error.includes("404") &&
                    "Unable to load map. Please try again later."}
                </p>
              ) : (
                roomMapUrl && (
                  <Image
                    src={roomMapUrl}
                    alt={`map-${room}`}
                    width={400}
                    height={400}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
      {photoURL && buildingName && googleMapsLink && (
        <HelpButtons
          photoURL={photoURL}
          buildingName={buildingName}
          googleMapsLink={googleMapsLink}
        />
      )}
    </div>
  );
}
