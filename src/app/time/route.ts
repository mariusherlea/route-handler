export const dynamic = 'force-dynamic';

export async function GET() {
  return new Response(`<h1>${new Date().toLocaleTimeString()}</h1>`, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
