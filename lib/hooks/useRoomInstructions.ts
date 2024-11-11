import { useState, useEffect } from "react";
import axios from "axios";

export const useRoomInstructions = (building: string, room: string) => {
  const [roomMapUrl, setRoomMapUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRoomMap() {
      try {
        setLoading(true);
        const response = await axios.get(
          `/api/floorMap?roomNumber=${building}${room}`,
          { responseType: "blob" }
        );

        const imageUrl = URL.createObjectURL(response.data);
        setRoomMapUrl(imageUrl);
      } catch (err) {
        setError(`Error while loading map: ${err}`);
      } finally {
        setLoading(false);
      }
    }

    if (building && room) {
      fetchRoomMap();
    }
  }, [building, room]);

  return { roomMapUrl, loading, error };
};
