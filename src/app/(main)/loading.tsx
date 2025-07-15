import LoadingSpinner from "@/components/common/LoadingSpinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-gray-50 p-6 rounded-lg shadow-md text-center">
      <LoadingSpinner size="lg" />
      <p className="text-xl text-gray-700 mt-4">
        Sayfa yükleniyor, lütfen bekleyin...
      </p>
    </div>
  );
}
