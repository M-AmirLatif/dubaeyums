import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { BUSINESS_INFO } from "@/data/menuData";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b2e17",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Dubai Yums | 1 Meter Pizza & Fast Food Kasur — New Taste In Town",
  description:
    "Kasur's home of the famous 1 Meter Pizza! Handcrafted Regular & Special Pizzas, crispy Zingers, juicy Shawarma, loaded fries & super saver deals. Located Oppt. Bhullay Shah Darbar, Railway Road Kasur. Free Delivery on Rs 800+. Call 0311-4630057.",
  keywords: [
    "Dubai Yums",
    "Dubae Yums",
    "1 Meter Pizza Kasur",
    "Bhullay Shah Darbar Kasur restaurant",
    "Railway Road Kasur food",
    "Best Zinger burger Kasur",
    "Fast food Kasur delivery",
    "Late night food Kasur 3 AM",
    "Pizza delivery Kasur",
  ],
  authors: [{ name: "Dubai Yums" }],
  openGraph: {
    title: "Dubai Yums — New Taste In Town | 1 Meter Pizza Kasur",
    description:
      "Kasur's favorite late-night food spot on Railway Road, Oppt. Bhullay Shah Darbar. Open daily 12:00 PM to 3:00 AM. Free delivery over Rs 800. Phone: 0311-4630057.",
    url: "https://dubaiyums.pk",
    siteName: "Dubai Yums",
    images: [
      {
        url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Dubai Yums Signature 1 Meter Pizza & Fast Food",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Yums Kasur | 1 Meter Pizza 1st Time in Kasur",
    description: "Famous Pizzas, Burgers, Shawarma & Loaded Fries Oppt. Bhullay Shah Darbar, Kasur. Call 0311-4630057.",
    images: ["https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  "name": BUSINESS_INFO.name,
  "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80",
  "telephone": "+923114630057",
  "servesCuisine": ["Pizza", "Fast Food", "Burgers", "Shawarma", "1 Meter Pizza", "Pakistani Fast Food"],
  "priceRange": "PKR 60 - 3500",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Oppt. Bhullay Shah Darbar 1st Floor Punjab Mobile Railway Road",
    "addressLocality": "Kasur",
    "addressRegion": "Punjab",
    "addressCountry": "PK",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.1170",
    "longitude": "74.4480",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "12:00",
      "closes": "03:00",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "3.8",
    "reviewCount": "6",
  },
  "potentialAction": {
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `https://wa.me/${BUSINESS_INFO.whatsappNumber}`,
      "inLanguage": "en",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
    "deliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Kasur" />
        <meta name="geo.position" content="31.1170;74.4480" />
        <meta name="ICBM" content="31.1170, 74.4480" />
      </head>
      <body className="font-body selection:bg-brand-pink selection:text-white bg-brand-forest-dark text-brand-cream overflow-x-hidden min-h-screen">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
