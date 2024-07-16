"use client";

import { GoX, GoChevronLeft, GoChevronRight } from "react-icons/go";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import PhotoAlbum, { ClickHandlerProps, Photo } from "react-photo-album";
import { Paragraph } from "../paragraph";

const pref = "/images/gallery/";
const ext = "thumb.webp";
const extHiRes = ".jpg";

interface ImageSize {
  width: number;
  height: number;
}

export function getImageSize(src: string): Promise<ImageSize> {
  return new Promise((resolve) => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      resolve({ width: image.width, height: image.height });
    };
  });
}

type PhotoIn = {
  n: number;
  w: number;
  h: number;
  t: string;
};

export type PhotosIn = PhotoIn[];

export type GalleryProps = {
  photosIn: PhotoIn[];
  nFrom: number;
  nTo: number;
  title: string;
  desc: string;
};

export default function Gallery({
  photosIn,
  nFrom,
  nTo,
  title,
  desc,
}: GalleryProps) {
  const [started, setStarted] = useState(false);
  const [nPicsAdded, setNPicsAdded] = useState(0);
  if (!started) {
    setStarted(true);
    Array.from(new Array(nTo - nFrom + 1), (_, i) => i + nFrom)
      .map((i) => {
        let url = pref + i + ext;
        return { n: i, dimp: getImageSize(url) };
      })
      .forEach(({ n, dimp }) =>
        dimp.then((is) => {
          let newPhoto = { n: n, w: is.width, h: is.height, t: "" };
          if (!photosIn.find(({ n }) => n === newPhoto.n)) {
            photosIn.push(newPhoto);
            photosIn.sort((a, b) => a.n - b.n);
          }
          setNPicsAdded(n);
        })
      );
  }
  const divRef = useRef<HTMLDivElement>(null);

  const [popupState, setPopupState] = useState({
    shown: false,
    src: "",
    zoom: false,
  });
  const resetPopupState = () =>
    setPopupState({ shown: false, src: "", zoom: false });
  const populatePopupState = (h: ClickHandlerProps<Photo>) => {
    setPopupState({
      shown: true,
      src: h.photo.src.replace(ext, extHiRes),
      zoom: false,
    });
  };
  const movePopupPtr = (inc: number) => {
    var n =
      parseInt(popupState.src.replace(pref, "").replace(extHiRes, "")) + inc;
    if (n > nTo || n < nFrom) return;
    setPopupState({
      ...popupState,
      src: pref + n.toString() + extHiRes,
    });
  };
  const processKey = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key) {
      case "ArrowLeft":
        movePopupPtr(-1);
        break;
      case "ArrowRight":
        movePopupPtr(1);
        break;
      case "Escape":
        resetPopupState();
        break;
    }
  };
  const photos = photosIn.map(({ n, w, h, t }) => ({
    src: pref + n.toString() + ext,
    width: w,
    height: h,
    title: t,
  }));
  return (
    <>
      <Paragraph title={title} brk={true}>
        {desc}
      </Paragraph>
      <PhotoAlbum layout="rows" photos={photos} onClick={populatePopupState} />
      {popupState.shown && (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 bg-[rgba(6,6,6,0.9)] z-40"
            onClick={resetPopupState}
          />
          <div
            className="fixed w-screen h-dvh top-0 left-0 pointer-events-none flex lg:items-start items-center justify-center z-50 select-none outline-none"
            ref={divRef}
            onLoad={() => {
              if (divRef.current) divRef.current.focus();
            }}
            onKeyDown={processKey}
            tabIndex={0}
          >
            <GoChevronLeft
              className="self-center m-4 text-4xl pointer-events-auto cursor-pointer max-lg:hidden"
              onClick={() => {
                movePopupPtr(-1);
              }}
            />
            <img
              src={popupState.src}
              className="relative pointer-events-auto z-50 max-h-[80%] max-w-[90%] mt-[5%] cursor-zoom-in before:absolute before:top-0 before:left-0 before:bg-white before:p-2 before:size-32"
              onClick={(e) => window.open(popupState.src)}
            ></img>
            <GoChevronRight
              className="self-center m-4 text-4xl pointer-events-auto cursor-pointer max-lg:hidden"
              onClick={() => {
                movePopupPtr(1);
              }}
            />
          </div>
          <div className="fixed w-screen h-dvh top-0 right-0 pointer-events-none z-50 text-2xl flex justify-end">
            <div
              className="m-4 cursor-pointer pointer-events-auto"
              onClick={resetPopupState}
            >
              <GoX />
            </div>
          </div>
        </>
      )}
    </>
  );
}
