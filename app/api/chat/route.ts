import { type CoreMessage, streamText } from "ai";
import { google } from "@ai-sdk/google";

export const maxDuration = 30;

export async function POST (req: Request) {
    const {messages}: {messages: CoreMessage[]} = await req.json();

    const result = await streamText({
        model: google("gemini-1.5-pro-latest"),
        system: "You are a helpful assistant",
        messages,
    });

    return result.toAIStreamResponse();
}