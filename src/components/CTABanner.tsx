// Simple CTA banner with a top line and a centered message

export default function CTABanner() {
  return (
    <div className="bg-white">

      {/* Thin color line at the top */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>

      {/* Main text section */}
      <div className="text-center mt-6 pb-10">
        <h2
          className="text-2xl font-bold text-gray-900" // makes the text bigger + bold
          style={{ fontFamily: 'Poppins, sans-serif' }} // sets the font
        >
          A Safer Tomorrow, Powered by One Platform Today.
        </h2>
      </div>

    </div>
  );
}
