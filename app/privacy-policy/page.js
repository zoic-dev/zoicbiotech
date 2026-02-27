// app/privacy-policy/page.js

import {
    Container,
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

/* =========================
   SEO – Next.js App Router
========================= */
export const metadata = {
    title: "Privacy Policy | Zoic Biotech",
    description:
        "Learn how Zoic Biotech collects, uses, and protects personal information submitted through www.zoicbiotech.com.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.zoicbiotech.com/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Privacy Policy
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Zoic Biotech Private Limited
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Introduction */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="body1" paragraph>
                    This Privacy Policy describes how <strong>Zoic Biotech</strong> (“we”, “our”, or “us”)
                    collects, uses, protects, and discloses information obtained from users of
                    our website <strong>https://www.zoicbiotech.com</strong> (“Website”).
                </Typography>

                <Typography variant="body1" paragraph>
                    By accessing or using this Website, you agree to the terms of this
                    Privacy Policy. If you do not agree, please discontinue use of the Website.
                </Typography>

                <Typography variant="body1">
                    This policy is published in compliance with the Information Technology Act, 2000
                    and applicable rules thereunder, including the Information Technology
                    (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
                </Typography>
            </Box>

            {/* Information We Collect */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Information We Collect
                </Typography>

                <Typography variant="body1" paragraph>
                    We may collect the following information:
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Name and contact details (email address, phone number)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Company name and business information" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="City, state, and country" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Information submitted through enquiry or contact forms" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="IP address and browser information for security and spam prevention" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Comments and related metadata if posted on the Website" />
                    </ListItem>
                </List>
            </Box>

            {/* Use of Information */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    How We Use Your Information
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Responding to business, PCD, and third-party manufacturing enquiries" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Providing product or franchise-related information" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Improving our Website performance and user experience" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Ensuring security and preventing spam or misuse" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Complying with legal obligations" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    We do not sell, rent, or trade your personal information to third parties.
                </Typography>
            </Box>

            {/* Cookies */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Cookies Policy
                </Typography>

                <Typography variant="body1" paragraph>
                    Our Website may use cookies to enhance user experience, store preferences,
                    and analyze traffic. Cookies are small files stored on your device
                    through your web browser.
                </Typography>

                <Typography variant="body1">
                    You may choose to disable cookies through your browser settings.
                    However, some parts of the Website may not function properly.
                </Typography>
            </Box>

            {/* Comments & Media */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Comments and Media
                </Typography>

                <Typography variant="body1" paragraph>
                    When visitors leave comments, we collect the data shown in the comments form,
                    the visitor’s IP address, and browser user agent string to help with spam detection.
                </Typography>

                <Typography variant="body1" paragraph>
                    If you upload images to the Website, please avoid uploading images with
                    embedded location data (EXIF GPS). Visitors may download and extract
                    such data from images.
                </Typography>
            </Box>

            {/* Data Retention */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Data Retention
                </Typography>

                <Typography variant="body1" paragraph>
                    Comments and related metadata may be retained indefinitely
                    to recognise and approve follow-up comments automatically.
                </Typography>

                <Typography variant="body1">
                    Registered users (if applicable) may view, edit, or delete their
                    personal information at any time, except for their username.
                </Typography>
            </Box>

            {/* Your Rights */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Your Rights
                </Typography>

                <Typography variant="body1" paragraph>
                    You may request:
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Access to the personal data we hold about you" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Correction or updating of inaccurate data" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Deletion of your personal data (subject to legal obligations)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Export of your personal data in a structured format" />
                    </ListItem>
                </List>
            </Box>

            {/* Third Party */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Third-Party Services and Embedded Content
                </Typography>

                <Typography variant="body1">
                    Our Website may contain embedded content or links to third-party websites.
                    These websites may collect data, use cookies, and monitor interactions.
                    We are not responsible for the privacy practices of such websites.
                </Typography>
            </Box>

            {/* Security */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Data Security
                </Typography>

                <Typography variant="body1">
                    We implement reasonable technical and organizational safeguards
                    to protect personal information against unauthorized access, misuse,
                    or disclosure. However, no internet transmission is completely secure.
                </Typography>
            </Box>

            {/* Changes */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Changes to This Policy
                </Typography>

                <Typography variant="body1">
                    We reserve the right to update this Privacy Policy at any time.
                    Changes will be effective immediately upon posting on this page.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact Information
                </Typography>

                <Typography variant="body1">
                    <strong>Zoic Biotech</strong>
                    <br />
                    Website: https://www.zoicbiotech.com
                    <br />
                    Email: contact@zoicpharma.com
                    <br />
                    Phone: +91-98156-20908
                </Typography>
            </Box>
        </Container>
    );
}