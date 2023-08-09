import { getTitle } from "@/shared/shared-metadata";
import { Metadata } from "next";
import Installation from "./Installation.mdx";

export const metadata: Metadata = {
  title: getTitle("Installation"),
};

export default function Page() {
  return <Installation />;
}
