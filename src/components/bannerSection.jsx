import React from "react";
import Image from "next/image";
import blob from "@/assets/images/blob.svg";
import blob2 from "@/assets/images/blob_2.svg";

function BannerSection({
  imageSrc,
  reverse = false,
  title,
  subtitle,
  content,
  imageSrc2,
}) {
  return (
    <section className="p-4 relative overflow-hidden py-20">
      {/* Blob Background */}
      <div className="absolute inset-0 -z-10">
        <div className="relative w-full h-full">
          <img
            src={blob.src}
            alt=""
            className="absolute top-0 right-0 w-96 h-96 animate-blob"
          />
          <img
            src={blob2.src}
            alt=""
            className="absolute top-0 left-0 w-96 h-96 animate-blob2 opacity-40"
          />
          <div className="absolute bottom-4 left-14 w-6 h-6 bg-green-300 opacity-60 rounded-full filter animate-blob2"></div>
          <div className="absolute top-10 left-10 w-4 h-4 bg-orange-500 opacity-60 rounded-full filter animate-blob"></div>{" "}
          <div className="absolute bottom-10 left-10 w-4 h-4 bg-black opacity-60 rounded-full filter animate-blob2"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div
          className={`w-full flex py-20 gap-20 ${
            reverse && "flex-row-reverse"
          }`}
        >
          <div className="w-full lg:w-1/2 self-center">
            {title}
            <p className="text-xl font-semibold text-black/75 mt-4">
              {subtitle}
            </p>
            <p className="font-light text-black/60 my-4 w-4/5">{content}</p>
            <a
              href="https://app.storekool.com"
              rel="noreferrer"
              target="_blank"
              className="border-2 border-primary px-4 py-2  bg-transparent duration-200 rounded-3xl relative overflow-hidden group inline-block"
            >
              <p className="z-20 text-primary font-medium group-hover:text-white relative">
                Try Free Now
              </p>
              <span className="absolute top-0 -left-[200px] group-hover:left-0 z-10 w-[101%] h-[101%] duration-500 bg-primary rounded-full" />
            </a>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="absolute z-10 -bottom-10 -left-10 w-full h-full p-5 bg-white shadow-lg animate-move-bottom-left">
              <div className="relative w-full h-full">
                <Image src={imageSrc} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="absolute z-20 -top-10 -right-10 w-full h-full p-5 bg-white shadow-lg animate-move-top-right">
              <div className="relative w-full h-full">
                <Image src={imageSrc2} layout="fill" objectFit="contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;

// import React from "react";
// import Image from "next/image";

// function BannerSection({
//   imageSrc,
//   reverse = false,
//   title,
//   subtitle,
//   content,
//   imageSrc2,
// }) {
//   return (
//     <section className="p-4">
//       <div className="max-w-7xl mx-auto">
//         <div
//           className={`w-full flex  py-20 gap-20 ${
//             reverse && "flex-row-reverse"
//           }`}
//         >
//           <div className="w-full lg:w-1/2 self-center">
//             {title}
//             <p className="text-xl font-semibold text-black/75 mt-4">
//               {subtitle}
//             </p>
//             <p className="font-light text-black/60 my-4 w-4/5">{content}</p>
//             <a
//               href="https://app.storekool.com"
//               rel="noreferrer"
//               target="_blank"
//               className="border-2 border-primary px-4 py-2  bg-transparent duration-200 rounded-3xl relative overflow-hidden group inline-block"
//             >
//               <p className="z-20 text-primary font-medium group-hover:text-white relative">
//                 Try Free Now
//               </p>
//               <span className="absolute top-0 -left-[200px] group-hover:left-0 z-10 w-[101%] h-[101%] duration-500 bg-primary rounded-full" />
//             </a>
//           </div>

//           <div className="w-full lg:w-1/2 relative">
//             <div className="absolute z-10 -bottom-10 -left-10 w-full h-full p-5 bg-white shadow-lg animate-move-bottom-left">
//               <div className="relative w-full h-full">
//                 <Image src={imageSrc} layout="fill" objectFit="contain" />
//               </div>
//             </div>
//             <div className="absolute z-20 -top-10 -right-10 w-full h-full p-5 bg-white shadow-lg animate-move-top-right">
//               <div className="relative w-full h-full">
//                 <Image src={imageSrc2} layout="fill" objectFit="contain" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default BannerSection;
