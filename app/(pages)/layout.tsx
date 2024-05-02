// import type { Metadata } from "next";

import Header from '@/components/Header';
import { ClerkProvider } from '@clerk/nextjs'



export async function generateMetadata() {
  return {
      title: `Nextjs14.2 with Clerk Auth`,
      description: "Nextjs14.2 with Clerk Auth",
      url: `/`,
      authors: [
        { name: 'Amit Upadhyay', url: 'https://github.com/AmitUpadhyay878' }
      ],
      creator: 'Amit Upadhyay',
      publisher: 'Amit Upadhyay',
      referrer: 'origin-when-cross-origin',
      keywords: ['SecretKey', 'LMS', 'SecretKeyWeb'],
      openGraph: {
          title: `Nextjs14.2 with Clerk Auth`,
          description:"Nextjs14.2 with Clerk Auth",
          images: [`${process.env.NEXT_PUBLIC_OG_PURPOSE}/images/homepageOG.png`
              // ,...previousImages
          ]
      },
      alternates: {
          canonical: `/`,
          languages: {
            'en-US': '/en-US',
            'it-IT': '/it-IT',
          },
        },
      robots: {
          index: false,
          follow: true,
          nocache: true,
          googleBot: {
              index: true,
              follow: false,
              noimageindex: true,
              'max-video-preview': -1,
              'max-image-preview': 'large',
              'max-snippet': -1
          }
      }
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
        <Header />
        {children}
    </ClerkProvider>
  );
}
