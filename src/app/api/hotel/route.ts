import { hotelBodyFifth, hotelBodyFirst, hotelBodyFourth, hotelBodySecond, hotelBodySixth, hotelBodyThird, hotelHeadingFirst, hotelHeadingSecond } from "@/allData/hotelPageData";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
      hotelBodyFifth,
      hotelBodyFirst,
      hotelBodyFourth,
      hotelBodySecond,
      hotelBodySixth,
      hotelBodyThird,
      hotelHeadingFirst,
      hotelHeadingSecond,
    });
}