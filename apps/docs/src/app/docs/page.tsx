import { getTitle } from "@/shared/shared-metadata";
import Overview from "./Overview.mdx";

export const metadata = {
  title: getTitle("Overview"),
};

export default function Page() {
  return <Overview />;
}
