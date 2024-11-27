"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { roomCoordinates } from "@/lib/coordinates";
import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [roomNumber, setRoomNumber] = useState<string>("");
  const [selectedRoom, setSelectedRoom] = useState<string>("");

  function handleRoomNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRoomNumber(event.target.value);
  }

  function handleSelectChange(value: string) {
    setSelectedRoom(value);
  }

  return (
    <div className="min-h-[90vh] flex flex-col text-center space-y-6 mt-5 lg:text-start lg:justify-center lg:min-h-[91vh] lg:mt-0">
      <div className="space-y-2">
        <h1 className="text-3xl text-tertiary font-semibold lg:text-6xl lg:font-extrabold">
          Buzzing your way <br /> to every room at Concordia!
        </h1>
        <p className="text-zinc-300">
          Welcome to Concordia&apos;s room-finder! Whether you&apos;re new or
          just need a guide, <br className="hidden lg:block" />
          follow the buzz to easily locate any room on campus.
        </p>
      </div>
      <div className="space-y-1">
        <h2 className="text-lg text-secondary font-semibold lg:text-2xl lg:font-bold">
          Option 1: Enter the room code <br className="lg:hidden" /><span className="text-sm font-medium text-zinc-300 lg:text-md lg:font-medium">(Include building prefix e.g: LB251)</span>
        </h2>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div>
            <Input
              className="w-fit mx-auto lg:m-0"
              placeholder="Enter room number"
              value={roomNumber}
              onChange={handleRoomNumberChange}
            >
              <Search size={24} className="text-slate-500" />
            </Input>
          </div>
          <Link href={`/instructions/${roomNumber.toLowerCase()}`}>
            <Button className="mx-auto lg:m-0" size="lg">
              Find room
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="text-lg text-secondary font-semibold lg:text-2xl lg:font-bold">
          Option 2: Use the select field to find your room
        </h2>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="text-zinc-300">
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[200px] mx-auto lg:m-0">
                <SelectValue placeholder="Select a room" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Webster Library Rooms</SelectLabel>
                  {Object.keys(roomCoordinates).map((room) => (
                    <SelectItem key={room} value={room}>
                      {room.toUpperCase()}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Link href={`/instructions/${selectedRoom.toLowerCase()}`}>
            <Button className="mx-auto lg:m-0" size="lg">
              Find room
              <ArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
