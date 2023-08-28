import { getTitle } from "@/shared/shared-metadata";
import HookForm from "./HookForm.mdx";

export const metadata = {
  title: getTitle("React Hook Form"),
};

export default function Page() {
  return <HookForm />;
}
