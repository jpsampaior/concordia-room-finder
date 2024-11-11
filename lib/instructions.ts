export type Step = {
  order: number;
  title: string;
  instruction: string;
  option?: string;
  floor?: string[];
};

export const websterLibraryInstructions: Step[] = [
  {
    order: 1,
    title: "Start at Guy-Concordia Metro Station",
    instruction:
      "If you're using public transportation, take the metro to Guy-Concordia station on the Green Line. Follow the signs to exit toward Concordia University.",
    option: "metro",
  },
  {
    order: 2,
    title: "Navigate the Tunnels Carefully",
    instruction:
      "Concordia is connected to a network of underground tunnels. When exiting Guy-Concordia metro station, follow signs carefully to avoid taking the wrong tunnel. Look specifically for signs pointing to Library Building to ensure you&apos;re heading in the right direction.",
    option: "metro",
  },
  {
    order: 1,
    title: "Head to the Corner of De Maisonneuve and Mackay",
    instruction:
      "Make your way to the intersection of Boulevard de Maisonneuve and Rue Mackay. The Webster Library is located at the middle of the block, in front of the Hall Building.",
    option: "street",
  },
  {
    order: 2,
    title: "Look for the Orange and Gray Building",
    instruction:
      "The main entrance is located at 1400 De Maisonneuve Blvd. West.",
    option: "street",
  },
];

export const websterLibraryFloorInstructions: Step[] = [
  {
    order: 1,
    title: "Enter the Building and Head to the Elevators",
    instruction:
      "Once inside, make your way to the elevators located on the right side of the building. Take the elevator to the floor where your room is located. Be sure to check if the elevator can take you to the floor you need to go to, as some elevators only go to specific floors.",
    option: "elevator",
    floor: ["2", "3", "4", "5"],
  },
  {
    order: 1,
    title: "Take the Stairs to the 2nd floor",
    instruction:
      "If you prefer to take the stairs, you can find them on the right side of the building, next to the elevator. Be aware that these stairs only take you to the 2nd floor",
    option: "stairs",
    floor: ["2", "3", "4", "5"],
  },
  {
    order: 2,
    title: "Take the second set of stairs to go higher",
    instruction:
      "If you need to go to the 3rd, 4th, or 5th floor, take the second set of stairs located on the 2nd floor. There is to sets of stairs, one on the left and one on the right, near the center of the building.",
    option: "stairs",
    floor: ["3", "4", "5"],
  },
];
