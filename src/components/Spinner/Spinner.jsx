export function Spinner() {
  return (
    <div className="flex items-center justify-center h-50">
      <svg
        className="animate-spin h-10 w-10 text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
      >
        <circle
          className="opacity-25"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="5"
          fill="none"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M25 5A20 20 0 015 25H0C0 11.193 11.193 0 25 0v5z"
        ></path>
      </svg>
    </div>
  );
}