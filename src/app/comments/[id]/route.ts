import { comments } from '../data';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    return new Response(
      `${comments
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

  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );

  if (comment) {
    return new Response(`<p>${comment.id}</p>` + `<h4>${comment.text}</h4>`, {
      headers: { 'Content-Type': 'text/html' },
    });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments.splice(index, 1);
  return Response.json(comments);
}
