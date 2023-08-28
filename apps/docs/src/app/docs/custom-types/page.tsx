import { getTitle } from "@/shared/shared-metadata";
import CustomTypeOverview from "./CustomTypeOverview.mdx";

export const metadata = {
  title: getTitle("Custom Types"),
};

export default function Page() {
  return <CustomTypeOverview />;
}
