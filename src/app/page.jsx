import {
  Banner,
  ContactForm,
  Faqs,
  FeatureSection,
  PricingSection,
  Steps,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Banner />
      <FeatureSection />
      <Steps />
      <PricingSection />
      <Testimonials />
      <Faqs />
      <ContactForm />
    </main>
  );
}
