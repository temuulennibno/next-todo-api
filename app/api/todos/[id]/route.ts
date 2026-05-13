import { NextRequest, NextResponse } from "next/server";
import { TodoModel } from "../todo-model";
import mongoose from "mongoose";

export const DELETE = async (req: NextRequest, { params }: { params: Promise<{ id: string }> }) => {
  await mongoose.connect(process.env.DATABASE_URL || "");
  const { id } = await params;
  const deletingItem = await TodoModel.findById(id);

  if (!deletingItem) {
    return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  }
  await TodoModel.deleteOne({ _id: id });
  return NextResponse.json(deletingItem);
};
