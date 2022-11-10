import Head from "next/head";
import HeroSection from "../components/ui/HeroSection";
import GetCozySection from "../components/ui/GetCozySection";
import OurClientSection from "../components/ui/OurClientSection";
import HappyClient from "../components/ui/HappyClient";
import JoinDesigner from "../components/ui/JoinDesigner";
import HelpSection from "../components/ui/HelpSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Cozy design clone created by Ngabonziza nestor" />
        <link rel="icon" href="/assets/logo-1.svg" />
      </Head>
      <div>
      <HeroSection/>
      <GetCozySection/>
      <OurClientSection/>
      <HappyClient/>
      <JoinDesigner/>
      <HelpSection/>

      </div>
    </div>
  );
}
