import Image from "next/image";
import TopNavBar from "./components/topNavBar";
import TiltedCard from "./components/ui/titledCard";

export default function Home() {
  return (
      <main className="z-0">
        <TopNavBar />
        {/* Hero Background Video */}
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          src="/video/hero-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-black/50 -z-10" />

        {/* Hero Section */}
        <section className="flex flex-col h-dvh w-full justify-center items-center text-white">
          <h1 className="font-bold text-8xl">SkyGround</h1>
          <h3 className="text-4xl">VIDEOS</h3>
        </section>
        
        {/* Our Services */}
        <section id="services" className="flex flex-col justify-center bg-linear-to-b from-black to-stone-950 text-white h-dvh">
          <h2 className="flex font-black text-6xl justify-center p-6 py-12">Our Services</h2>
          <div className="flex flex-row flex-wrap gap-12 p-8">
            <TiltedCard
              imageSrc="./shoe1.png"
              altText="Shoe 1"
              captionText="Drone Home Survey"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="">
                  Drone Home Survey
                </p>
              }
            />
            <TiltedCard
              imageSrc="./shoe2.png"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Wedding Photography"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Wedding Photography
                </p>
              }
            />
            <TiltedCard
              imageSrc="./shoe3.png"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Visual Drone Videos"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Visual Drone Videos
                </p>
              }
            />
            <TiltedCard
              imageSrc="./shoe4.png"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="More photography"
              containerHeight="400px"
              containerWidth="400px"
              imageHeight="400px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  More photography
                </p>
              }
            />
          </div>
          
        </section>

         {/* FAQ */}
        <section>

        </section>

         {/* Gallery */}
        <section>

        </section>


         {/* Meet The Team */}
        <section>

        </section>

         {/* Contact Us */}
        <section>

        </section>




      </main>
  );
}
