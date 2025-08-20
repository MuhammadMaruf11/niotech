import { bannerHomeData } from "@/allData/bannerHomeData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    bannerHomeData,
  });
}
