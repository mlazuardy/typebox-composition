import { getTitle } from "@/shared/shared-metadata";
import ReactBasic from "./ReactBasic.mdx";

export const metadata = {
  title: getTitle("React"),
};

export default function Page() {
  return <ReactBasic />;
}
