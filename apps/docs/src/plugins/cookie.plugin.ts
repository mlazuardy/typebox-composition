import { withPrefix } from "@/utils/cookie.util";
import Cookies from "js-cookie";

export const $cookie = {
  set(key: string, value: any, options?: Cookies.CookieAttributes) {
    return Cookies.set(withPrefix(key), value, options);
  },
  get(key: string) {
    return Cookies.get(withPrefix(key));
  },
};
