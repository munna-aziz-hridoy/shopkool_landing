import { BsDiagram3Fill } from "react-icons/bs";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { PiListChecksFill } from "react-icons/pi";
import { MdOutlineAccessTimeFilled, MdMobileFriendly } from "react-icons/md";
import { TbAutomaticGearbox } from "react-icons/tb";

const features = [
  {
    title: "Connect Multiple Stores",
    text: "Easily manage multiple WooCommerce stores from a single platform.",
    icon: (
      <BsDiagram3Fill
        fontSize={50}
        className="group-hover:text-primary text-white duration-200"
      />
    ),
  },
  {
    title: "Bulk Product Updates",
    text: "Save time by updating products across all stores in bulk with just a few clicks.",
    icon: (
      <HiMiniClipboardDocumentList
        fontSize={50}
        className="group-hover:text-primary text-white duration-200"
      />
    ),
  },
  {
    title: "Bulk Order Management",
    text: "Process and update orders across stores efficiently, all from one place.",
    icon: (
      <PiListChecksFill
        fontSize={50}
        className="group-hover:text-primary text-white duration-200"
      />
    ),
  },
  {
    title: "Real-Time Sync",
    text: "Enjoy seamless synchronization across all your stores.",
    icon: (
      <MdOutlineAccessTimeFilled
        fontSize={50}
        className="group-hover:text-primary text-white duration-200"
      />
    ),
  },
  {
    title: "User-Friendly Interface",
    text: "Navigate through a simple, intuitive dashboard designed for efficiency.",
    icon: (
      <MdMobileFriendly
        fontSize={50}
        className="group-hover:text-primary text-white duration-200"
      />
    ),
  },
  {
    title: "Automation Tools",
    text: "Automate repetitive tasks and focus on growing your business.",
    icon: (
      <TbAutomaticGearbox
        fontSize={50}
        className="group-hover:text-primary text-white duration-200"
      />
    ),
  },
];

export { features };
