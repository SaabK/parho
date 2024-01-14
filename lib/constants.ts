import { headers } from "next/headers";

const headersList = headers();

export const apiURL = headersList.get("referer");
