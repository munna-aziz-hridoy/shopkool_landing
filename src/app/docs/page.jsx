"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import multipleStoreImg from "@/assets/images/multiple_store.png";
import productmanageImg from "@/assets/images/product_manage.png";
import ordermanageImg from "@/assets/images/order_manage.png";
import step1Img from "@/assets/images/ck_get.png";
import step2Img from "@/assets/images/step2.png";
import step3Img from "@/assets/images/step3.png";
import step3_2Img from "@/assets/images/step3_2.png";
import step4Img from "@/assets/images/step4.png";

const sections = [
  "Overview of StoreKool",
  "Key Features",
  "Benefits",
  "Technical Implementation",
  "Potential Areas for Enhancement",
  "Use Cases",
  "Conclusion",
  "Getting Started",
  "Managing Stores",
  "Product Management",
  "Order Management",
  "Frequently Asked Questions (FAQ)",
  "Support",
];

export default function Docs() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate offsets only if sections exist
      const offsets = sections
        .map((section) => document.getElementById(section.replace(/\s/g, "")))
        .filter((el) => el !== null)
        .map((el) => el.offsetTop);

      const scrollPosition = window.scrollY + 200;

      // Determine the active section based on scroll position
      const currentSection = offsets.reduce((prev, curr, i) => {
        return scrollPosition >= curr ? sections[i] : prev;
      }, sections[0]);

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row max-w-5xl mx-auto">
      {/* Sticky Sidebar */}
      <aside className="w-64 sticky top-0 h-screen p-4 ">
        <nav>
          <ul className="space-y-[1px]">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section.replace(/\s/g, "")}`}
                  className={`block p-2 font-semibold ${
                    activeSection === section ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* overview */}

        <section id="Overview" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Overview of StoreKool</h2>

          <div className="">
            <p className="text-lg">
              StoreKool is a powerful SaaS application designed to simplify and
              enhance the management of multiple WooCommerce stores. It provides
              store managers with the tools they need to efficiently update
              product and order information without navigating the cumbersome
              WooCommerce dashboard.
            </p>
            <p className="text-lg mt-4">
              By centralizing store management, StoreKool helps businesses:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
              <li>
                Manage multiple WooCommerce stores from a single, unified
                dashboard.
              </li>
              <li>
                Streamline operations and save time by updating product and
                order details in bulk.
              </li>
              <li>
                Maintain consistency and accuracy across various stores
                effortlessly.
              </li>
              <li>
                Enhance productivity and reduce the complexity associated with
                managing multiple e-commerce platforms.
              </li>
            </ul>
            <p className="mt-4 text-lg">
              With StoreKool, store managers can focus on growing their business
              rather than being bogged down by the inefficiencies of traditional
              e-commerce management systems. Its intuitive design and robust
              features make it an invaluable tool for modern e-commerce
              operations.
            </p>
          </div>
        </section>

        {/* key feature */}

        <section id="KeyFeatures" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Key Features</h2>

          <div className="space-y-12">
            {/* Multi-Store Management */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">
                Multi-Store Management
              </h3>
              <p className="text-lg">
                Manage multiple WooCommerce stores from a single dashboard,
                eliminating the need to log in and out of different stores. With
                StoreKool, you can:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  Effortlessly switch between stores using the sidebar
                  navigation.
                </li>
                <li>
                  Maintain a unified view of all your stores’ performance and
                  details.
                </li>
                <li>
                  Save time and streamline management processes by centralizing
                  store operations.
                </li>
              </ul>
              <p className="mt-4">
                This feature ensures efficient and smooth management, making it
                ideal for businesses handling multiple WooCommerce stores.
              </p>

              <div className="w-full h-[250px] relative mt-4">
                <Image src={multipleStoreImg.src} layout="fill" />
              </div>
            </div>

            {/* Bulk Product Editing */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">
                Bulk Product Editing
              </h3>
              <p className="text-lg">
                Update various product details such as price, sale price,
                featured status, weight, and more simultaneously across multiple
                products. StoreKool’s bulk product editing feature allows you
                to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  Edit multiple product attributes at once, reducing manual
                  effort.
                </li>
                <li>
                  Use advanced filtering options to find specific products based
                  on categories, attributes, or custom fields.
                </li>
                <li>
                  Apply changes across numerous products swiftly, avoiding the
                  time-consuming process of editing each product individually
                  through the WooCommerce dashboard.
                </li>
              </ul>
              <p className="mt-4">
                This feature not only saves time but also ensures consistency
                and accuracy in product management.
              </p>

              <div className="w-full h-[250px] relative mt-4">
                <Image src={productmanageImg.src} layout="fill" />
              </div>
            </div>

            {/* Bulk Order Management */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">
                Bulk Order Management
              </h3>
              <p className="text-lg">
                Efficiently manage orders by updating statuses for multiple
                orders at once. StoreKool’s bulk order management feature
                provides:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  Batch actions such as processing refunds, marking orders as
                  completed, or changing order statuses.
                </li>
                <li>
                  Improved workflow efficiency, especially useful for stores
                  with high order volumes.
                </li>
                <li>
                  The ability to handle multiple orders simultaneously, reducing
                  the manual effort and time required for order management.
                </li>
              </ul>
              <p className="mt-4">
                This feature enhances productivity and helps streamline order
                processing tasks.
              </p>

              <div className="w-full h-[250px] relative mt-4">
                <Image src={ordermanageImg.src} layout="fill" />
              </div>
            </div>

            {/* User-Friendly Interface */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">
                User-Friendly Interface
              </h3>
              <p className="text-lg">
                StoreKool features a clean, intuitive dashboard designed with
                the user in mind. The user interface includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  A sidebar navigation that provides quick access to stores,
                  profile settings, and other utilities.
                </li>
                <li>
                  Easy-to-use forms for adding new stores and updating product
                  or order information.
                </li>
                <li>
                  A design that enhances user experience by simplifying complex
                  tasks and improving accessibility.
                </li>
              </ul>
              <p className="mt-4">
                The user-friendly interface ensures that even those with minimal
                technical expertise can navigate and manage their stores
                effectively.
              </p>
            </div>

            {/* Secure Login Options */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">
                Secure Login Options
              </h3>
              <p className="text-lg">
                StoreKool supports secure login options to ensure both
                convenience and security for its users. Features include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>Login via email and password for standard access.</li>
                <li>
                  Google account login for easy access and enhanced security.
                </li>
                <li>
                  Robust security measures to protect user data and accounts.
                </li>
              </ul>
              <p className="mt-4">
                These secure login options provide flexibility and safety,
                catering to various user preferences and enhancing overall
                security.
              </p>
            </div>
          </div>
        </section>

        {/* benefits */}

        <section id="Benefits" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Benefits</h2>

          <div className="space-y-12">
            {/* Increased Efficiency */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">
                Increased Efficiency
              </h3>
              <p className="text-lg">
                By centralizing store management and offering bulk editing
                tools, StoreKool significantly reduces the time spent on
                repetitive tasks. This streamlines operations and frees up
                valuable time for other critical business activities. Key
                benefits include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>Reduction in time spent on repetitive tasks.</li>
                <li>Streamlined operations through centralized management.</li>
                <li>
                  More time available for focusing on strategic business
                  activities.
                </li>
              </ul>
            </div>

            {/* Enhanced Productivity */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">
                Enhanced Productivity
              </h3>
              <p className="text-lg">
                With the ability to perform bulk updates, store managers can
                accomplish more in less time. This not only improves overall
                productivity but also reduces the risk of errors that might
                occur when managing stores manually. Benefits include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>Increased tasks completed in a shorter time frame.</li>
                <li>Minimized risk of manual errors.</li>
                <li>Enhanced operational efficiency through bulk editing.</li>
              </ul>
            </div>

            {/* Scalability */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">Scalability</h3>
              <p className="text-lg">
                StoreKool is built to scale with your business. Whether you’re
                managing a few stores or dozens, StoreKool ensures consistent
                performance and functionality as your needs grow. Key aspects of
                scalability include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  Consistent performance across varying numbers of stores.
                </li>
                <li>
                  Robust functionality that adapts to growing business needs.
                </li>
                <li>
                  Flexible management capabilities that support business
                  expansion.
                </li>
              </ul>
            </div>

            {/* Ease of Use */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">Ease of Use</h3>
              <p className="text-lg">
                The user-friendly interface of StoreKool ensures that even users
                with minimal technical expertise can manage their stores
                effectively. The intuitive design minimizes the learning curve,
                allowing users to start benefiting from StoreKool immediately.
                Key features include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>Intuitive and easy-to-navigate interface.</li>
                <li>Minimal learning curve for new users.</li>
                <li>
                  Immediate benefits from streamlined design and functionality.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* technical implementation */}

        <section id="TechnicalImplementation" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">
            Technical Implementation
          </h2>

          <div className=" space-y-8">
            {/* Hosting */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Hosting</h3>
              <p className="text-lg">
                StoreKool is hosted on Vercel, a leading platform for deploying
                modern web applications. This choice ensures:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  <strong>Reliable Infrastructure:</strong> Vercel provides a
                  robust infrastructure that guarantees high availability and
                  performance.
                </li>
                <li>
                  <strong>Scalability:</strong> The platform scales seamlessly
                  to handle varying loads, ensuring consistent performance as
                  your user base grows.
                </li>
                <li>
                  <strong>Fast Deployment:</strong> Quick deployment processes
                  and updates ensure that StoreKool remains up-to-date with the
                  latest features and improvements.
                </li>
              </ul>
            </div>

            {/* Integration */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Integration with WooCommerce
              </h3>
              <p className="text-lg">
                The application integrates with WooCommerce using its REST API.
                This integration facilitates:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  <strong>Secure Data Management:</strong> The REST API ensures
                  secure interaction between StoreKool and your WooCommerce
                  stores, protecting sensitive information.
                </li>
                <li>
                  <strong>Real-Time Updates:</strong> StoreKool can provide
                  real-time updates and synchronization of product and order
                  data, maintaining consistency across platforms.
                </li>
                <li>
                  <strong>Efficient Data Handling:</strong> The integration
                  allows for efficient data retrieval and management, supporting
                  bulk operations and seamless user interactions.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* potential area for enhancement */}
        <section id="PotentialEnhancements" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">
            Potential Areas for Enhancement
          </h2>

          <div className=" space-y-8">
            {/* Visual Feedback */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Visual Feedback</h3>
              <p className="text-lg">
                Enhancing user experience can be achieved by introducing various
                forms of visual feedback. Potential improvements include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  <strong>Loading Indicators:</strong> Displaying loading
                  spinners or progress bars to inform users when an operation is
                  in progress.
                </li>
                <li>
                  <strong>Success Messages:</strong> Providing clear success
                  messages after successful actions to reassure users that their
                  tasks have been completed.
                </li>
                <li>
                  <strong>Error Notifications:</strong> Offering error messages
                  with troubleshooting tips to help users resolve issues more
                  effectively.
                </li>
              </ul>
            </div>

            {/* Customization */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Customization</h3>
              <p className="text-lg">
                Customizing the user experience can significantly enhance
                usability. Future updates might include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  <strong>Customizable Product Attributes:</strong> Allowing
                  users to select and display specific product attributes based
                  on their business needs.
                </li>
                <li>
                  <strong>Flexible Editing Options:</strong> Enabling more
                  granular control over which product details can be edited in
                  bulk.
                </li>
                <li>
                  <strong>Personalized Dashboards:</strong> Offering
                  customizable dashboard layouts to better fit different
                  business workflows and preferences.
                </li>
              </ul>
            </div>

            {/* Advanced Features */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Advanced Features</h3>
              <p className="text-lg">
                Expanding StoreKool’s functionality with advanced features could
                provide even more value. Considerations include:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  <strong>Advanced Analytics:</strong> Implementing analytics
                  tools to offer insights into store performance, sales trends,
                  and customer behavior.
                </li>
                <li>
                  <strong>Automated Tasks:</strong> Introducing automation for
                  routine tasks such as inventory management, order processing,
                  and report generation.
                </li>
                <li>
                  <strong>Integration with Other Tools:</strong> Adding
                  integrations with third-party tools and services to expand
                  StoreKool’s capabilities.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* use cases */}

        <section id="UseCases" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Use Cases</h2>

          <div className=" space-y-8">
            {/* Small to Medium-Sized E-commerce Businesses */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Small to Medium-Sized E-commerce Businesses
              </h3>
              <p className="text-lg">
                StoreKool is particularly beneficial for businesses that operate
                multiple WooCommerce stores. It offers:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  <strong>Centralized Management:</strong> A unified dashboard
                  to manage all stores from one place, reducing the complexity
                  of juggling multiple logins and interfaces.
                </li>
                <li>
                  <strong>Consistency:</strong> Ensures uniformity across stores
                  by allowing bulk updates and centralized control, which is
                  crucial for maintaining a cohesive brand presence.
                </li>
                <li>
                  <strong>Efficiency:</strong> Saves time by streamlining store
                  operations and automating repetitive tasks, allowing
                  businesses to focus on growth and customer engagement.
                </li>
              </ul>
            </div>

            {/* High-Volume Stores */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                High-Volume Stores
              </h3>
              <p className="text-lg">
                For stores with high order volumes or frequent product changes,
                StoreKool provides:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  <strong>Bulk Editing:</strong> Tools to update product details
                  and order statuses in bulk, reducing manual input and
                  minimizing errors.
                </li>
                <li>
                  <strong>Time Savings:</strong> Automation and batch processing
                  capabilities that streamline operations, helping stores manage
                  large volumes efficiently.
                </li>
                <li>
                  <strong>Enhanced Workflow:</strong> Features designed to
                  handle high activity levels smoothly, improving overall
                  productivity and operational effectiveness.
                </li>
              </ul>
            </div>

            {/* Agencies and Developers */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Agencies and Developers
              </h3>
              <p className="text-lg">
                Web development agencies and freelancers managing multiple
                client stores will find StoreKool advantageous due to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                <li>
                  <strong>Streamlined Workflows:</strong> Centralized management
                  for multiple client stores, allowing for efficient handling of
                  diverse client needs from a single platform.
                </li>
                <li>
                  <strong>Focus on Value:</strong> Enables developers to
                  concentrate on delivering strategic value to clients instead
                  of getting bogged down with repetitive administrative tasks.
                </li>
                <li>
                  <strong>Efficiency Gains:</strong> Reduces the time spent on
                  manual updates and administrative work, leading to improved
                  service delivery and client satisfaction.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* conclusion */}

        <section id="Conclusion" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Conclusion</h2>

          <div className="">
            <p className="text-lg">
              StoreKool is a comprehensive solution tailored for efficient
              WooCommerce store management. It simplifies the complexities of
              handling multiple stores and executing bulk updates, making it an
              essential tool for both store managers and developers.
            </p>
            <p className="text-lg mt-4">
              The platform’s user-friendly interface ensures ease of use, even
              for those with minimal technical expertise. Advanced features such
              as bulk editing, centralized management, and secure login options
              contribute to a streamlined workflow and enhanced productivity.
            </p>
            <p className="text-lg mt-4">
              StoreKool’s scalability means it can grow with your business,
              adapting to your needs as you manage more stores and handle
              increased volumes of data. With ongoing enhancements and feature
              expansions, StoreKool is set to remain at the forefront of SaaS
              solutions for WooCommerce management.
            </p>
            <p className="text-lg mt-4">
              As we continue to evolve StoreKool, we are committed to providing
              a robust and valuable tool that meets the evolving demands of
              e-commerce management, ensuring that users can manage their stores
              with greater efficiency and effectiveness.
            </p>
          </div>
        </section>

        {/* getting started */}

        <section id="GettingStarted" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Getting Started</h2>
          <div className="">
            <h2 className="text-2xl font-bold mb-4">
              Get Your WooCommerce Consumer Key (CK) and Consumer Secret (CS)
            </h2>
            <p className="mb-4">
              To connect your WooCommerce store with StoreKool, you need to
              obtain the Consumer Key (CK) and Consumer Secret (CS) from your
              WooCommerce store. These keys enable StoreKool to securely
              communicate with your store’s data. Follow these steps to get your
              CK and CS:
            </p>

            <ol className="list-decimal list-inside space-y-4">
              <li>
                <h3 className="text-xl font-semibold mb-2">
                  Log into Your WooCommerce Store
                </h3>
                <p>
                  Access your WooCommerce admin dashboard by logging in with
                  your admin credentials.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2">
                  Navigate to API Settings
                </h3>
                <p>
                  In the WooCommerce dashboard, go to{" "}
                  <strong>WooCommerce &gt; Settings</strong>.
                </p>
                <p>
                  Click on the <strong>Advanced</strong> tab.
                </p>
                <p>
                  Under the Advanced tab, find and click on{" "}
                  <strong>REST API</strong>.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2">
                  Create a New API Key
                </h3>
                <p>
                  Click on the <strong>Add Key</strong> button.
                </p>
                <p>
                  Provide a description for the key (e.g.,{" "}
                  <strong>"StoreKool Integration"</strong>).
                </p>
                <p>
                  Set the <strong>Permissions</strong> to{" "}
                  <strong>Read/Write</strong> so StoreKool can manage products
                  and orders.
                </p>
                <p>
                  Click on <strong>Generate API Key</strong>.
                </p>
              </li>
              <li>
                <h3 className="text-xl font-semibold mb-2">
                  Copy Your CK and CS
                </h3>
                <p>
                  Once the key is generated, you’ll see the{" "}
                  <strong>Consumer Key</strong> and{" "}
                  <strong>Consumer Secret</strong> displayed.
                </p>
                <p>Copy both keys and store them in a secure place.</p>
              </li>
            </ol>

            <div className="w-full h-[300px] relative mt-4">
              <Image src={step1Img.src} layout="fill" />
            </div>
          </div>
          <div className="space-y-12 mt-10">
            {/* Logging In */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Logging In</h3>
              <p className="text-lg mb-4">
                To get started with StoreKool, you can log in using your email
                and password or via your Google account. Follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  <strong>Visit the Login Page:</strong> Open your web browser
                  and navigate to the StoreKool login page.
                </li>
                <li>
                  <strong>Enter Your Credentials:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      Email and Password: Enter your registered email and
                      password.
                    </li>
                    <li>
                      Google Account: Alternatively, click the "Log in with
                      Google" button to sign in with your Google account.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Access the Dashboard:</strong> Once logged in, you
                  will be directed to the StoreKool dashboard where you can
                  start managing your stores.
                </li>
              </ol>

              <div className="w-full h-[300px] relative mt-4">
                <Image src={step2Img.src} layout="fill" />
              </div>
            </div>

            {/* Adding a Store */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Adding a Store</h3>
              <p className="text-lg mb-4">
                To add a WooCommerce store, follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  <strong>Navigate to the "Add Store" Section:</strong> On the
                  dashboard, locate and click the "Add Store" button.
                </li>
                <li>
                  <strong>Enter Store Details:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      <strong>Store URL:</strong> Enter the URL of your
                      WooCommerce store.
                    </li>
                    <li>
                      <strong>Store Name:</strong> Provide a name for your
                      store.
                    </li>
                    <li>
                      <strong>Consumer Key (CK):</strong> Enter your WooCommerce
                      API Consumer Key.
                    </li>
                    <li>
                      <strong>Consumer Secret (CS):</strong> Enter your
                      WooCommerce API Consumer Secret.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Submit Information:</strong> Click the "Submit" button
                  to add the store. Once added, it will appear in your list of
                  connected stores.
                </li>
                <li>
                  <strong>Start Managing:</strong> You can now manage the newly
                  added store from the dashboard.
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full h-[300px] relative mt-4">
            <Image src={step3Img.src} layout="fill" />
          </div>{" "}
          <div className="w-full h-[300px] relative mt-4">
            <Image src={step3_2Img.src} layout="fill" />
          </div>
        </section>

        {/* managing stores */}

        <section id="ManagingStores" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Managing Stores</h2>

          <div className=" space-y-12">
            {/* Viewing Stores */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Viewing Stores</h3>
              <p className="text-lg mb-4">
                To view all the stores you’ve connected to StoreKool, follow
                these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  <strong>Select the "Stores" Option:</strong> From the sidebar
                  navigation on the dashboard, click on the “Stores” option.
                  This will take you to a page displaying an overview of all
                  your connected stores.
                </li>
                <li>
                  <strong>Overview Information:</strong> On this page, you will
                  see a summary of each store, including:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      <strong>Number of Products:</strong> The total count of
                      products available in the store.
                    </li>
                    <li>
                      <strong>Number of Orders:</strong> The total count of
                      orders processed in the store.
                    </li>
                    <li>
                      <strong>Key Metrics:</strong> Additional key metrics
                      relevant to store performance, such as sales volume or
                      average order value, depending on your store’s
                      configuration.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Manage Store Details:</strong> Click on any store’s
                  name or associated options to view more detailed information
                  and perform management actions.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* product management */}

        <section id="ProductManagement" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Product Management</h2>

          <div className=" space-y-12">
            {/* Viewing Products */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Viewing Products</h3>
              <p className="text-lg mb-4">
                To view the products in a specific store, follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  <strong>Select the Store:</strong> From the sidebar, choose
                  the store whose products you want to view.
                </li>
                <li>
                  <strong>Navigate to the "Products" Tab:</strong> Click on the
                  “Products” tab in the sidebar navigation. This will display a
                  list of all products available in the selected store.
                </li>
                <li>
                  <strong>Product Overview:</strong> On this page, you will see
                  key details of each product, including name, price, stock
                  level, and other relevant attributes.
                </li>
              </ol>
            </div>

            {/* Editing Multiple Products */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Editing Multiple Products
              </h3>
              <p className="text-lg mb-4">
                StoreKool allows you to efficiently update multiple products at
                once. Here’s how to use the bulk editing feature:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  <strong>Select Products:</strong> Use the checkboxes next to
                  the products you want to edit. You can select multiple
                  products at once.
                </li>
                <li>
                  <strong>Click "Edit":</strong> After selecting the products,
                  click the "Edit" button to open the bulk editing interface.
                </li>
                <li>
                  <strong>Update Product Details:</strong> Modify the desired
                  product attributes such as price, sale price, stock level, and
                  other details. The changes will be applied to all selected
                  products.
                </li>
                <li>
                  <strong>Save Changes:</strong> Once you have made the
                  necessary updates, click "Save" to apply the changes across
                  all selected products.
                </li>
                <li>
                  <strong>Confirmation:</strong> A confirmation message will
                  appear to indicate that the changes have been successfully
                  applied.
                </li>
              </ol>
            </div>
          </div>

          <div className="w-full h-[300px] relative mt-4">
            <Image src={productmanageImg.src} layout="fill" />
          </div>
        </section>

        {/* order management */}

        <section id="OrderManagement" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Order Management</h2>

          <div className=" space-y-12">
            {/* Viewing Orders */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Viewing Orders</h3>
              <p className="text-lg mb-4">
                To view all orders for a specific store, follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  <strong>Select the Store:</strong> From the sidebar, choose
                  the store whose orders you want to view.
                </li>
                <li>
                  <strong>Navigate to the "Orders" Tab:</strong> Click on the
                  “Orders” tab in the sidebar navigation. This will display a
                  comprehensive list of all orders placed in the selected store.
                </li>
                <li>
                  <strong>Order Details:</strong> On this page, you will find
                  detailed information for each order, including:
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>
                      <strong>Status:</strong> The current status of the order
                      (e.g., pending, completed, refunded).
                    </li>
                    <li>
                      <strong>Customer Details:</strong> Information about the
                      customer who placed the order.
                    </li>
                    <li>
                      <strong>Payment Information:</strong> Details related to
                      the payment method used for the order.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Editing Multiple Orders */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Editing Multiple Orders
              </h3>
              <p className="text-lg mb-4">
                StoreKool's bulk order management feature allows you to
                efficiently handle multiple orders at once. Here’s how to update
                order statuses in bulk:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  <strong>Select Orders:</strong> Use the checkboxes next to
                  each order to select the ones you want to edit. You can choose
                  multiple orders at once.
                </li>
                <li>
                  <strong>Click "Edit":</strong> After selecting the orders,
                  click the "Edit" button to open the bulk editing interface.
                </li>
                <li>
                  <strong>Update Order Statuses:</strong> In the bulk editing
                  interface, update the order statuses for all selected orders.
                  Options may include marking orders as completed, processing
                  refunds, or any other status changes.
                </li>
                <li>
                  <strong>Save Changes:</strong> Click "Save" to apply the
                  updates to all selected orders.
                </li>
                <li>
                  <strong>Confirmation:</strong> A confirmation message will
                  appear indicating that the order statuses have been updated
                  successfully.
                </li>
              </ol>
            </div>
          </div>

          <div className="w-full h-[300px] relative mt-4">
            <Image src={ordermanageImg.src} layout="fill" />
          </div>
        </section>

        {/* faq */}

        <section id="FAQ" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className=" space-y-8">
            {/* WooCommerce API Keys */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                How do I find my WooCommerce API keys?
              </h3>
              <p className="text-lg mb-4">
                You can find your WooCommerce API keys by following these steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  <strong>Access Your WordPress Dashboard:</strong> Log in to
                  your WordPress admin panel.
                </li>
                <li>
                  <strong>Navigate to WooCommerce Settings:</strong> Go to{" "}
                  <strong>WooCommerce Settings</strong>.
                </li>
                <li>
                  <strong>Go to Advanced Settings:</strong> Click on the{" "}
                  <strong>Advanced</strong> tab.
                </li>
                <li>
                  <strong>Open REST API:</strong> Click on{" "}
                  <strong>REST API</strong> to access API settings.
                </li>
                <li>
                  <strong>Create or View API Keys:</strong> Here, you can create
                  new API keys by clicking on <strong>Add Key</strong> or view
                  existing keys.
                </li>
                <li>
                  <strong>Generate New Keys:</strong> If creating new keys,
                  enter the required details and click{" "}
                  <strong>Generate API Key</strong>.
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* support */}

        <section id="Support" className="mb-16">
          <h2 className="text-4xl font-semibold mb-8">Support</h2>

          <div className="">
            <p className="text-lg mb-4">
              If you need any help or have questions, our support team is here
              to assist you. You can reach out to us through the following
              methods:
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2H3zm0 2h18v12H3V8zm4 2h10v2H7v-2zm0 4h10v2H7v-2zm0 4h10v2H7v-2z"
                  />
                </svg>
                <div>
                  <p className="text-lg font-semibold">Email Support</p>
                  <p className="text-lg">
                    For any questions or issues, email us at{" "}
                    <a
                      href="mailto:support@StoreKool.com"
                      className="text-blue-500 hover:underline"
                    >
                      support@StoreKool.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H5a1 1 0 01-1-1V6zm4 3h8v2H8V9zm0 4h8v2H8v-2z"
                  />
                </svg>
                <div>
                  <p className="text-lg font-semibold">Live Chat</p>
                  <p className="text-lg">
                    Use the live chat feature available on our website during
                    business hours for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
