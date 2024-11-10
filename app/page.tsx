import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center text-center space-y-6 lg:text-start">
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
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <Input className="w-fit mx-auto lg:m-0" placeholder="Enter room number">
          <Search size={24} className="text-slate-500" />
        </Input>
        <Button className="mx-auto lg:m-0" size="lg">
          Find room
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
