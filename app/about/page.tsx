"use client";
import { useState } from "react";
import { Paragraph } from "../paragraph";
import { randInt } from "../randInt";

function Link({ children, href, newpage }: any) {
  return (
    <a
      className="underline hover:bg-white hover:text-black transition-all"
      href={href}
      target={newpage ? "_blank" : ""}
    >
      {children}
      {newpage && " ↗"}
    </a>
  );
}

export default function Home() {
  const [photo, setPhoto] = useState(randInt(0, 5));
  return (
    <>
      <div className="w-full h-36">
        <img
          className="size-full object-cover mt-0"
          src={`/images/gallery/${[23, 26, 36, 37, 72, 93][photo]}.webp`}
        ></img>
      </div>
      <div className="font-sans pt-12 pb-12 lg:flex lg:items-start">
        <Paragraph title="fjords, cities, mountains" left={true}>
          <p className="mb-5">
            When people ask me about my favourite memory, many things come to my
            mind. I recall staring into the fjord that hosted me during the two
            most critical years of my life, listening to the subtle drumming of
            raindrops on the surface of the water; I also recall lying on thick
            snow, looking at early Norwegian sunsets surrounded by friends.
          </p>
          <p className="mb-5">
            I had the privilege to spend two years of my life in one of the most{" "}
            <Link href="photos/norway">vibrant</Link> places I will ever see:{" "}
            <Link href="https://uwcrcn.no" newpage>
              UWC Red Cross Nordic
            </Link>
            , a school on a fjord, with two hundred students from ninety
            different countries. It was the place where I became who I am today,
            and it made me fall in love with diversity, with culture, with
            perspectives so far from my own that they made me question my own
            reality.
          </p>
          <p className="mb-5">
            I am originally from Madrid, Spain, where my wonderful family and
            friends raised me as an ever-curious inquirer, instilling in me a
            love of learning and discovering challenges. For me, Madrid is a
            beautiful classic city that brings me peace and makes me feel at
            home.
          </p>
        </Paragraph>
        <Paragraph title="across the atlantic" left={true}>
          <p className="mb-5">
            After my time in Norway, I decided to continue my academic journey
            in two fields I love: Computer Science and Mathematics. There is
            something about proving a theorem in abstract algebra, or building a
            complex application that finally passes the test cases, that I find
            so exhilarating. I was admitted to{" "}
            <Link href="https://cornell.edu" newpage>
              Cornell University
            </Link>{" "}
            under the Davis UWC Scholarship Program, and I&apos;ve had the
            pleasure to expand my academic and personal perspectives at the
            College of Arts and Sciences during the past two years.
          </p>
          <p className="mb-5">
            Cornell has a charmingly graceful campus, spanning hills, gorges,
            forests, fields, botanical gardens and stunning outlooks, as well as
            countless historical classroom halls, libraries, and museums. It is
            a place with its own soul, with a community of students dedicated to
            all kinds of academic disciplines.
          </p>
          <p className="mb-5">
            And for me, as a prospective computer scientist and mathematician,
            Cornell offers an impressively qualified and renowned faculty,
            always willing to push my own boundaries while providing me with all
            the resources I need to succeed. On this campus, I have had some of
            the most critical academic experiences in my life, and I hope that
            Cornell continues to push me forward as I keep on pursuing my
            passion for learning.
          </p>
        </Paragraph>
      </div>
    </>
  );
}
