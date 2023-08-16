import { getTitle } from "@/shared/shared-metadata";
import I18n from "./I18n.mdx";

export const metadata = {
  title: getTitle("Internationalization"),
};

export default function Page() {
  return <I18n />;
}
