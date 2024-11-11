export type Step = {
  order: number;
  title: string;
  instruction: string;
  option?: string;
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
      "Concordia is connected to a network of underground tunnels. When exiting Guy-Concordia metro station, follow signs carefully to avoid taking the wrong tunnel. Look specifically for signs pointing to Library Building to ensure you're heading in the right direction.",
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
