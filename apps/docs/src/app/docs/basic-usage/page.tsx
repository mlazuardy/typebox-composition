import BasicUsage from "./BasicUsage.mdx";
import { getTitle } from "@/shared/shared-metadata";

export const metadata = {
  title: getTitle("Basic Usage"),
};

export default function Page() {
  return <BasicUsage />;
}
