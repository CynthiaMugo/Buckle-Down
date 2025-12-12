export default function PinkButton({ children }) {
  return (
    <button className="
      px-7 py-3 rounded-xl bg-pink-500 text-white font-semibold
      shadow-md hover:shadow-lg
      hover:bg-pink-600 transition-all duration-300
      relative overflow-hidden
    ">
      <span className="relative z-10">{children}</span>

      {/* Shimmer effect */}
      <span className="
        absolute inset-0 bg-white/20 
        opacity-0 hover:opacity-100
        transition-opacity duration-500
        blur-lg
      "></span>
    </button>
  );
}
