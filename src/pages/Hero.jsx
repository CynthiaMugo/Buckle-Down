import PinkButton from "../components/PinkButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-pink-100 to-rose-100 relative overflow-hidden">

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-pink-200/40 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-300/40 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="max-w-3xl text-center relative z-10 animate-fadeIn">
        <h1 className="font-serif text-5xl md:text-6xl text-pink-700 mb-6 leading-tight drop-shadow-sm">
          Find Your Perfect Fit,<br/> Beautiful
        </h1>

        <p className="text-purple-400 text-lg md:text-xl mb-10 leading-relaxed">
          Handcrafted custom bras designed just for your shape, comfort, and elegance.  
          Discover intimate luxury made uniquely for you.
        </p>

        <PinkButton>Start Your Fit Journey</PinkButton>
      </div>
    </section>
  );
}
