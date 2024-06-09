"use client";

import Gallery, { PhotosIn } from "../photos";

const photosIn: PhotosIn = [];

export default function Home() {
  return (
    <Gallery
      photosIn={photosIn}
      nFrom={0}
      nTo={31}
      title="flekke"
      desc="uwc rcn's campus and surroundings, 2020-2022"
    />
  );
}
