"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 gap-8 text-center font-[var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Hello!! Need any Legal Help?</h1>
      <p className="text-lg text-gray-600">We are here to assist you with professional legal services.</p>
      
      <Button
        color="secondary"
        variant="solid"
        size="lg"
        onPress={() => router.push("/services")} // ✅ Wrapped in an arrow function
      className="cursor-pointer border-rounded border-red-500 "
       
      >
        Please Visit our Services
      </Button>
    </div>
  );
}
