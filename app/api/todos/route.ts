import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/libs/pg-client";

export const GET = async (req: NextRequest) => {
  const todos = await client.query("select * from todos");
  return NextResponse.json(todos.rows);
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();
  const name = body.name;
  const newTodo = {
    id: nanoid(),
    name,
    checked: false,
  };
  await client.query("insert into todos (id,name) values ($1,$2)", [newTodo.id, newTodo.name]);

  return NextResponse.json(newTodo);
  // const testData = await client.query("insert into test (name) values ($1) RETURNING *", [name]);
  // return NextResponse.json(testData.rows);
};
