import { sectionBodyFifth, sectionBodyFirst, sectionBodyFourth, sectionBodySecond, sectionBodySixth, sectionBodyThird, sectionHeadingFirst, sectionHeadingSecond } from "@/allData/buildingPageData";
import { NextResponse } from "next/server"; 

export async function GET() {
      return NextResponse.json({
        sectionHeadingFirst,
        sectionHeadingSecond,
        sectionBodyFirst,
        sectionBodySecond,
        sectionBodyThird,
        sectionBodyFourth,
        sectionBodyFifth,
        sectionBodySixth,
      });
}