export function SoftCard({ children }) {
  return (
    <div className="backdrop-blur-md bg-blush-50/60 border border-blush-200 rounded-soft shadow-soft p-6">
      {children}
    </div>
  );
}
