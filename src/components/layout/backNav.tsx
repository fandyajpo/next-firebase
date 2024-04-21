"use client";
import { useRouter } from "next/navigation";
const BackNav = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        type="button"
        className="bg-gray-100 px-4 py-2 rounded border"
      >
        Back
      </button>
    </div>
  );
};

export default BackNav;
