import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={title:'Cinematic3D Estate | PropTech Experience',description:'Cinematic real-estate walkthrough powered by scroll-driven video and interactive property data.',metadataBase:new URL('http://localhost:3000')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi"><body className="bg-black text-white antialiased">{children}</body></html>}
