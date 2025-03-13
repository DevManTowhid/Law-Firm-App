"use client";

import { Button } from "@nextui-org/react";

export default function Banner() {
  return (
    <div className="relative w-full h-[200px] p-4 flex items-center justify-center bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-900">
      {/* Dark overlay to enhance text contrast */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Centered content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="sm:text-5xl font-bold text-white mt-4 mb-4">
          Excellence in Legal Services
        </h1>
        <p className="text-xl sm:text-xl text-gray-200 mb-8">
          Your trusted partner for professional and compassionate legal counsel.
        </p>
        
      </div>
    </div>
  );
}
