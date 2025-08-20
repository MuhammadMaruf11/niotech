import { surveillancesBodyFirst, surveillancesBodySecond, surveillancesBodyThird, surveillancesData } from "@/allData/surveillancesData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    surveillancesBodyFirst,
    surveillancesBodySecond,
    surveillancesBodyThird,
    surveillancesData,
  });
}