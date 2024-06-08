"use client";

import { useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  useHover,
  safePolygon,
  useInteractions,
  FloatingFocusManager,
  useId,
} from "@floating-ui/react";

function Item({ text, url }: any) {
  var cls = "text-center w-full block p-4";
  if (url == undefined) cls += " cursor-default";
  console.log(url);
  return (
    <a href={url} className={cls}>
      \{text}
    </a>
  );
}

function Subitem({ text, url, download = false }: any) {
  var cls =
    "bg-black text-white p-4 border-t border-l border-r border-white hover:bg-white hover:text-black min-w-48 text-center block";
  if (download)
    return (
      <a href={url} className={cls} download target="_blank">
        {text}
      </a>
    );
  else
    return (
      <a href={url} className={cls}>
        {text}
      </a>
    );
}

function ItemLeft({ text, url, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(1)],
    placement: "top",
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    handleClose: safePolygon({
      requireIntent: false,
    }),
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  const headingId = useId();
  return (
    <>
      <li
        ref={refs.setReference}
        {...getReferenceProps()}
        className="min-w-48 border-white border-r hover:bg-white hover:text-black"
      >
        <Item text={text.toUpperCase()} url={url} />
      </li>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false} initialFocus={-1}>
          <div
            className="flex flex-col"
            ref={refs.setFloating}
            style={floatingStyles}
            aria-labelledby={headingId}
            {...getFloatingProps()}
          >
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}

function ItemRight({ text, url, first = false }: any) {
  return (
    <li
      className={`min-w-48 border-white border-l hover:bg-white hover:text-black ${
        first ? "ml-auto" : ""
      }`}
    >
      <Item text={text.toLowerCase()} url={url} />
    </li>
  );
}

export default function Nav() {
  return (
    <div className="fixed bottom-0 left-0 flex z-20 w-full bg-black border-t border-white justify-normal font-teachers">
      {" "}
      <ul className="flex flex-wrap items-center text-2xl text-white w-full">
        <ItemLeft text="home" url="/" />
        <ItemLeft text="resume" url={undefined}>
          <Subitem text="view online" url="/resume" />
          <Subitem
            text="download"
            url="/documents/resume.pdf"
            download={true}
          />
        </ItemLeft>
        <ItemLeft text="projects" url="/projects" />
        <ItemLeft text="photos" url={undefined}>
          <Subitem text="norway" url="/photos/norway" />
          <Subitem text="ny" url="/photos/ny" />
          <Subitem text="misc" url="/photos/misc" />
        </ItemLeft>
        <ItemRight text="about-me" url="/about" first={true} />
        <ItemRight text="contact" url="/contact" />
        {/* <li className="min-w-48 border-white border-r hover:bg-white hover:text-black">
          <a
            href="/resume"
            className="text-center w-full block p-4 max-sm:hidden"
          >
            \RESUME
          </a>
          <a
            href="/documents/resume.pdf"
            className="text-center w-full block p-4 sm:hidden"
          >
            \RESUME
          </a>
        </li> */}
      </ul>
    </div>
  );
}