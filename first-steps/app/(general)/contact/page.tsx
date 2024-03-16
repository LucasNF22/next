import type { Metadata } from "next"; // Agregarle importacion --> type


export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Contact us here',
};

export default function ContactPage() {
    return (
      <main className="flex flex-col items-center p-2">
        <span className="text-5xl"> - Contact Page - </span>
      </main>
    );
  }
  