/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zoicbiotech.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.zoicbiotech.com", // allows cms., cdn., media., files., etc.
        pathname: "/wp-content/uploads/**",
      }
    ],
  },

  async redirects() {
    return [
      {
        source: "/third-party-manufacturing-of-ayurvedic-products",
        destination: "/third-party-manufacturing",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-goa",
        destination: "/blog/ayurvedic-pcd-company-in-goa",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-west-bengal",
        permanent: true
      },
      {
        source: "/rules-for-making-ayurvedic-medicine-in-hindi",
        destination: "/blog/rules-for-making-ayurvedic-medicine-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturer-in-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-assam",
        destination: "/blog/ayurvedic-pcd-company-in-assam",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/top-100-ayurvedic-companies-in-india-2022",
        destination: "/blog/top-100-ayurvedic-companies-in-india-2022",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-manufacturers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/ayurvedic-contract-manufacturing-company-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/license-to-sell-ayurvedic-medicine-in-hindi",
        destination: "/blog/license-to-sell-ayurvedic-medicine-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-business-opportunity-in-india-in-hindi",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india-in-hindi",
        permanent: true
      },
      {
        source: "/ayurvedic-medicine-distributors-in-india",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-jind",
        destination: "/blog/ayurvedic-pcd-company-in-jind",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/top-ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/how-to-start-ayurvedic-marketing-company",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/tulsi-drops-manufacturers-in-india",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/ayurvedic-pcd-company-in-puducherry",
        destination: "/blog/ayurvedic-pcd-company-in-puducherry",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-and-suppliers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-distributors-in-india/feed",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-medicine-manufacturer-from-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/pharma-franchise-company-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/immunity-boosters-manufacturing-in-india",
        destination: "/blog/immunity-booster-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-franchise-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-manufacturers-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-manufacturing-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-on-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/franchise/best-pharma-franchise-company-in-nashik",
        destination: "/blog/ayurvedic-pcd-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/hand-sanitizer-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/third-party-manufacturers-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-companies-in-cuttack",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-franchise-company-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-goa",
        destination: "/blog/ayurvedic-pcd-company-in-goa",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/in-pan-india",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-contract-manufacturers-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-third-party-manufacturing",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-franchise-pcd-companies-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/aloe-vera-gel-brands-in-india",
        destination: "/blog/aloe-vera-gel-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/aloe-vera-gel-producers-in-india",
        destination: "/blog/aloe-vera-gel-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvecic-pcd-company-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-franchise-in-nasik",
        destination: "/blog/ayurvedic-pcd-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-products-manufacturers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-products-manufacturers-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-business-prospects",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-franchise-pcd-companies-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-allahabad",
        destination: "/blog/ayurvedic-pcd-company-in-allahabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-arunachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-manipur",
        destination: "/blog/ayurvedic-pcd-company-in-manipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-nagaland",
        destination: "/blog/ayurvedic-pcd-company-in-nagaland",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-companies-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-franchise-in-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-goa",
        destination: "/blog/ayurvedic-pcd-company-in-goa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-company-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-contract-manufacturers-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-distributor-pcd-franchise-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-dehradun",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-gurgaon",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-jaipur",
        destination: "/blog/ayurvedic-pcd-company-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-manipur",
        destination: "/blog/ayurvedic-pcd-company-in-manipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-patiala",
        destination: "/blog/ayurvedic-pcd-company-in-patiala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-business-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-daman-diu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-india",
        destination: "/blog/category/ayurvedic-pcd-franchise/827",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-jaipur",
        destination: "/blog/ayurvedic-pcd-company-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-companies-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-puducherry",
        destination: "/blog/ayurvedic-pcd-company-in-puducherry",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-company-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-dehradun",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-gurgaon",
        destination: "/blog/ayurvedic-pcd-company-in-gurgaon",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-jaipur",
        destination: "/blog/ayurvedic-pcd-company-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-mangalore",
        destination: "/blog/ayurvedic-pcd-company-in-mangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-patiala",
        destination: "/blog/ayurvedic-pcd-company-in-patiala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-industry-on-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-manipur",
        destination: "/blog/ayurvedic-pcd-company-in-manipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-meghaaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-nagaland",
        destination: "/blog/ayurvedic-pcd-company-in-nagaland",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-opportunities-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-arunachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-nagaland",
        destination: "/blog/ayurvedic-pcd-company-in-nagaland",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-franchise-services-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-hand-sanitizer-companies-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-franchise-pcd-in-orissa",
        destination: "/blog/ayurvedic-pcd-company-in-orissa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-medicine-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-medicine-manufacturers-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-franchise-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-franchise-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-franchise-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-franchise-for-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-in-ranchi",
        destination: "/blog/ayurvedic-pcd-company-in-ranchi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-products-manufacturer-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-products-manufacturing-company-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-manufacturing-company-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-marketing-companies-in-india",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medical-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-business-opportunity-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-marketing-companies-in-india",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medical-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-business-opportunity-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-business-opportunity-in-india",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-distributors-franchise",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-distributors-in-delhi-ncr",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturer-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-suppliers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-paonta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-manufacturing-company-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-suppliers-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-wholesalers-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicine-wholesalers-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicines-products-distributors-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicines-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicines-manufacturers-suppliers-exporters",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-medicines-third-party-manufacturers-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-business-in-patiala",
        destination: "/blog/ayurvedic-pcd-company-in-patiala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-allahabad",
        destination: "/blog/ayurvedic-pcd-company-in-allahabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-assam",
        destination: "/blog/ayurvedic-pcd-company-in-assam",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-companies-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-chandigarh",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-company-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-frachise-in-bihar",
        destination: "/blog/ayurvedic-pcd-company-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-frachise-in-telangana",
        destination: "/blog/ayurvedic-pcd-company-in-telangana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-assam",
        destination: "/blog/ayurvedic-pcd-company-in-assam",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-delhi",
        destination: "/blog/ayurvedic-pcd-company-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-odisha",
        destination: "/blog/ayurvedic-pcd-company-in-orissa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-ranchi",
        destination: "/blog/ayurvedic-pcd-company-in-ranchi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-company-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-agra",
        destination: "/blog/ayurvedic-pcd-company-in-agra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-allahabad",
        destination: "/blog/ayurvedic-pcd-company-in-allahabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-arunachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-cuttack",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-dehradun",
        destination: "/blog/ayurvedic-pcd-company-in-dehradun",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-goa",
        destination: "/blog/ayurvedic-pcd-company-in-goa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-gurgaon",
        destination: "/blog/ayurvedic-pcd-company-in-gurgaon",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-jaipur",
        destination: "/blog/ayurvedic-pcd-company-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-jharkhand",
        destination: "/blog/ayurvedic-pcd-company-in-jharkhand",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-leh-ladakh",
        destination: "/blog/ayurvedic-pcd-company-in-leh-ladakh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-madurai",
        destination: "/blog/ayurvedic-pcd-company-in-madurai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-manipur",
        destination: "/blog/ayurvedic-pcd-company-in-manipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-meghalaya",
        destination: "/blog/ayurvedic-pcd-company-in-meghalaya",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-mizoram",
        destination: "/blog/ayurvedic-pcd-company-in-mizoram",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-moradabad",
        destination: "/blog/ayurvedic-pcd-company-in-moradabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-nagaland",
        destination: "/blog/ayurvedic-pcd-company-in-nagaland",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-nizamabad",
        destination: "/blog/ayurvedic-pcd-company-in-nizamabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-patiala",
        destination: "/blog/ayurvedic-pcd-company-in-patiala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-pune",
        destination: "/blog/ayurvedic-pcd-company-in-pune",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-rajkot",
        destination: "/blog/ayurvedic-pcd-company-in-rajkot",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-ranchi",
        destination: "/blog/ayurvedic-pcd-company-in-ranchi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-tripura",
        destination: "/blog/ayurvedic-pcd-company-in-tripura",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-uttar-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-uttar-pradesh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-vijayawada",
        destination: "/blog/ayurvedic-pcd-company-in-vijayawada",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-franchise-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-manufacturers-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-opportunities-in-ujjain",
        destination: "/blog/ayurvedic-pcd-company-in-ujjain",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-agra",
        destination: "/blog/ayurvedic-pcd-company-in-agra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-pune",
        destination: "/blog/ayurvedic-pcd-company-in-pune",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-companies-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-agra",
        destination: "/blog/ayurvedic-pcd-company-in-agra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-assam",
        destination: "/blog/ayurvedic-pcd-company-in-assam",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-karnataka",
        destination: "/franchise/ayurvedic-pcd-pharma-franchise-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-odisha",
        destination: "/blog/ayurvedic-pcd-company-in-orissa",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pcd-pharma-franchise-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-franchise-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-franchise-in-bhubaneswar-orissa",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-franchise-in-karnataka",
        destination: "/blog/ayurvedic-pcd-company-in-karnataka",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-franchise-pcd-in-kota",
        destination: "/blog/ayurvedic-pcd-company-in-kota",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-manufacturing-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-pharma-pcd-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-product-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-and-preparations-manufacturers-in-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-franchise-in-maharashtra",
        destination: "/blog/ayurvedic-pcd-company-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-franchise-in-west-bengal",
        destination: "/blog/ayurvedic-pcd-company-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturer-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturer-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturer-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-manufacturing-company-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-products-pcd-franchise-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturer-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturer-in-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturer-in-india",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturing-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-third-party-manufacturers-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/ayurvedic-herbal-pcd-pharma-franchise-in-udaipur",
        destination: "/blog/ayurvedic-pcd-company-in-udaipur",
        permanent: true
      },
      {
        source: "/franchise/best-100-ayurvedic-companies-in-india-2022",
        destination: "/blog/top-100-ayurvedic-companies-in-india-2022",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-companies-in-world",
        destination: "/blog/top-ayurvedic-companies-in-world",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-company-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-company-in-puducherry",
        destination: "/blog/ayurvedic-pcd-company-in-puducherry",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-franchise-company",
        destination: "/blog/category/ayurvedic-pcd-franchise/827",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-distributors-in-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-distributors-in-india",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-distributors-in-patna-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-and-suppliers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-medicine-wholesale-business-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-bhopal",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-companies-in-cuttack",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-companies-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-company-in-aurangabad",
        destination: "/blog/ayurvedic-pcd-company-in-aurangabad",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-company-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-company-in-ranchi",
        destination: "/blog/ayurvedic-pcd-company-in-ranchi",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pcd-franchise-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pharma-company-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-pharma-franchise-in-nashik",
        destination: "/blog/ayurvedic-pcd-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-products-manufacturing-company-in-bhopal",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/best-ayurvedic-vitamin-c-franchise-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-franchise-in-india",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-franchise-company-in-guwahati",
        destination: "/blog/ayurvedic-pcd-company-in-guwahati",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-pcd-franchise-company-in-agra",
        destination: "/blog/ayurvedic-pcd-company-in-agra",
        permanent: true
      },
      {
        source: "/franchise/best-herbal-pcd-franchise-company-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/best-pcd-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/franchise/best-pcd-franchise-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/best-pharma-franchise-company-in-nashik",
        destination: "/blog/franchise/best-pharma-franchise-company-in-nashik",
        permanent: true
      },
      {
        source: "/franchise/best-top-10-ayurvedic-pcd-franchise-in-rajasthan",
        destination: "/blog/ayurvedic-pcd-company-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/best-v",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/chandigarh-based-ayurvedic-pcd-company",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/chyawanprash-manufacturers",
        destination: "/blog/chawyanprash-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/chyawanprash-manufacturing-companies",
        destination: "/blog/chawyanprash-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/contract-manufacturers-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/contract-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/cough-syrup-brands-in-india",
        destination: "/blog/cough-syrup-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/cough-syrup-manufacturing-companies-in-india",
        destination: "/blog/cough-syrup-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/cough-syrup-producers-in-india",
        destination: "/blog/cough-syrup-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/derma-product-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/distributor-of-ayurvedic-medicines-in-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/hand-sanitizer-manufacturers-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/hand-sanitizer-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-medicine-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-amritsar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/franchise/herbal-and-ayurvedic-medicine-in-pune",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-medicine-manufacturer-from-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-pcd-franchise-in-arunachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-arunachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/herbal-ayurvedic-pcd-franchise-in-haryana",
        destination: "/blog/ayurvedic-pcd-company-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/herbal-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-franchise-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/herbal-hand-sanitizer-brands-in-india",
        destination: "/blog/ayurvedic-hand-sanitizer-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-business-opportunity",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-manufacturers-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-medicine-manufacturing-companies-in-india",
        destination: "/blog/ayurvedic-herbal-medicine-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-company-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-company-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-company-in-orissa",
        destination: "/blog/ayurvedic-pcd-company-in-orissa",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-company-in-tamil-nadu",
        destination: "/blog/ayurvedic-pcd-company-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-company-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-in-coimbatore",
        destination: "/blog/ayurvedic-pcd-company-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-in-daman-diu",
        destination: "/blog/ayurvedic-pcd-company-in-daman-diu",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-in-saharanpur",
        destination: "/blog/ayurvedic-pcd-company-in-saharanpur",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-franchise-opportunities-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-pharma-franchise-in-cuttack",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-pharma-franchise-in-jind",
        destination: "/blog/ayurvedic-pcd-company-in-jind",
        permanent: true
      },
      {
        source: "/franchise/herbal-pcd-pharma-in-gwalior",
        destination: "/blog/ayurvedic-pcd-company-in-gwalior",
        permanent: true
      },
      {
        source: "/franchise/herbal-pharma-franchise-pcd-in-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/franchise/herbal-product-business-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/herbal-products-exporters-manufacturers-suppliers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/herbal-third-party-manufacturing",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/how-to-start-ayurvedic-marketing-company",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/how-to-start-ayurvedic-pharmacy",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/how-to-start-ayurvedic-herbal-unani-company",
        destination: "/blog/how-to-start-ayurvedic-marketing-company",
        permanent: true
      },
      {
        source: "/franchise/immunity-booster-products-manufacturers-in-india",
        destination: "/blog/immunity-booster-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/immunity-boosters-manufacturing-companies-in-india",
        destination: "/blog/immunity-booster-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/immunity-boosters-manufacturing-in-india",
        destination: "/blog/immunity-booster-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/in-pan-india",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/leading-100-ayurvedic-companies-in-india-2022",
        destination: "/blog/top-100-ayurvedic-companies-in-india-2022",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-distributor-in-chennai",
        destination: "/blog/ayurvedic-medicine-distributors-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-distributors-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-companies-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-companies-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/leading-ayurvedic-product-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-franchise-in-india",
        permanent: true
      },
      {
        source: "/franchise/leading-herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/leading-herbal-companies",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-companies-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-companies-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-companies-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-companies-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-medicine-manufacturers-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-medicine-suppliers-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-medicine-suppliers-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/list-of-ayurvedic-pcd-companies-in-andhra-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/list-of-top-ayurvedic-medicine-manufacturers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/medicine-distributors-in-pune",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-chhattisgarh",
        destination: "/blog/ayurvedic-pcd-company-in-chhattisgarh",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-daman-diu",
        destination: "/blog/ayurvedic-pcd-company-in-daman-diu",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-company-in-warangal",
        destination: "/blog/ayurvedic-pcd-company-in-warangal",
        permanent: true
      },
      {
        source: "/franchise/pcd-ayurvedic-franchise-in-gujarat",
        destination: "/blog/ayurvedic-pcd-company-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/pcd-companies-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-companies-in-chennai",
        destination: "/blog/ayurvedic-pcd-company-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-company-in-karnal",
        destination: "/blog/ayurvedic-pcd-company-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-services-in-bangalore",
        destination: "/blog/ayurvedic-pcd-company-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-services-in-mumbai",
        destination: "/blog/ayurvedic-pcd-company-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/pcd-franchise-services-in-noida",
        destination: "/blog/ayurvedic-pcd-company-in-noida",
        permanent: true
      },
      {
        source: "/franchise/pcd-herbal-franchise-in-gurugram",
        destination: "/blog/ayurvedic-pcd-company-in-gurgaon",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-ayurvedic-and-herbal-products-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-in-ghaziabad",
        destination: "/blog/ayurvedic-pcd-company-in-ghaziabad",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-in-paonta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-in-pune",
        destination: "/blog/ayurvedic-pcd-company-in-pune",
        permanent: true
      },
      {
        source: "/franchise/pcd-pharma-franchise-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/franchise/perfect-ayurvedic-business-opportunity",
        destination: "/blog/ayurvedic-medicine-business-opportunity-in-india",
        permanent: true
      },
      {
        source: "/franchise/pharma-companies-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/pharma-companies-in-uttarakhand",
        destination: "/blog/ayurvedic-pcd-company-in-uttarakhand",
        permanent: true
      },
      {
        source: "/franchise/pharma-franchise-company-in-daman-diu",
        destination: "/blog/ayurvedic-pcd-company-in-daman-diu",
        permanent: true
      },
      {
        source: "/franchise/pharma-franchise-company-in-panipat",
        destination: "/blog/ayurvedic-pcd-company-in-panipat",
        permanent: true
      },
      {
        source: "/franchise/pharma-franchise-pcd-in-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/franchise/private-label-herbal-ayurvedic-pcd-franchise-in-jind",
        destination: "/blog/ayurvedic-pcd-company-in-jind",
        permanent: true
      },
      {
        source: "/franchise/pune-herbal-ayurvedic-medicine-suppliers-and-manufacturers",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/franchise/single-herb-manufacturers-in-india",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/franchise/single-herb-manufacturing-companies-in-india",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/franchise/single-herb-medicine-brands-in-india",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/franchise/single-herb-medicine-manufacturers-in-india",
        destination: "/blog/single-herb-manufacturers",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-franchise-company-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-medicine-manufacturers-in-gujarat",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-gujarat",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-medicine-manufacturers-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-medicine-manufacturers-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-pcd-company-in-himachal-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-pcd-company-in-hisar",
        destination: "/blog/ayurvedic-pcd-company-in-hisar",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-pcd-company-in-siliguri",
        destination: "/blog/ayurvedic-pcd-company-in-siliguri",
        permanent: true
      },
      {
        source: "/franchise/the-best-ayurvedic-pcd-company-in-udaipur",
        destination: "/blog/ayurvedic-pcd-company-in-udaipur",
        permanent: true
      },
      {
        source: "/franchise/the-best-herbal-pcd-franchise-in-bhubaneswar",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/franchise/the-leading-ayurvedic-pcd-company-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/franchise/the-leading-ayurvedic-pcd-company-in-udaipur",
        destination: "/blog/ayurvedic-pcd-company-in-udaipur",
        permanent: true
      },
      {
        source: "/franchise/the-leading-the-best-ayurvedic-franchise-company-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/franchise/third-party-ayurvedic-manufacturer-in-maharashtra",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-maharashtra",
        permanent: true
      },
      {
        source: "/franchise/third-party-manufacturers-in-india",
        destination: "/blog/ayurvedic-contract-manufacturing-company-in-india",
        permanent: true
      },
      {
        source: "/franchise/third-party-manufacturing-companies-in-india",
        destination: "/blog/third-party-manufacturing-of-ayurvedic-products",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies-in-chandigarh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-companies-in-world",
        destination: "/blog/top-ayurvedic-companies-in-world",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-medicine-manufacturers-in-baddi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-medicine-manufacturers-in-karnal",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-karnal",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-pcd-franchise-in-sonipat",
        destination: "/blog/ayurvedic-pcd-company-in-sonipat",
        permanent: true
      },
      {
        source: "/franchise/top-10-ayurvedic-pcd-franchise-in-varanasi",
        destination: "/blog/ayurvedic-pcd-company-in-varanasi",
        permanent: true
      },
      {
        source: "/franchise/top-10-pcd-companies-in-orissa",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/franchise/top-10-pcd-pharma-companies-in-ambala",
        destination: "/blog/ayurvedic-pcd-company-in-ambala",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-companies-in-india-2022",
        destination: "/blog/top-100-ayurvedic-companies-in-india-2022",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-india",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-kerala",
        destination: "/blog/ayurvedic-medicine-distributors-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-distributors-in-pune",
        destination: "/blog/ayurvedic-medicine-distributors-in-pune",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-manufacturers-in-delhi",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-manufacturers-in-lucknow",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-lucknow",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-wholesalers-in-delhi",
        destination: "/blog/ayurvedic-medicine-distributors-in-delhi",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicine-wholesalers-in-hyderabad",
        destination: "/blog/ayurvedic-medicine-distributors-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/top-100-ayurvedic-medicines-wholesalers-in-mumbai",
        destination: "/blog/ayurvedic-medicine-distributors-in-mumbai",
        permanent: true
      },
      {
        source: "/franchise/top-20-baidyanath-ayurvedic-medicine-distributors-in-kolkata",
        destination: "/blog/ayurvedic-medicine-distributors-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/top-5-ayurvedic-pcd-franchise-in-udaipur",
        destination: "/blog/ayurvedic-pcd-company-in-udaipur",
        permanent: true
      },
      {
        source: "/franchise/top-50-ayurvedic-medicine-distributors-in-bihar",
        destination: "/blog/ayurvedic-medicine-distributors-in-bihar",
        permanent: true
      },
      {
        source: "/franchise/top-50-ayurvedic-medicine-manufacturers-in-paonta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/franchise/top-50-ayurvedic-medicine-wholesalers-in-bangalore",
        destination: "/blog/ayurvedic-medicine-distributors-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-chennai",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-chennai",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-haridwar",
        destination: "/blog/ayurvedic-pcd-company-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-kerala",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-companies-in-world",
        destination: "/blog/top-ayurvedic-companies-in-world",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-company-in-kolkata",
        destination: "/blog/ayurvedic-pcd-company-in-kolkata",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-company-in-madhya-pradesh",
        destination: "/blog/ayurvedic-pcd-company-in-madhya-pradesh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-distributors-in-west-bengal",
        destination: "/blog/ayurvedic-medicine-distributors-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturer-in-ahmedabad",
        destination: "/blog/ayurvedic-medicine-manufacturer-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturer-in-bangalore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-bangalore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-andhra-pradesh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-coimbatore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-coimbatore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-haridwar",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haridwar",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-haryana",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-haryana",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-himachal-pradesh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-indore",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-indore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-jaipur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-jaipur",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-kanpur",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-kanpur",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-pune",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-pune",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-rajasthan",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-rajasthan",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-medicine-manufacturers-in-tamil-nadu",
        destination: "/blog/ayurvedic-medicine-manufacturers-in-tamil-nadu",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-companies-in-ahmedabad",
        destination: "/blog/ayurvedic-pcd-company-in-ahmedabad",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-companies-in-hyderabad",
        destination: "/blog/ayurvedic-pcd-company-in-hyderabad",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-amritsar",
        destination: "/blog/ayurvedic-pcd-company-in-amritsar",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-baddi",
        destination: "/blog/ayurvedic-pcd-company-in-baddi",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-bhopal",
        destination: "/blog/ayurvedic-pcd-company-in-bhopal",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-bhubaneswar",
        destination: "/blog/ayurvedic-pcd-company-in-bhubaneswar",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-chandigarh",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-india",
        destination: "/blog/top-ayurvedic-companies-in-india",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-indore",
        destination: "/blog/ayurvedic-pcd-company-in-indore",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-jabalpur",
        destination: "/blog/ayurvedic-pcd-company-in-jabalpur",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-kochi",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-nagpur",
        destination: "/blog/ayurvedic-pcd-company-in-nagpur",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-patna",
        destination: "/blog/ayurvedic-pcd-company-in-patna",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-punjab",
        destination: "/blog/ayurvedic-pcd-company-in-punjab",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-company-in-surat",
        destination: "/blog/ayurvedic-pcd-company-in-surat",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-franchise-company",
        destination: "/blog/ayurvedic-pcd-company-in-cuttack",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-franchise-in-howrah",
        destination: "/blog/ayurvedic-pcd-company-in-howrah",
        permanent: true
      },
      {
        source: "/franchise/top-ayurvedic-pcd-franchise-in-jind",
        destination: "/blog/ayurvedic-pcd-company-in-jind",
        permanent: true
      },
      {
        source: "/franchise/top-herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        destination: "/blog/herbal-ayurvedic-medicine-manufacturers-in-west-bengal",
        permanent: true
      },
      {
        source: "/franchise/top-pcd-company-in-puducherry",
        destination: "/blog/ayurvedic-pcd-company-in-puducherry",
        permanent: true
      },
      {
        source: "/franchise/top-pharma-franchise-company-in-paonta-sahib",
        destination: "/blog/ayurvedic-pcd-company-in-ponta-sahib",
        permanent: true
      },
      {
        source: "/franchise/top-vitamin-c-serum-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-franchise-in-india",
        permanent: true
      },
      {
        source: "/franchise/topmost-ayurvedic-pcd-companies-in-kerala",
        destination: "/blog/ayurvedic-pcd-company-in-kerala",
        permanent: true
      },
      {
        source: "/franchise/topmost-ayurvedic-pcd-company-in-gaya",
        destination: "/blog/ayurvedic-pcd-company-in-gaya",
        permanent: true
      },
      {
        source: "/franchise/trustworthy-ayurvedic-pcd-company-in-chandigarh",
        destination: "/blog/ayurvedic-pcd-company-in-chandigarh",
        permanent: true
      },
      {
        source: "/franchise/tulsi-drops-manufacturers-suppliers",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/tulsi-drops-manufacturers-from-india",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/tulsi-drops-manufacturing-company-in-india",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/tulsi-drops-producers-in-india",
        destination: "/blog/tulsi-drops-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/vitamin-c-serum-manufacturers-in-india",
        destination: "/blog/ayurvedic-vitamin-c-serum-manufacturers-in-india",
        permanent: true
      },
      {
        source: "/franchise/yurvedic-herbal-pcd-company-in-koch",
        destination: "/blog/ayurvedic-pcd-company-in-kochi",
        permanent: true
      },
    ]
  }
};

export default nextConfig;