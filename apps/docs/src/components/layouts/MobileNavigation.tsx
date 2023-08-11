"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Logomark } from "@/components/common/Logo";
import { Navigation } from "./Navigation";

interface Props {
  navigation: {
    title: string;
    links: { title: string; href: string }[];
  }[];
}

export const MobileNavigation: React.FC<Props> = ({ navigation }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (!isOpen) return;

  //   function onRouteChange() {
  //     setIsOpen(false);
  //   }

  //   router.events.on("routeChangeComplete", onRouteChange);
  //   router.events.on("routeChangeError", onRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", onRouteChange);
  //     router.events.off("routeChangeError", onRouteChange);
  //   };
  // }, [router, isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Open navigation"
      >
        <Bars3Icon className="h-6 w-6 stroke-gray-500" />
      </button>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 z-50 flex items-start overflow-y-auto bg-gray-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
      >
        <Dialog.Panel className="min-h-full w-full max-w-xs bg-white px-4 pb-12 pt-5 dark:bg-gray-900 sm:px-6">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
            >
              <XMarkIcon className="h-6 w-6 stroke-gray-500" />
            </button>
            <Link href="/" className="ml-6" aria-label="Home page">
              <Logomark className="h-9 w-9" />
            </Link>
          </div>
          <Navigation navigation={navigation} className="mt-5 px-1" />
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
