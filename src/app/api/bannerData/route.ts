import { bannerData } from "@/allData/bannerData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    bannerData,
  });
}