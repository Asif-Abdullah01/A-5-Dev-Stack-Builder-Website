
function LoadingSpinner() {
  return (
    <div
      className="flex min-h-[250px] flex-col items-center justify-center gap-4"
      role="status"
      aria-live="polite"
    >
      {/* Loading Spinner */}
      <span className="loading loading-spinner loading-lg text-pink-500"></span>

      {/* Loading Text */}
      <p className="text-sm font-medium text-gray-500">
        Loading technologies...
      </p>
    </div>
  );
}

export default LoadingSpinner;
