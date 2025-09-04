import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Coconut Shell Exporter | PT. Princess Jaya Abadi Indonesia",
    description:
        "PT. Princess Jaya Abadi is an Indonesian exporter of premium coconut shell products: raw coconut shell, carbonized coconut shell, and granulated/crushed shell. Consistent quality, sustainable sourcing, and trusted global logistics from Indonesia.",
    keywords: [
        "coconut shell exporter",
        "coconut shell supplier Indonesia",
        "raw coconut shell bulk",
        "carbonized coconut shell",
        "coconut shell charcoal",
        "activated carbon precursor",
        "granulated coconut shell",
        "crushed coconut shell",
        "abrasive coconut shell media",
        "filtration coconut shell",
        "composite filler coconut shell",
        "export coconut shell Asia",
        "import coconut shell",
        "Lampung coconut shell exporter",
        "Indonesia coconut byproduct export",
        "bulk coconut shell jumbo bag",
        "trusted coconut shell manufacturer",
        "coconut shell logistics"
    ],
    metadataBase: new URL("https://princessjayaabadi.com"),
    alternates: {
        canonical: "/",
        languages: {
            en: "/en",
            id: "/id"
        }
    },
    openGraph: {
        title: "Premium Coconut Shell & Derivatives | PT. Princess Jaya Abadi",
        description:
            "Export-quality coconut shell from Indonesia: raw shells, carbonized shells, and crushed/granulated shell. Sustainable sourcing, consistent specs, and reliable global shipping.",
        url: "https://princessjayaabadi.com",
        siteName: "Princess Jaya Abadi",
        images: [
            {
                url: "/og-thumbnail.jpg",
                width: 1200,
                height: 630,
                alt: "PT. Princess Jaya Abadi — Coconut Shell Exporter"
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Buy Premium Coconut Shell from Indonesia | Princess Jaya Abadi",
        description:
            "Your trusted partner for raw coconut shell, carbonized shell, and crushed/granulated shell. Verified quality and export-ready packaging.",
        images: ["/og-thumbnail.jpg"]
    }
};

export default async function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
