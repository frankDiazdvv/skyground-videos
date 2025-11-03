import Image from "next/image";
import TopNavBar from "./components/topNavBar";

export default function Home() {
  return (
      <main className="z-0">
        <TopNavBar />
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          src="/video/hero-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* Hero Section */}
        <section className="flex flex-col h-dvh w-full justify-center items-center text-white">
          <h1 className="font-bold text-8xl">SkyGround</h1>
          <h3 className="text-4xl">VIDEOS</h3>
        </section>


      </main>
  );
}
