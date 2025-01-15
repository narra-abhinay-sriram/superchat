import LandingPage_Footer from "../LandingPage_components/LandingPage_Footer";
import LandingPage_Header from "../LandingPage_components/LandingPage_Header";
import LandingPage_MainContainer from "../LandingPage_components/LandingPage_MainContainer";
import { Helmet } from 'react-helmet-async';

export default function LandingPage() {
  // SEO constants
  const SITE_NAME = "Superchat";
  const PAGE_TITLE = "Welcome to Superchat - The Ultimate Chat Platform";
  const PAGE_DESCRIPTION = "Experience seamless communication with Superchat's powerful features. Connect instantly, share easily, and chat securely with our next-generation messaging platform.";
  const CANONICAL_URL = "https://superchat.in";

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={CANONICAL_URL} />
        
        {/* OpenGraph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={`${CANONICAL_URL}/superchat-preview.jpg`} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={`${CANONICAL_URL}/superchat-preview.jpg`} />
        
        {/* Additional Meta Tags */}
        <meta name="keywords" content="chat platform, messaging, communication, instant messaging, secure chat, real-time chat, superchat" />
        <meta name="application-name" content={SITE_NAME} />
        <meta name="author" content={SITE_NAME} />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": SITE_NAME,
            "description": PAGE_DESCRIPTION,
            "url": CANONICAL_URL,
            "applicationCategory": "CommunicationApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "featureList": [
              "Instant Messaging",
              "Secure Communication",
              "Real-time Chat",
              "File Sharing",
              "Cross-platform Support"
            ]
          })}
        </script>
      </Helmet>

      <div className="flex flex-col min-h-screen bg-slate-50">
        {/* Header and Main Content */}
        <div className="flex-grow">
          <header>
            <LandingPage_Header />
          </header>
          <main>
            <LandingPage_MainContainer />
          </main>
        </div>

        {/* Footer */}
        <footer>
          <LandingPage_Footer />
        </footer>
      </div>
    </>
  );
}