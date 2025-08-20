import { multimediaBodyFifth, multimediaBodyFourth, multimediaBodyThird, multimediaData } from "@/allData/multimediaData";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    multimediaBodyFifth,
    multimediaBodyFourth,
    multimediaBodyThird,
    multimediaData,
  });
}