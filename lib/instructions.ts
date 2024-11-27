export type Step = {
  order: number;
  title: string;
  instruction: string[];
  option?: string;
  floor?: string[];
};

export const websterLibraryInstructions: Step[] = [
  {
    order: 1,
    title: "Start at Guy-Concordia Metro Station",
    instruction: [
      "Follow the signs to exit the metro via 'Rue Guy' towards Concordia University Campus.",
    ],
    option: "metro",
  },
  {
    order: 2,
    title: "Navigate the Tunnels Carefully",
    instruction: [
      "There's a tunnel from the metro exit that directs you to the different buildings on campus.",
      "Look specifically for signs pointing to Library Building to ensure you are heading in the right direction.",
    ],
    option: "metro",
  },
  {
    order: 1,
    title: "Head to the Corner of De Maisonneuve and Mackay",
    instruction: [
      "Make your way to the intersection of Boulevard de Maisonneuve and Rue Mackay.",
      "The Webster Library is located at the middle of the block, in front of the Hall Building.",
    ],
    option: "other",
  },
  {
    order: 2,
    title: "Look for the Orange and Gray Building",
    instruction: [
      "The main entrance is located at 1400 De Maisonneuve Blvd. West on Mackay street.",
    ],
    option: "other",
  },
];

export const websterLibraryFloorInstructions: Step[] = [
  {
    order: 1,
    title: "Enter the Building and Head to the Elevators",
    instruction: [
      "Once inside, make your way to the elevators located on the right side of the building.",
      "Take the elevator to the floor where your room is located. ",
      "Be sure to check if the elevator can take you to the floor you need to go to, as some elevators only go to specific floors.",
    ],
    option: "elevator",
    floor: ["2", "3", "4", "5"],
  },
  {
    order: 1,
    title: "Take the Stairs to the 2nd floor",
    instruction: [
      "If you prefer to take the stairs, you can find them on the right side of the building, next to the elevator.",
      "Be aware that these stairs only take you to the 2nd floor",
    ],
    option: "stairs",
    floor: ["2", "3", "4", "5"],
  },
  {
    order: 2,
    title: "Take the second set of stairs to go higher",
    instruction: [
      "To reach the 3rd, 4th, or 5th floor, staircases are available on both the left and right sides of each floor.",
    ],
    option: "stairs",
    floor: ["3", "4", "5"],
  },
];
