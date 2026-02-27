// app/terms-and-conditions/page.js

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
    title: "Terms & Conditions | Zoic Biotech",
    description:
        "Read the Terms and Conditions governing the use of Zoic Biotech's website and services related to third party pharma manufacturing.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.zoicbiotech.com/terms-and-conditions",
    },
};

export default function TermsAndConditionsPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Header */}
            <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
                Terms & Conditions
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Effective Date: {new Date().getFullYear()}
            </Typography>

            <Divider sx={{ mb: 5 }} />

            {/* Introduction */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="body1" paragraph>
                    This page states the Terms and Conditions under which you (“Visitor”, “User”)
                    may access and use the website of <strong>Zoic Biotech</strong>
                    (https://www.zoicbiotech.com).
                </Typography>

                <Typography variant="body1" paragraph>
                    By accessing this Website, you agree to comply with and be bound by
                    these Terms and Conditions. If you do not agree with any part of
                    these terms, we request you to discontinue use of this Website immediately.
                </Typography>

                <Typography variant="body1">
                    Zoic Biotech, including its divisions, subsidiaries, associate
                    companies, and related entities (in India or abroad), reserves
                    the right to revise these Terms at any time without prior notice.
                    Users are encouraged to review this page periodically.
                </Typography>
            </Box>

            {/* Use of Content */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Use of Website Content
                </Typography>

                <Typography variant="body1" paragraph>
                    All logos, brands, trademarks, service marks, headings, labels,
                    names, text, graphics, images, and other materials displayed on
                    this Website are the intellectual property of Zoic Biotech or
                    are used under valid license.
                </Typography>

                <Typography variant="body1" paragraph>
                    Unauthorized use, reproduction, modification, distribution,
                    transmission, republication, display, or performance of the
                    Website content for public or commercial purposes is strictly prohibited
                    without prior written permission.
                </Typography>

                <Typography variant="body1">
                    Nothing on this Website shall be construed as granting any license
                    or right to use any intellectual property without express authorization.
                </Typography>
            </Box>

            {/* Acceptable Use */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Acceptable Website Use
                </Typography>

                <Typography variant="h6" fontWeight={600} sx={{ mt: 3 }}>
                    A. Security Rules
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
                        <ListItemText primary="Accessing data not intended for you or logging into unauthorized accounts." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Attempting to probe, scan, or test the vulnerability of systems or networks without authorization." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Introducing viruses, malware, or harmful code to the Website." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Overloading, flooding, mailbombing, or disrupting Website services." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Sending unsolicited promotional or advertising materials." />
                    </ListItem>
                </List>

                <Typography variant="body1" sx={{ mt: 2 }}>
                    Violations may result in civil and/or criminal liability.
                    Zoic Biotech reserves the right to investigate suspected violations
                    and cooperate with law enforcement authorities.
                </Typography>

                <Typography variant="h6" fontWeight={600} sx={{ mt: 4 }}>
                    B. General Conduct
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
                        <ListItemText primary="Transmit material that violates applicable laws or regulations." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Infringe intellectual property rights of others." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Post defamatory, obscene, abusive, hateful, or unlawful content." />
                    </ListItem>
                </List>
            </Box>

            {/* Limitation of Liability */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Limitation of Liability
                </Typography>

                <Typography variant="body1" paragraph>
                    The information provided on this Website is for general informational
                    purposes only. Zoic Biotech makes no warranties regarding accuracy,
                    completeness, or reliability of the content.
                </Typography>

                <Typography variant="body1">
                    Under no circumstances shall Zoic Biotech be liable for any direct,
                    indirect, incidental, consequential, or punitive damages arising
                    out of access to or use of this Website.
                </Typography>
            </Box>

            {/* Indemnity */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Indemnity
                </Typography>

                <Typography variant="body1">
                    You agree to indemnify and hold harmless Zoic Biotech, its directors,
                    officers, employees, affiliates, and agents from any claims, damages,
                    liabilities, losses, or expenses arising out of your use of the Website
                    or breach of these Terms and Conditions.
                </Typography>
            </Box>

            {/* Governing Law */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Governing Law & Jurisdiction
                </Typography>

                <Typography variant="body1">
                    These Terms shall be governed by and interpreted in accordance
                    with the laws of India. Any disputes arising out of or in connection
                    with these Terms shall be subject to the exclusive jurisdiction
                    of the competent courts located in Mohali, Punjab, India.
                </Typography>
            </Box>

            {/* Changes */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Changes to Terms
                </Typography>

                <Typography variant="body1">
                    Zoic Biotech reserves the right to modify these Terms at any time.
                    Continued use of the Website following updates constitutes acceptance
                    of the revised Terms.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact Us
                </Typography>

                <Typography variant="body1">
                    If you have any questions regarding these Terms & Conditions,
                    please contact:
                    <br /><br />
                    <strong>Zoic Biotech</strong><br />
                    Website: https://www.zoicbiotech.com<br />
                    Email: contact@zoicpharma.com<br />
                    Phone: +91-98156-20908
                </Typography>
            </Box>
        </Container>
    );
}