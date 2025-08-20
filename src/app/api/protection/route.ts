import { protectionBodyFifth, protectionBodyFourth, protectionBodyThird, protectionData } from "@/allData/protectionData";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    protectionBodyFifth,
    protectionBodyFourth,
    protectionBodyThird,
    protectionData,
  });
}