function Paragraph({ title, text }: any) {
  return (
    <div className="w-full text-center p-16 font-sans flex flex-col items-center justify-center">
      <p className="text-8xl">{title}</p>
      <p className="text-lg mt-4">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans">
      <Paragraph
        title="e-mail"
        text={
          <>
            <a
              href="mailto:pedropontesgr@gmail.com"
              className="hover:underline"
            >
              pedropontesgr@gmail.com
            </a>{" "}
            //{" "}
            <a href="mailto:pp457@cornell.edu" className="hover:underline">
              pp457@cornell.edu
            </a>
          </>
        }
      />
    </div>
  );
}
