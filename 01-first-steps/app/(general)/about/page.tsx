import type { Metadata } from "next"; // Agregarle importacion --> type


export const metadata: Metadata = {
  title: "About Page",
  description: "Information about us",
  keywords: ["About Page", "Lucas", "Info", "..."],
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-2">
      <span className="text-5xl"> - About Page - </span>
    </main>
  )
}
