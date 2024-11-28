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
      "→ Follow the signs to exit the metro via 'Rue Guy' towards Concordia University Campus.",
    ],
    option: "metro",
  },
  {
    order: 2,
    title: "Navigate the Tunnels Carefully",
    instruction: [
      "→ The tunnel connects to different buildings; follow signs to the Library Building.",
    ],
    option: "metro",
  },
  {
    order: 1,
    title: "Head to the intersection of De Maisonneuve and Mackay",
    instruction: [
      "→ Make your way to the intersection of Boulevard de Maisonneuve and Rue Mackay.",
      "→ The Webster Library is oposite the Hall Building; The main entrance is located at 1400 De Maisonneuve Blvd. West on Mackay street.",
    ],
    option: "other",
  },
];

export const websterLibraryFloorInstructions: Step[] = [
  {
    order: 1,
    title: "Enter the Building and Head to the Elevators",
    instruction: [
      "→ Once inside, make your way to the elevators on the right.",
      "→ Take the elevator to the floor where your room is located. ",
      "→ Check if the elevator reaches your floor, as some only access specific levels.",
    ],
    option: "elevator",
    floor: ["2", "3", "4", "5"],
  },
  {
    order: 1,
    title: "Take the Stairs to the 2nd floor",
    instruction: [
      "→ If you prefer to take the stairs, you can find them on the right side of the building, next to the elevator.",
      "→ Be aware that these stairs only take you to the 2nd floor",
    ],
    option: "stairs",
    floor: ["2", "3", "4", "5"],
  },
  {
    order: 2,
    title: "Take the second set of stairs to go higher",
    instruction: [
      "→ To reach the 3rd, 4th, or 5th floor, staircases are available on both the left and right sides of each floor.",
    ],
    option: "stairs",
    floor: ["3", "4", "5"],
  },
];
