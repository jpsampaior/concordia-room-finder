import { NextRequest, NextResponse } from "next/server";
import { createCanvas, loadImage } from "canvas";
import { roomCoordinates } from "@/lib/coordinates";
import { parseRoomNumber } from "@/lib/utils";

export async function GET(request: NextRequest) {
  const roomNumber = request.nextUrl.searchParams.get("roomNumber")?.toLowerCase();

  const { building, floor } = parseRoomNumber(roomNumber as string);

  const imageUrl = `/floor-${building}-${floor}.png`;

  if (!roomNumber) {
    return NextResponse.json(
      { error: "Room number is required" },
      { status: 400 }
    );
  }

  const coordinates = roomCoordinates[roomNumber];

  if (!coordinates) {
    return NextResponse.json({ error: "Room not found" }, { status: 404 });
  }

  try {
    const imagePath =
      process.env.NODE_ENV === "development"
        ? `http://localhost:3000${imageUrl}`
        : `${process.cwd()}/public${imageUrl}`;

    const image = await loadImage(imagePath);

    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0);

    const { x, y } = coordinates;
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, Math.PI * 2);
    ctx.fill();

    const buffer = canvas.toBuffer("image/png");
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
      },
    });
  } catch (error) {
    console.error("Erro ao gerar o mapa:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
