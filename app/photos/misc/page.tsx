import Gallery from "../photos";
import { PhotosIn } from "../photos";

const photosIn: PhotosIn = [];

export default function Home() {
  return (
    <>
      <Gallery
        photosIn={photosIn}
        title="colombia"
        desc="bogotá, monserrate and surroundings, mar 2024"
      />
      <Gallery
        photosIn={photosIn}
        title="madrid"
        desc="downtown and surrounding towns, summer 2023"
      />
    </>
  );
}
