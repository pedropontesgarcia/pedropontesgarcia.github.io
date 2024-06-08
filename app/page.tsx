"use client";

import { useState, useEffect } from "react";

const name = "pedro\npontes\ngarcía_";
var delay = 100;
var done = false;
var blinking = false;
var locked = false;
var photoDelay = 3000;

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Descriptor({ text, msg, cursorPosition }: any) {
  const [visible, setVisible] = useState(false);
  const updateVisible = (e: any) => {
    if (cursorPosition.top != 0 || cursorPosition.left != 0) setVisible(true);
  };
  return (
    <a
      className="hover:text-white hover:no-outline cursor-none"
      onMouseEnter={updateVisible}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={updateVisible}
    >
      {text}{" "}
      {visible ? (
        <div
          className="pointer-events-none z-30 absolute"
          style={{ ...cursorPosition }}
        >
          <div className="rounded-full absolute p-1 w-1 h-1 border-white border-2" />
          <div
            className={[
              "text-base break-normal max-w-96 mt-4 ml-4 block bg-black text-white border border-white " +
                "p-4 relative before:absolute before:top-[0.3em] before:left-[0.3em] before:w-full " +
                "before:h-full before:bg-white before:z-[-1]",
            ].join()}
          >
            {msg}
          </div>
        </div>
      ) : (
        ""
      )}
    </a>
  );
}

function Description() {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const onMouseMove = (e: any) =>
    setCursorPosition({ top: e.pageY, left: e.pageX });
  return (
    <div
      className={`text-black font-outline-1 text-5xl mt-16 break-all${
        blinking ? "" : " hidden"
      }`}
      onMouseMove={onMouseMove}
    >
      <Descriptor
        text="software developer"
        msg={[
          "I have worked on several medium-scale software projects, both academic and personal. " +
            "Some examples include a functional-style interpreter in OCaml, the game ",
          <i key="ignored">Phytopolis</i>,
          ", and a procedural terrain generator in libGDX.",
        ]}
        cursorPosition={cursorPosition}
      />
      <Descriptor
        text="college student"
        msg={[
          "I'm a rising junior at Cornell University in Ithaca, NY, a place that has " +
            "pushed me to grow intellectually and personally far beyond my dreams.",
        ]}
        cursorPosition={cursorPosition}
      />
      <Descriptor
        text="theory enthusiast"
        msg={[
          "As a mathematics and computer science major, " +
            "all the topics surrounding CS theory fascinate me, especially formal " +
            "programming language theory.",
        ]}
        cursorPosition={cursorPosition}
      />
      <Descriptor
        text="amateur photographer"
        msg={[
          "I like taking pictures of the world around me. Most of my pictures are " +
            "taken on a Nikon D5500, and I recently got a hold of a Kodak film camera " +
            "that I will be trying out soon.",
        ]}
        cursorPosition={cursorPosition}
      />
      <Descriptor
        text="uwcer"
        msg={[
          "From 2020 to 2022 I attended UWC Red Cross Nordic, a school on a fjord. " +
            "This beautiful two-year experience shaped who I am today, and armed me with " +
            "a burning desire to explore the world.",
        ]}
        cursorPosition={cursorPosition}
      />
      <Descriptor
        text="hiker canoeist xc skier"
        msg={
          "I love spending time in nature, and I've had the chance to experience some of the " +
          "most striking natural landscapes in northern Spain, the Alps, western Norway, and upstate New York."
        }
        cursorPosition={cursorPosition}
      />
      <Descriptor
        text="debater"
        msg={[
          "I've done academic debate for almost two years, and it has " +
            "allowed me to travel the world while developing key dialectical skills.",
        ]}
        cursorPosition={cursorPosition}
      />
      <Descriptor
        text="philosophy reader"
        msg={[
          "I began reading philosophy five years ago, and I've since spent countless hours " +
            "trapped between the pages of Fromm, Camus, Kant, and Nietzsche.",
        ]}
        cursorPosition={cursorPosition}
      />
    </div>
  );
}

function Top() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (index == name.length - 1) {
      blinking = true;
      done = true;
    }
    if (index == name.length) {
      delay = 500;
    }
    if (index == name.length + 1) {
      setIndex(name.length - 1);
      return;
    }
    setTimeout(() => {
      setIndex(index + 1);
    }, delay);
  }, [index]);

  const [photo, setPhoto] = useState(randInt(1, 84));
  useEffect(() => {
    if (blinking && !locked) {
      locked = true;
      setTimeout(() => {
        locked = false;
        setPhoto(randInt(1, 84));
      }, photoDelay);
    }
  }, [index]);

  return (
    <div className="flex flex-wrap size-full sm:min-h-screen flex-row font-sans text-9xl items-start">
      <div
        className="bg-black xl:basis-5/12 max-xl:lg:basis-1/2 max-lg:md:basis-4/6 basis-full size-full min-h-screen p-4"
        style={{ minWidth: "32rem" }}
      >
        <p className="text-white">
          <a
            className="hover:text-black hover:font-outline-2"
            href=""
            style={{ whiteSpace: "break-spaces" }}
          >
            {name.slice(0, index)}
            {done ? "" : "_"}
          </a>
        </p>
        <Description />
      </div>
      <div className="xl:basis-7/12 max-xl:lg:basis-1/2 max-lg:md:basis-2/6 basis-full overflow-clip mt-0 sm:h-screen">
        <img
          className="size-full object-cover mt-0"
          src={`/images/gallery/${photo}.jpg`}
        ></img>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
      <Top />
    </main>
  );
}
