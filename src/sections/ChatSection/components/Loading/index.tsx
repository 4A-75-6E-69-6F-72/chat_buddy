// components/LoadingDots.tsx
export default function Loading() {
  return (
    <div className="flex items-center justify-start space-x-2 p-4">
      <span className="w-[0.4rem] h-[0.4rem] bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
      <span className="w-[0.4rem] h-[0.4rem] bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
      <span className="w-[0.4rem] h-[0.4rem] bg-gray-500 rounded-full animate-bounce"></span>
    </div>
  );
}
