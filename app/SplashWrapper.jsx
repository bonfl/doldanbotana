"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setHideSplash(true), 600); // espera a que termine fade
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!hideSplash && (
        <div
          className={`fixed inset-0 z-[999] flex items-center justify-center bg-[#0F2A20]
          transition-opacity duration-700 ${
            loading ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 animate-fade-in">
            <Image src="/logosplash.png" alt="Doldan Botana" width={90} height={90} />
            <p className="text-[#D4AF37] tracking-[0.25em] text-sm">
              DOLDAN BOTANA
            </p>
          </div>
        </div>
      )}

      <div
        className={`min-h-screen bg-[#0F2A20] transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}