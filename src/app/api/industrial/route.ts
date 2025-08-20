import { industrialBodyFifth, industrialBodyFirst, industrialBodyFourth, industrialBodySecond, industrialBodySixth, industrialBodyThird, industrialHeadingFirst, industrialHeadingSecond } from "@/allData/industrialPageData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
      industrialBodyFifth,
      industrialBodyFirst,
      industrialBodyFourth,
      industrialBodySecond,
      industrialBodySixth,
      industrialBodyThird,
      industrialHeadingFirst,
      industrialHeadingSecond,
    });
}