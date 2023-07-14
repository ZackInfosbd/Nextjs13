import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = 'https://jsonplaceholder.typicode.com/todos';

const API_KEY: string = process.env.DATA_API_KEY! as string;

export async function GET(request: Request) {
  const origin = request.headers.get('origin');

  const res = await fetch(DATA_SOURCE_URL, {
    headers: {},
  });

  const todos: Todo[] = await res.json();

  // return NextResponse.json(todos);

  // apply CORS from middleware.ts
  return new NextResponse(JSON.stringify(todos), {
    headers: {
      'Access-Control-Allow-Origin': origin || '*',
      'Content-Type': 'application/json',
    },
  });
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: 'Todo id is required!' });

  await fetch(`${DATA_SOURCE_URL}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': API_KEY,
    },
  });

  return NextResponse.json({ message: `Todo ${id} deleted` });
}

export async function POST(request: Request) {
  const { userId, title, completed } = await request.json();

  if (!userId || !title || typeof completed !== 'boolean')
    return NextResponse.json({
      message: 'Title and user id and status of completion are required',
    });

  const res = await fetch(DATA_SOURCE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      API_Key: API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  const todo = await res.json();

  return NextResponse.json({
    message: `sucess`,
    body: todo,
  });
}

export async function PATCH(request: Request) {
  const { userId, id, title }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: 'Todo id is required!' });

  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      API_Key: API_KEY,
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const updatedTodo = await res.json();

  return NextResponse.json({
    message: 'sucess',
    body: updatedTodo,
  });
}
