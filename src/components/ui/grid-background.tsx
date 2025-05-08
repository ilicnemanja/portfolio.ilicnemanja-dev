import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[linear-gradient(90deg,rgba(131,58,180,1)_0%,rgba(253,29,29,1)_50%,rgba(252,176,69,1)_100%)]">
      {/* Grid overlay */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)]"
        )}
      />

      {/* Radial mask for soft center focus */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Foreground content */}
      <div className="relative z-20 bg-gradient-to-b from-white to-neutral-200 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        {children}
      </div>
    </div>
  );
}
