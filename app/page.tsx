"use client";
import CTA from "@/components/ourmission/Ourmission";
import Faqs from "@/components/faqs/Faqs";
import Feature from "@/components/features/Feature";
import Footer from "@/components/footer/Footer";
import Courses from "@/components/courses/Courses";
import Subscribe from "@/components/subscribe/Subscribe";
import TopContainer from "@/components/topcontainer/TopContainer";
import Ourmission from "@/components/ourmission/Ourmission";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box as="main">
        <TopContainer />
        <Feature />
      </Box>
      <Ourmission/>
      <Courses />
      <Subscribe />
      <Faqs />
      <Footer />
    </>
  );
}
