"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [roomNumber, setRoomNumber] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string | null>(null); // Estado para armazenar a URL da imagem

  function handleRoomNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    setRoomNumber(event.target.value);
  }

  async function findRoom() {
    if (!roomNumber) {
      alert("Room number is required");
      return;
    }

    try {
      // Fazendo a requisição para a API
      const response = await axios.get(
        `/api/floorMap?roomNumber=${roomNumber}`,
        {
          responseType: "blob", // Especifica que o tipo de resposta será um blob (imagem)
        }
      );

      // Cria uma URL para o blob da imagem
      const imageUrl = URL.createObjectURL(response.data);
      setImageUrl(imageUrl); // Atualiza o estado com a URL da imagem
    } catch (error) {
      console.error("Error fetching room data:", error);
    }
  }

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
        <Input
          className="w-fit mx-auto lg:m-0"
          placeholder="Enter room number"
          value={roomNumber}
          onChange={handleRoomNumberChange}
        >
          <Search size={24} className="text-slate-500" />
        </Input>
        <Button className="mx-auto lg:m-0" size="lg" onClick={findRoom}>
          Find room
          <ArrowRight />
        </Button>
      </div>

      {/* Se a imagem foi carregada, exibe-a */}
      {imageUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-tertiary">Room Map:</h2>
          <img src={imageUrl} alt="Room Map" className="mx-auto mt-4" />
        </div>
      )}
    </div>
  );
}
