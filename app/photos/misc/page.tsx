import Gallery from "../photos";
import { PhotosIn } from "../photos";

const photosIn1: PhotosIn = [];
const photosIn2: PhotosIn = [];
const photosIn3: PhotosIn = [];
const photosIn4: PhotosIn = [];
const photosIn5: PhotosIn = [];
const photosIn6: PhotosIn = [];
const photosIn7: PhotosIn = [];

export default function Home() {
  return (
    <>
      <Gallery
        photosIn={photosIn7}
        nFrom={94}
        nTo={97}
        title="eclipse"
        desc="partial solar eclipse in ithaca, ny, apr 2024"
      />
      <Gallery
        photosIn={photosIn6}
        nFrom={92}
        nTo={93}
        title="new orleans"
        desc="a brief study on trams, apr 2024"
      />
      <Gallery
        photosIn={photosIn1}
        nFrom={87}
        nTo={91}
        title="colombia"
        desc="bogotá, monserrate and surroundings, mar 2024"
      />
      <Gallery
        photosIn={photosIn2}
        nFrom={39}
        nTo={45}
        title="côte d'azur"
        desc="girona, marseille, corniglia, summer 2023"
      />
      <Gallery
        photosIn={photosIn3}
        nFrom={35}
        nTo={38}
        title="netherlands"
        desc="schiermonnikoog and groningen, summer 2023"
      />
      <Gallery
        photosIn={photosIn4}
        nFrom={32}
        nTo={34}
        title="madrid"
        desc="banco de españa and royal palace, summer 2023"
      />
    </>
  );
}
