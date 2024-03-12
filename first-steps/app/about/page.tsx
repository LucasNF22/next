import type { Metadata } from "next"; // Agregarle importacion --> type



export const metadata: Metadata = {
 title: 'About Page',
 description: 'Information about us',
 keywords: ['About Page', 'Lucas', 'Info', '...']
};



export default function AboutPage(){
    return (
        <>
        <span>About Page</span>
        </>
    )
}