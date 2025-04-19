import fs from 'fs';

// 載入設定
const settings = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

// 判斷啟動模組
if (settings.music) {
  import('./modules/music.js').then(m => m.init());
}

if (settings.ai) {
  import('./modules/ai.js').then(m => m.init());
}

if (settings.weather) {
  import('./modules/weather.js').then(m => m.startForecast(settings.location));
}

if (settings.quake) {
  import('./modules/quake.js').then(m => m.monitor());
}

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
