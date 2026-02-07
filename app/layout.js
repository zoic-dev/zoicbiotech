// app/layout.js
import "./globals.css";
import "./fonts.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Zoic Biotech Pvt. Ltd. | Leading Pharma & Nutraceutical Manufacturer in India",
  description:
    "Zoic Biotech is a trusted PCD pharma company and third-party manufacturer offering premium pharmaceutical and nutraceutical products with WHO-GMP certified facilities, custom formulations, private labeling, and nationwide PCD franchise opportunities.",
  keywords:
    "Zoic Biotech, pharma manufacturer India, nutraceutical manufacturer India, third party pharma manufacturing, contract manufacturing pharma, PCD pharma company, PCD franchise India, private label nutraceuticals, pharma OEM services, custom formulation pharma, WHO GMP certified manufacturer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        {/* <meta
          name="google-site-verification"
          content="XQjp9mCqpTlpym58nSH8t69Ojq941EU7Mmnyao0yGY8"
        /> */}

        {/* ✅ GTM Head Script */}
        {/* <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KFLF6HDG');
          `}
        </Script> */}

        {/* ✅ Google Analytics */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q7YBJZQ12S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q7YBJZQ12S');
          `}
        </Script> */}
      </head>
      <body>
        {/* ✅ GTM Body Noscript */}
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFLF6HDG"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript> */}

        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Whatsapp Button */}
        <WhatsAppButton />

        {/* ✅ Tawk.to Script */}
        {/* <Script id="tawk-to" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/690c45e3376b78195d9d1b92/1j9bv20h6';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script> */}
      </body>
    </html>
  );
}
