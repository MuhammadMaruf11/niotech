import { smartCareBodyFirst, smartCareBodyFourth, smartCareBodySecond, smartCareBodyThird } from "@/allData/smartCarePageData";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    smartCareBodyFirst, smartCareBodyFourth, smartCareBodySecond, smartCareBodyThird,
  });
}