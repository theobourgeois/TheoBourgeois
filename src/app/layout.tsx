import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://theobourgeois.com"),
    title: "Théo Bourgeois - Software Engineer in Halifax",
    description:
        "Experienced Software Engineer based in Halifax, Nova Scotia, specializing in React, TypeScript, and full-stack development. Building innovative web applications with modern technologies like Next.js, GraphQL, and cloud solutions.",

    keywords: [
        "Software Engineer",
        "Web Developer",
        "React Developer",
        "Halifax",
        "Nova Scotia",
        "TypeScript",
        "Full Stack Developer",
        "Next.js Developer",
        "Cloud Computing",
        "GraphQL",
    ].join(", "),

    authors: [{ name: "Théo Bourgeois" }],

    generator: "Next.js",

    applicationName: "Théo Bourgeois Portfolio",

    referrer: "origin-when-cross-origin",

    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#ffffff" },
    ],

    openGraph: {
        type: "website",
        locale: "en_CA",
        url: "https://theobourgeois.com",
        title: "Théo Bourgeois - Software Engineer",
        description:
            "Halifax-based Software Engineer specializing in modern web development. View my portfolio of innovative projects and professional experience.",
        siteName: "Théo Bourgeois Portfolio",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Théo Bourgeois - Software Engineer Portfolio",
            },
        ],
    },

    // Twitter metadata
    twitter: {
        card: "summary_large_image",
        title: "Théo Bourgeois - Software Engineer",
        description:
            "Software Engineer building innovative web solutions in Halifax, NS",
        creator: "@_theobourgeois",
        images: ["/twitter-image.png"], // Add your Twitter card image
    },

    // Icons
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
        other: [
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                url: "/favicon-32x32.png",
            },
        ],
    },

    // Robots directives
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Verification for search console
    verification: {
        google: "your-google-site-verification", // Add your Google verification code
        //yandex: "yandex-verification",
        //yahoo: "yahoo-verification",
    },

    // Alternate languages/versions if you have them
    alternates: {
        canonical: "https://theobourgeois.com",
        languages: {
            "en-US": "https://theobourgeois.com/en-US",
            "fr-CA": "https://theobourgeois.com/fr-CA",
        },
    },

    // Additional metadata
    category: "technology",

    // For apps/PWA
    manifest: "/manifest.json",

    // Viewport
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
