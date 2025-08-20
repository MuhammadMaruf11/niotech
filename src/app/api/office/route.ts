import { officeBodyFifth, officeBodyFirst, officeBodyFourth, officeBodySecond, officeBodySixth, officeBodyThird, officeHeadingFirst, officeHeadingSecond } from '@/allData/officePageData';

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    officeBodyFifth,
    officeBodyFirst,
    officeBodyFourth,
    officeBodySecond,
    officeBodySixth,
    officeBodyThird,
    officeHeadingFirst,
    officeHeadingSecond,
  });
}