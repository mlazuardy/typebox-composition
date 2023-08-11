import { getTitle } from "@/shared/shared-metadata";
import AvailableCustomTypes from "./AvailableCustomTypes.mdx";

export const metadata = {
  title: getTitle("Available Custom Types"),
};

export default function Page() {
  return <AvailableCustomTypes />;
}
