import { NextRequest } from 'next/server';
import { comments } from './data';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query');
  const filteredComment = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return new Response(
    `${filteredComment
      .map(
        (comment) =>
          `<p>` + comment.id + `</p> ` + `` + `<h4>` + comment.text + `</h4>`
      )
      .join(` `)}`,
    {
      headers: { 'Content-Type': 'text/html' },
    }
  );
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newcomment = {
    id: comments.length + 1,
    ...comment,
  };
  comments.push(newcomment);
  return Response.json(JSON.stringify(newcomment), {
    headers: { 'content-type': 'application/json' },
    status: 201,
  });
}
