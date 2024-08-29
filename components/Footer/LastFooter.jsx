import React from "react";

const LastFooter = () => {
  return (
    <div class="container mx-auto mt-9 flex flex-wrap items-center justify-between">
      <div class="w-full md:w-1/2 sm:text-center md:text-center md:mb-0 mb-8">
        <p class="text-xs text-black-100 md:text-sm">
          &copy; 2024 FBA Finance. All Rights Reserved
        </p>
      </div>
      <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
        <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3 max-sm:hidden">
          <li>
            <a
              href="#contact"
              class="text-black-100 transition duration-300 ease-in-out transform hover:scale-105 hover:text-violet-400"
            >
              Contact
            </a>
          </li>
          <li class="mx-4">
            <a
              href="https://docs.fba.finance/legal-and-compliance/privacy-policy"
              target="_blank"
              class="text-black-100 transition duration-300 ease-in-out transform hover:scale-105 hover:text-violet-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="https://docs.fba.finance/legal-and-compliance/terms-of-use"
              target="_blank"
              class="text-black-100 transition duration-300 ease-in-out transform hover:scale-105 hover:text-violet-400"
            >
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LastFooter;
