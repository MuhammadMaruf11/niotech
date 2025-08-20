import { climateBodyFifth, climateBodyThird, climateData } from "@/allData/climateData";

import { NextResponse } from "next/server"; 

export async function GET() {
      return NextResponse.json({
        climateBodyFifth,
        climateBodyThird,
        climateData,
      });
}