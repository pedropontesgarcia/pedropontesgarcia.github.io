import Gallery from "../photos";
import { PhotosIn } from "../photos";

const photosIn1: PhotosIn = [];
const photosIn2: PhotosIn = [];

export default function Home() {
  return (
    <>
      <Gallery
        photosIn={photosIn1}
        nFrom={87}
        nTo={91}
        title="colombia"
        desc="bogotá, monserrate and surroundings, mar 2024"
      />
      <Gallery
        photosIn={photosIn2}
        nFrom={32}
        nTo={34}
        title="madrid"
        desc="downtown and surrounding towns, summer 2023"
      />
    </>
  );
}
