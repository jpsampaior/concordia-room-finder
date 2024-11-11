"use client";

import { useParams } from "next/navigation";
import { useBuildingInstructions } from "@/lib/hooks/useBuildingInstructions";
import { parseRoomNumber } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowDown, Image, Map, MapPin, Pin } from "lucide-react";
import Link from "next/link";

export default function Instructions() {
  const { roomNumber } = useParams();
  const { building, room, floor } = parseRoomNumber(roomNumber as string);

  const { buildingInstructions, buildingName, googleMapsLink, photoURL } =
    useBuildingInstructions(building);

  if (!building || !room || !floor) {
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

  return (
    <div className="space-y-10 text-zinc-300 text-center mt-6">
      <div className="space-y-4">
        <h1 className="text-2xl text-tertiary font-bold">
          Ready to buzz in? Let&apos;s find your room!
        </h1>
        <div className="space-y-3 text-start">
          <h2 className="font-bold text-lg text-secondary">
            1. Find the {buildingName} Building
          </h2>
          <div className="space-y-6 lg:flex items-center lg:space-y-0 lg:justify-between">
            <div className="space-y-2 lg:w-5/12">
              {buildingInstructions &&
                buildingInstructions
                  .filter((step) => step.option === "metro")
                  .map((step, index) => (
                    <div key={index}>
                      <p className="text-base">
                        <span className="font-bold">{step.title}</span>:{" "}
                        {step.instruction}
                      </p>
                    </div>
                  ))}
            </div>
            <p className="text-center text-secondary font-bold text-xl lg:text-2xl">
              or
            </p>
            <div className="space-y-2 lg:w-5/12">
              {buildingInstructions &&
                buildingInstructions
                  .filter((step) => step.option === "street")
                  .map((step, index) => (
                    <div key={index}>
                      <p className="text-base">
                        <span className="font-bold">{step.title}</span>:{" "}
                        {step.instruction}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl">
            Still unsure? We have some options to help you!
          </h3>
          <div className="space-x-2">
            <Link href={photoURL || ""} target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/80"
              >
                <Image />
                {buildingName} Photo
              </Button>
            </Link>
            <Link href={googleMapsLink || ""} target="_blank">
              <Button variant="outline" size="lg">
                <MapPin />
                Google Maps Location
              </Button>
            </Link>
            <Link
              href={
                "https://www.concordia.ca/content/dam/common/docs/maps/campus-maps.pdf"
              }
              target="_blank"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-tertiary text-tertiary hover:bg-tertiary/80"
              >
                <Map />
                Concordia Campus Map
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Button size="lg">
        <ArrowDown />
        Next Step
        <ArrowDown />
      </Button>
    </div>
  );
}
