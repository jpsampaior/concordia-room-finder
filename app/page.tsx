import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl text-tertiary font-semibold md:text-">
          Buzzing your way <br /> to every room at Concordia!
        </h1>
        <p className="text-zinc-300">
          Welcome to Concordia's room-finder! Whether you're new or just need a
          guide, follow the buzz to easily locate any room on campus.
        </p>
      </div>
      <div className="space-y-3">
        <Input className="w-fit mx-auto" placeholder="Enter room number">
          <Search size={24} className="text-slate-500" />
        </Input>
        <Button>
          Find room
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
