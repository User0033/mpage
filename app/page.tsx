import { Box } from "@chakra-ui/react";

import FeaturedWork from "@/components/featured-work/featured-work";
import ImageCarousel from "@/components/image-carousel";
import OfferSection from "@/components/offer/offer-section";
import ChooseUsSection from "@/components/choose-us/choose-us-section";
import OurProcessesSection from "@/components/processes/our-processes-section";

export default function Home() {
  return (
    <Box h="full" bg="rgba(20, 20, 20, 0.98)" pt={20}>
      <ImageCarousel />
      <ChooseUsSection />
      <OfferSection />
      <FeaturedWork />
      <OurProcessesSection />
    </Box>
  );
}
