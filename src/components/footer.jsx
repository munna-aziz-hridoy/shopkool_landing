import React from "react";
import { Logo } from ".";

function Footer() {
  return (
    <footer class="bg-primary text-gray-200 py-8">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-wrap justify-between">
          {/* <!-- Logo and Description --> */}
          <div class="w-full md:w-1/3 mb-6">
            <Logo />
            <p class="text-gray-100">
              Simplify your WooCommerce management. Connect, manage, and update
              multiple stores effortlessly with StoreKool.
            </p>
          </div>

          {/* <!-- Quick Links --> */}
          <div class="w-full md:w-1/3 mb-6">
            <h3 class="text-lg font-semibold text-white mb-2">Quick Links</h3>
            <ul>
              <li>
                <a href="#" class="text-gray-100 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-100 hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-100 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-100 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact Information --> */}
          <div class="w-full md:w-1/3 mb-6">
            <h3 class="text-lg font-semibold text-white mb-2">Contact Us</h3>
            <p class="text-gray-100">
              Email:{" "}
              <a
                href="mailto:support@StoreKool.com"
                class="text-gray-100 hover:text-white"
              >
                support@StoreKool.com
              </a>
            </p>
            <p class="text-gray-100">
              Phone:{" "}
              <a href="tel:+123456789" class="text-gray-100 hover:text-white">
                +123 456 789
              </a>
            </p>
            <div class="flex mt-4 space-x-4">
              <a href="#" class="text-gray-100 hover:text-white">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
              <a href="#" class="text-gray-100 hover:text-white">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
              <a href="#" class="text-gray-100 hover:text-white">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                ></svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div class="mt-8 border-t border-gray-300 pt-4">
          <p class="text-center text-gray-100">
            &copy; 2024 StoreKool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
