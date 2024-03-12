import type { Metadata } from "next"; // Agregarle importacion --> type



export const metadata: Metadata = {
 title: 'Princing Page',
 description: 'Here you are going to find our princings tags',
};

export default function PricingPage() {
    return (
      <main className="flex flex-col items-center p-24">
        <span className="text-5xl"> - Pricing Page - </span>
        { 1 + 1 }
        
      </main>
    );
  }
  