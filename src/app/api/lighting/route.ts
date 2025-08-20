import { lightingBodyFourth, lightingBodyThird } from '@/allData/lightingPageData';
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
      lightingBodyFourth,
      lightingBodyThird,
    });
}