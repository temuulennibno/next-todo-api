import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";
import { TodoModel } from "./todo-model";
import mongoose from "mongoose";

export const GET = async (req: NextRequest) => {
  await mongoose.connect(process.env.DATABASE_URL || "");
  const todos = await TodoModel.find();
  return NextResponse.json(todos);
};

export const POST = async (req: NextRequest) => {
  await mongoose.connect(process.env.DATABASE_URL || "");
  const body = await req.json();
  const name = body.name;
  const newTodo = {
    _id: nanoid(),
    name,
    checked: false,
  };
  await TodoModel.create(newTodo);
  return NextResponse.json(newTodo);
};
