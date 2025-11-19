export default function CTABanner() {
  return (
    <div className="bg-white">
      
      {/* Top Gradient Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-blue-600"></div>

      {/* Text */}
      <div className="text-center mt-6 pb-10">
        <h2
          className="text-2xl font-bold text-gray-900" // ✅ changed to bold
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          A Safer Tomorrow, Powered by One Platform Today.
        </h2>
      </div>

    </div>
  );
}
