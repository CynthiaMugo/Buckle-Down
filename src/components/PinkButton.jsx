export default function PinkButton({ children }) {
  return (
    <button className="px-6 py-3 rounded-xl bg-pink-400 text-white shadow-lg hover:bg-pink-500 transition-all duration-300">
      {children}
    </button>
  );
}
