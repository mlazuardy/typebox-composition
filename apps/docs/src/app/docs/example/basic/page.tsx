import { getTitle } from "@/shared/shared-metadata";
import BasicExample from "./BasicExample.mdx";

export const metadata = {
  title: getTitle("Basic Example"),
};

export default function Page() {
  return <BasicExample />;
}
