import Gallery from "../photos";
import { PhotosIn } from "../photos";

const photosIn1: PhotosIn = [];
const photosIn2: PhotosIn = [];
const photosIn3: PhotosIn = [];

export default function Home() {
  return (
    <>
      <Gallery
        photosIn={photosIn1}
        nFrom={46}
        nTo={74}
        title="ithaca"
        desc="cornell's campus and surroundings, 2023-2024"
      />
      <Gallery
        photosIn={photosIn2}
        nFrom={75}
        nTo={78}
        title="adirondacks"
        desc="upper saranac & st. regis, oct 2023"
      />
      <Gallery
        photosIn={photosIn3}
        nFrom={79}
        nTo={86}
        title="ithaca winter"
        desc="jan-mar 2024"
      />
    </>
  );
}
