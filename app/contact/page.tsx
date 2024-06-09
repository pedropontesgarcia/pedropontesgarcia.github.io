import { Paragraph } from "../paragraph";

export default function Home() {
  return (
    <div className="font-sans">
      <Paragraph title="e-mail">
        <a href="mailto:pedropontesgr@gmail.com" className="hover:underline">
          pedropontesgr@gmail.com
        </a>{" "}
        /{" "}
        <a href="mailto:pp457@cornell.edu" className="hover:underline">
          pp457@cornell.edu
        </a>
      </Paragraph>
    </div>
  );
}
