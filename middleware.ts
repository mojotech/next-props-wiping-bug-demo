import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
	console.log("MIDDLEWARE!!!", {url: request.url})
}
