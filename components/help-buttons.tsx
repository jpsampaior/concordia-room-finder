import { Button } from "@/components/ui/button";
import { ImageIcon, Map, MapPin } from "lucide-react";
import Link from "next/link";

export function HelpButtons({photoURL, buildingName, googleMapsLink}: {photoURL: string, buildingName: string, googleMapsLink: string}) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl">
        Still unsure? We have some options to help you!
      </h3>
      <div className="flex flex-col gap-3 lg:flex-row lg:justify-center">
        {/* <Link href={photoURL || ""} target="_blank">
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary/80 w-[250px]"
          >
            <ImageIcon />
            {buildingName} Photo
          </Button>
        </Link> */}
        <Link href={googleMapsLink || ""} target="_blank">
          <Button variant="outline" size="lg" className="w-[250px]">
            <MapPin />
            Building Google Maps Location
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
            className="border-tertiary text-tertiary hover:bg-tertiary/80 w-[250px]"
          >
            <Map />
            Concordia Campus Map
          </Button>
        </Link>
      </div>
    </div>
  );
}
