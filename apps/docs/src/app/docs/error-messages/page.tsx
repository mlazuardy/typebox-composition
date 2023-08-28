import { getTitle } from "@/shared/shared-metadata";
import ErrorMessages from "./ErrorMessages.mdx";

export const metadata = {
  title: getTitle("Error Messages"),
};

export default function Page() {
  return <ErrorMessages />;
}
