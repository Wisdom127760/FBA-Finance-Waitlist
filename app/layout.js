import "@styles/globals.css";
import Nav from "@components/NavBar";
import Provider from "@components/Provider";
import Footer from "@components/Footer/FooterComponent";
import ScrollButton from "@components/ScrollButton";
import ScrollEffect from "@components/ScrollEffect";
import Script from "next/script";

// Import client-side scroll behavior

export const metadata = {
  title: "FBA Finance | Revolutionizing Capital Access for African SMEs",
  description:
    "FBA Finance is a fintech startup providing blockchain-based funding solutions for SMEs and startups through innovative ROSCA models on the Stellar network.",
  keywords:
    "FBA Finance, SME funding options, Blockchain financing for startups, ROSCA for business, Peer-to-peer business loans, Fintech solutions for small businesses, Community-based business funding, Stellar network business applications, Alternative financing for SMEs, Decentralized finance for small business, Innovative SME credit solutions, ROSCA, SME funding, Stellar network, fintech, startup funding",
  openGraph: {
    title: "FBA Finance | Revolutionizing Capital Access for SMEs",
    description:
      "FBA Finance is a fintech startup providing blockchain-based funding solutions for SMEs and startups through innovative ROSCA models on the Stellar network.",
    url: "https://www.fba.finance",
    siteName: "FBA Finance",
    images: [
      {
        src: "https://www.fba.finance/assets/images/logo_fba.svg", // Full URL for the image src
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "FBA Finance",
              description:
                "A fintech startup revolutionizing capital access for SMEs and startups through blockchain-based ROSCA models.",
              url: "https://www.fba.finance",
              foundingDate: "2024",
              founders: [
                {
                  "@type": "Person",
                  name: "Wisdom Agunta",
                },
                {
                  "@type": "Person",
                  name: "Ochie Ojie",
                },
                {
                  "@type": "Person",
                  name: "Fanelly Manyahu",
                },
              ],
              knowsAbout: [
                "Blockchain",
                "ROSCA",
                "SME Funding",
                "Stellar Network",
                "Creditworthiness for African SMEs",
                "Community-driven funding for SMEs",
              ],
            }),
          }}
        />
        <Script type="text/javascript" id="microsoft_clarity">
          {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nxkvhq5o0t");`}
        </Script>
      </head>
      <body>
        <Provider>
          <ScrollEffect /> {/* Scroll behavior in a client-side component */}
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
            <Footer />
          </main>
        </Provider>
        <ScrollButton />{" "}
        {/* This can remain here, but ensure it is a client component */}
      </body>
    </html>
  );
};

export default RootLayout;
