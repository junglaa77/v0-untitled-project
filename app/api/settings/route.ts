import fs from 'fs';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'settings.json');

export async function GET() {
  const content = fs.readFileSync(filePath, 'utf8');
  return new Response(content, { headers: { 'Content-Type': 'application/json' } });
}

export async function POST(req) {
  const update = await req.json();
  const current = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const merged = { ...current, ...update };
  fs.writeFileSync(filePath, JSON.stringify(merged, null, 2));
  return new Response(JSON.stringify(merged), { headers: { 'Content-Type': 'application/json' } });
}