import PageContent from "./PageContent";

export const metadata = {
    title: "About Zocveda Wellness | Trusted Ayurvedic & Herbal Solutions in India",
    description:
        "Discover Zocveda Wellness — a division of Zoic Group offering premium Ayurvedic medicines and herbal wellness solutions. Learn about our mission, vision, and commitment to holistic health and natural living.",
    keywords: [
        "Zocveda Wellness",
        "About Zocveda",
        "Ayurvedic Medicines",
        "Herbal Wellness Solutions",
        "Ayurveda in India",
        "Natural Health Products",
        "Zoic Group",
        "Top Ayurvedic Company in India",
        "Herbal Medicine Manufacturer",
        "WHO-GMP Certified Ayurveda Company"
    ],
    openGraph: {
        title: "About Zocveda Wellness | Premium Ayurvedic & Herbal Solutions in India",
        description:
            "Know Zocveda Wellness — a division of Zoic Group delivering high-quality Ayurvedic and herbal formulations, committed to holistic health and wellness across India.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
        siteName: "Zocveda Wellness",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/about-zocveda.jpg`,
                width: 1200,
                height: 630,
                alt: "Zocveda Wellness - Trusted Ayurvedic & Herbal Solutions in India",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Zocveda Wellness | Ayurvedic & Herbal Solutions in India",
        description:
            "Zocveda Wellness, part of Zoic Group, offers research-backed Ayurvedic formulations and herbal wellness solutions, promoting natural living across India.",
        images: [`${process.env.NEXT_PUBLIC_SITE_URL}/images/about-zocveda.jpg`],
    },
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/about-us`,
    },
};

export default function About() {
    return (
        <>
            <PageContent />
        </>
    );
}
