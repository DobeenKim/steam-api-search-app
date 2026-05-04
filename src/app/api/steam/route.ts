import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://steamspy.com/api.php?request=top100in2weeks');
    const data = await res.json();
    return NextResponse.json(data);
}


//route.ts의 fetch: Next.js 서버 -> 스팀 서버 (데이터 원본 확보)
// TopGames.tsx의 fetch: 브라우저 -> 내 Next.js 서버 (가져온 데이터 수령)