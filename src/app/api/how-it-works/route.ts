import { howItWorksData } from "@/allData/howItWorksData";
import { NextResponse } from "next/server"; 

export async function GET() {
      return NextResponse.json({
        howItWorksData,
      });
}