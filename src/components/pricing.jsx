import Link from "next/link";
import React from "react";

const PricingCard = ({
  plan,
  price,
  features,
  buttonText,
  buttonUrl,
  isFree = false,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-800">{plan}</h2>
      <p className="mt-4 text-4xl font-bold text-blue-600">{price}</p>
      <ul className="mt-6 space-y-4 text-gray-600">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center justify-center space-x-2"
          >
            <span>✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {isFree ? (
        <a href="https://app.storekool.com" target="_blank" rel="noreferer">
          <p className="mt-8 w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {buttonText}
          </p>
        </a>
      ) : (
        <a href={buttonUrl}>
          <p className="mt-8 w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {buttonText}
          </p>
        </a>
      )}
    </div>
  );
};

const PricingSection = () => {
  return (
    <section id="pricing" className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center my-12">Pricing</h2>

      <div className="py-12 px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          plan="Free Plan"
          price="$0/month"
          features={[
            "Up to 2 Store Connect",
            "Multiple Product Update",
            "Order Management",
          ]}
          buttonText="Get Started"
          buttonUrl="https//:app.storekool.com"
          isFree
        />

        <PricingCard
          plan="Pro Plan"
          price="$49/month"
          features={[
            "Up to 5 Store Connect",
            "Multiple Product Update",
            "Order Management",
          ]}
          buttonText="Upgrade Now"
          buttonUrl="#contact"
        />

        <PricingCard
          plan="Enterprise Plan"
          price="Contact Us"
          features={[
            "Unlimited Store Connect",
            "Multiple Product Update",
            "Order Management",
          ]}
          buttonText="Contact Sales"
          buttonUrl="#contact"
        />
      </div>
    </section>
  );
};

export default PricingSection;
