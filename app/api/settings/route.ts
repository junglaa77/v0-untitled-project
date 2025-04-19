import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const settingsPath = path.join(process.cwd(), 'settings.json');

export async function GET() {
  const data = fs.readFileSync(settingsPath, 'utf-8');
  return NextResponse.json(JSON.parse(data));
}

export async function POST(req) {
  const body = await req.json();
  const data = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'));
  data[body.key] = body.value;
  fs.writeFileSync(settingsPath, JSON.stringify(data, null, 2));
  return NextResponse.json({ status: 'ok' });
}
