import { useRef, useState, useLayoutEffect, useEffect } from 'react';
import CTABanner from '../components/CTABanner';
import HubLogo from '../assets/hub.jpg';
import VeteranLogo from '../assets/veteran.jpg';
import EdShieldLogo from '../assets/69DD6DCE-7F58-4D2E-9789-50D5181B8B9D.jpeg';

interface HomePageProps {
  navigateTo: (page: string) => void; // Function to navigate to different pages
}

export default function HomePage({ navigateTo }: HomePageProps) {
  // References for triangle and veteran logos for sizing calculation
  const triangleRef = useRef<HTMLDivElement | null>(null);
  const veteranRef = useRef<HTMLDivElement | null>(null);

  // State for dynamic logo size
  const [logoSize, setLogoSize] = useState(80);

  // AUTO-RESIZE LOGOS BASED ON TRIANGLE SHAPE
  useLayoutEffect(() => {
    function updateSize() {
      if (!triangleRef.current || !veteranRef.current) return;

      // Get positions of triangle and veteran logo
      const triangle = triangleRef.current.getBoundingClientRect();
      const veteran = veteranRef.current.getBoundingClientRect();

      // Calculate relative position of veteran logo inside triangle
      const vetRightX = veteran.right - triangle.left;
      const xPct = vetRightX / triangle.width;

      // Height of white space at that X position
      const whiteHeightAtX = triangle.height * (1 - xPct);

      // Slightly bigger logos (20%) but not exceeding triangle height
      let size = Math.max(20, Math.floor(whiteHeightAtX - 2));
      size = Math.min(size * 1.2, whiteHeightAtX - 2);

      // Update state
      setLogoSize(size);
    }

    // Run once initially
    requestAnimationFrame(updateSize);

    // Update on window resize
    window.addEventListener('resize', updateSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Re-run size calculation after images load
  useEffect(() => {
    const imgs = document.querySelectorAll('img');
    imgs.forEach((img) =>
      img.addEventListener('load', () =>
        requestAnimationFrame(() => {
          if (triangleRef.current) window.dispatchEvent(new Event('resize'));
        })
      )
    );

    return () => {
      imgs.forEach((img) =>
        img.removeEventListener('load', () => {})
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 overflow-hidden"
      >

        {/* MAIN LAYOUT WRAPPER */}
        <div
          className="relative z-10 w-full max-w-[1600px] flex flex-col justify-center"
          style={{
            paddingTop: 'clamp(6rem, 8vh + 2vw, 10rem)',   // More top padding for phones
            paddingBottom: 'clamp(6rem, 12vh, 14rem)',
            paddingLeft: 'clamp(1rem, 3vw, 4rem)',
            paddingRight: 'clamp(1rem, 3vw, 4rem)',
          }}
        >

          {/* 2-COLUMN RESPONSIVE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,4vw,5rem)] items-center">

            {/* LEFT SIDE: TEXT */}
            <div className="text-white flex flex-col items-center text-center space-y-[clamp(1rem,2vw,3rem)] w-full">

              {/* HERO HEADING */}
              <h1
                className="font-bold w-full leading-snug"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  lineHeight: '1.15'
                }}
              >
                Hello, Welcome to ShieldED Haven
              </h1>

              {/* HERO PARAGRAPH */}
              <p
                className="text-cyan-50 leading-relaxed w-full"
                style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.8rem)',
                  maxWidth: 'clamp(300px, 90%, 700px)'
                }}
              >
                Protecting students with Artificial Intelligence-powered cyberbullying prevention
              </p>

              {/* CTA BUTTON */}
              <button
                onClick={() => navigateTo('about')}
                className="bg-white text-cyan-500 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase tracking-wide"
                style={{
                  padding: 'clamp(0.7rem, 1.5vw, 1.3rem) clamp(2rem, 4vw, 4rem)',
                  fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
                  marginBottom: 'clamp(1rem, 4vw, 3rem)' // extra bottom space for phone landscape
                }}
              >
                Learn More
              </button>
            </div>

            {/* RIGHT SIDE: ED SHIELD IMAGE */}
            <div className="flex items-center justify-center w-full" style={{ maxHeight: '60vh' }}>
              <img
                src={EdShieldLogo}
                alt="ED Shield Logo"
                className="object-contain drop-shadow-2xl w-full max-w-[850px]"
                style={{
                  height: 'auto',
                  maxHeight: 'clamp(150px, 35vh + 10vw, 700px)',
                }}
              />
            </div>

          </div>
        </div>

        {/* BOTTOM TRIANGLE WITH HUB AND VETERAN LOGOS */}
        <div
          ref={triangleRef}
          className="absolute bottom-0 w-full bg-white z-20 overflow-hidden"
          style={{
            height: 'clamp(140px, 16vw, 320px)',
            clipPath: 'polygon(0 100%, 0 0, 100% 100%)'
          }}
        >
          <div className="flex h-full items-end pb-[0px] pl-[clamp(1rem,3vw,4rem)]">
            <div className="flex items-center gap-[clamp(1rem,3vw,4rem)]">

              {/* HUB LOGO */}
              <div
                style={{ width: logoSize, height: logoSize }}
                className="flex items-center justify-center"
              >
                <img src={HubLogo} className="object-contain w-full h-full" />
              </div>

              {/* VETERAN LOGO */}
              <div
                ref={veteranRef}
                style={{ width: logoSize, height: logoSize }}
                className="flex items-center justify-center"
              >
                <img src={VeteranLogo} className="object-contain w-full h-full" />
              </div>

            </div>
          </div>
        </div>

      </section>

      {/* CTA BANNER AT BOTTOM */}
      <CTABanner />
    </div>
  );
}
