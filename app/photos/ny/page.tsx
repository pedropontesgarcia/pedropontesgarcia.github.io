import Gallery from "../photos";
import { PhotosIn } from "../photos";

const photosIn: PhotosIn = [];

export default function Home() {
  return (
    <>
      <Gallery
        photosIn={photosIn}
        nFrom={46}
        nTo={74}
        title="ithaca"
        desc="cornell's campus and surroundings, 2023-2024"
      />
      {/* <Gallery
        photosIn={photosIn}
        title="adirondacks"
        desc="upper saranac & st. regis, oct 2023"
      /> */}
    </>
  );
}
