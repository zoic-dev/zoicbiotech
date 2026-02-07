"use client";

// import FAQComponent from "@/components/FAQComponent";
// import { PAGE_FAQS } from "@/data/faqsdata";
import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import Link from "next/link";

export default function PageContent() {
    return (
        <Box sx={{ pt: 6, pb: 10 }}>
            <Container maxWidth="lg">

                {/* Header Section */}
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, color: "#1F6A36", mb: 2 }}
                    >
                        About Zocveda
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ maxWidth: 800, margin: "0 auto", color: "#4A4A4A" }}
                    >
                        Zocveda, a division of Zoic Group, has been at the forefront of Ayurvedic medicine innovation for over three decades.
                        Our products blend proprietary research with classical formulations, creating safe, effective, and scientifically-developed healthcare solutions.
                    </Typography>
                </Box>

                {/* Our Journey */}
                <Box mb={8}>
                    <Typography
                        variant="h4"
                        sx={{ color: "#1F6A36", fontWeight: 700, mb: 3 }}
                    >
                        Our Journey
                    </Typography>
                    <Typography sx={{ fontSize: 18, color: "#4A4A4A", lineHeight: 1.8 }}>
                        Starting with Zoic Pharmaceuticals nearly 30 years ago, Zocveda has consistently pushed the boundaries of Ayurvedic research, development, and production.
                        Our products address a wide range of ailments, catering to all age groups. Today, Zocveda is a leading national healthcare company with an ever-expanding presence, covering Ayurveda, nutraceuticals, and pharmaceutical formulations across multiple dosage forms including capsules, tablets, syrups, sachets, dry syrups, powders, granules, ointments, lotions, and oils—all manufactured at our units in Mohali, Punjab.
                    </Typography>
                </Box>

                {/* Mission, Vision, Values */}
                <Grid container spacing={4} mb={8}>
                    <Grid size={{ sm: 12, md: 4 }}>
                        <Card sx={{ borderRadius: "16px", p: 3, border: "1px solid #e3e3e3" }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: "#1F6A36", mb: 1 }}>Our Mission</Typography>
                            <Typography sx={{ color: "#4A4A4A" }}>
                                To provide standardized and researched healthcare products through continuous innovation, creating healthy lives and delivering outstanding value to our customers and business associates.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid size={{ sm: 12, md: 4 }}>
                        <Card sx={{ borderRadius: "16px", p: 3, border: "1px solid #e3e3e3" }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: "#1F6A36", mb: 1 }}>Our Vision</Typography>
                            <Typography sx={{ color: "#4A4A4A" }}>
                                To integrate Ayurveda in the lives of every individual and become a leading international healthcare group recognized for quality, excellence, and customer delight.
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid size={{ sm: 12, md: 4 }}>
                        <Card sx={{ borderRadius: "16px", p: 3, border: "1px solid #e3e3e3" }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: "#1F6A36", mb: 1 }}>Our Values</Typography>
                            <Typography sx={{ color: "#4A4A4A" }}>
                                Honesty, transparency, innovation, continuous improvement, and dedication to developing people and delivering unique solutions to stand out in the industry.
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>

                {/* Core Strength Section */}
                <Box>
                    <Typography variant="h4" sx={{ color: "#1F6A36", fontWeight: 700, mb: 3 }}>
                        Our Core Strength
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ sm: 12, md: 6 }}>
                            <Card sx={{ borderRadius: "16px", p: 3, border: "1px solid #e3e3e3" }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, color: "#1F6A36", mb: 1 }}>Highly Dedicated & Experienced Team</Typography>
                                <Typography sx={{ color: "#4A4A4A" }}>
                                    Our management team brings rich experience in pharmaceutical marketing and manufacturing, pioneering quality and innovation in every product we deliver.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid size={{ sm: 12, md: 6 }}>
                            <Card sx={{ borderRadius: "16px", p: 3, border: "1px solid #e3e3e3" }}>
                                <Typography variant="h5" sx={{ fontWeight: 700, color: "#1F6A36", mb: 1 }}>Exclusive Product Range</Typography>
                                <Typography sx={{ color: "#4A4A4A" }}>
                                    Our extensive product portfolio includes pain & inflammation, pediatric care, anti-infectives, respiratory care, gastrointestinal care, haemostatics, and much more.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {/* Associate Partner Section */}
                <Grid container spacing={4} mt={10} alignItems={"center"}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <img src={"/about.jpg"} style={{
                            width: '100%',
                            mixBlendMode: 'multiply'
                        }} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box mb={8} sx={{ textAlign: "start" }}>
                            <Typography
                                variant="h4"
                                sx={{ color: "#1F6A36", fontWeight: 700, mb: 3 }}
                            >
                                Become Our Associate Partner
                            </Typography>
                            <Typography sx={{ fontSize: 18, color: "#4A4A4A", lineHeight: 1.8, margin: "0 auto", mb: 3 }}>
                                We believe that the best collaborations create something bigger. Our long-term business associates enjoy mutual benefits, transparent communication, exceptional quality, and opportunities for innovation. Join us to grow together and embrace the advantages of strategic cooperation.
                            </Typography>
                            <Button
                                variant="contained"
                                component={Link}
                                href="/contact"
                                sx={{ backgroundColor: "#1F6A36", "&:hover": { backgroundColor: "#30944eff" } }}
                            >
                                Join Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

                {/* FAQs */}
                {/* <FAQComponent faqs={PAGE_FAQS.about} /> */}

            </Container>
        </Box>
    );
}
