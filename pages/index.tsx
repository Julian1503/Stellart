import Head from "next/head";
import Navbar from "@/components/organisms/navbar/Navbar";
import localFont from "@next/font/local";
import { NavLink } from "@/constants/types";

const tTHovesPro = localFont({
  src: "../public/fonts/TTHovesPro/TT Hoves Pro Trial Regular.ttf",
  weight: "400",
  display: "swap",
  variable: "--tthoves",
});

const links : Array<NavLink> = [
  {
    id: 1, 
    link: "/Artwork",
    text: "ARTWORK"
  },
  {
    id:2,
    link: "/Artists",
    text: "ARTIST"
  },
  {
    id:3,
    link: "/Expositions",
    text: "EXPOSITIONS"
  }
];

export default function Home() {
  return (
    <main className={tTHovesPro.variable}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Create Next App</title>
      </Head>
      <Navbar links={links} iconSrc={"/images/stellart.svg"}/>
    </main>
  );
}
