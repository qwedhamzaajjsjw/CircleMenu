import { NextResponse } from 'next/server';

const BASE_URL = 'https://api-v2.sp-today.com/api/v1';
const API_KEY = process.env.SPTODAY_API_KEY || '';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'currencies';
  const city = searchParams.get('city') || 'damascus';

  if (!API_KEY) {
    return NextResponse.json({ ok: false, error: 'API key not configured' }, { status: 500 });
  }

  try {
    let url = '';
    if (type === 'currencies') {
      url = `${BASE_URL}/currencies?lang=ar&city=${city}`;
    } else if (type === 'overview') {
      url = `${BASE_URL}/overview?lang=ar`;
    } else if (type === 'gold') {
      url = `${BASE_URL}/gold?lang=ar`;
    }

    const res = await fetch(url, {
      headers: { 'X-API-Key': API_KEY },
      next: { revalidate: 60 }, // cache for 60 seconds
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ ok: false, error: data.error?.message || 'API error' }, { status: res.status });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ ok: false, error: 'Failed to connect to SP-Today API' }, { status: 503 });
  }
}
