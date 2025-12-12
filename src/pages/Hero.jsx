import PinkButton from "../components/PinkButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-pink-100 to-pink-200 relative overflow-hidden">

      {/* Soft floating shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-pink-300/40 rounded-full blur-3xl"></div>

      <div className="max-w-3xl text-center relative z-10">
        <h1 className="font-serif text-5xl text-pink-600 mb-6">
          Find Your Perfect Fit, Beautiful
        </h1>

        <p className="text-purple-400 text-lg mb-10">
          Custom-crafted bras made just for your comfort, shape, and confidence.
          Explore our feminine designs and discover the touch of luxury you deserve.
        </p>

        <PinkButton>Start Your Fit Journey</PinkButton>
      </div>
    </section>
  );
}
