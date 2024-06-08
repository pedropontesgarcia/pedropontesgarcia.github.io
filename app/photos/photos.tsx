"use client";

import { useState } from "react";
import PhotoAlbum, { ClickHandlerProps, Photo } from "react-photo-album";

const pref = "/images/gallery/";
const ext = ".jpg";

type PhotoIn = {
  n: number;
  w: number;
  h: number;
  t: string;
};

export type PhotosIn = PhotoIn[];

export type GalleryProps = { photosIn: PhotosIn; title: string; desc: string };

export default function Gallery({ photosIn, title, desc }: GalleryProps) {
  const [popupState, setPopupState] = useState({
    shown: false,
    src: "",
    zoom: false,
  });
  const resetPopupState = () =>
    setPopupState({ shown: false, src: "", zoom: false });
  const populatePopupState = (h: ClickHandlerProps<Photo>) =>
    setPopupState({ shown: true, src: h.photo.src, zoom: false });
  const photos = photosIn.map(({ n, w, h, t }) => ({
    src: pref + n.toString() + ext,
    width: w,
    height: h,
    title: t,
  }));
  return (
    <>
      <div className="w-full text-center p-16 font-sans flex flex-col items-center justify-center">
        <p className="text-8xl">{title}</p>
        <p className="text-lg mt-4">{desc}</p>
      </div>
      <PhotoAlbum layout="rows" photos={photos} onClick={populatePopupState} />
      {popupState.shown && (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 bg-[rgba(6,6,6,0.8)] z-40"
            onClick={resetPopupState}
          />
          <div className="fixed w-screen h-screen top-0 left-0 pointer-events-none flex items-start justify-center z-50">
            <img
              src={popupState.src}
              className="pointer-events-auto z-50 max-h-[80%] mt-[5%] cursor-zoom-in"
              onClick={(e) => (popupState.zoom = true)}
            ></img>
          </div>
        </>
      )}
    </>
  );
}
