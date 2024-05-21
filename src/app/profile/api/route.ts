import { type NextRequest } from 'next/server';
import { headers, cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  cookies().set('surname', 'Doe');
  const cookie = request.cookies.get('name');

  // console.log(requestHeaders.get('Authorization'));
  // console.log(headerList.get('Authorization'));
  console.log(cookie);
  console.log(request.cookies.get('surname'));
  return new Response('<h1>Profile api data</h1>', {
    headers: {
      'Content-Type': 'text/html',
      'Set-Cookie': 'name=Marius',
    },
  });
}
