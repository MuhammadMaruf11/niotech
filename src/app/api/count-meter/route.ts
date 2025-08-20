import { countMeterData } from "@/allData/countMeterData";
import { NextResponse } from "next/server"; 

export async function GET() {
      return NextResponse.json({
        countMeterData,
      });
}