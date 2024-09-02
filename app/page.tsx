"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IIvS5HshB2m
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { CiImageOn } from "react-icons/ci";
import { Input } from "@/components/ui/input";


export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });
  return (
    <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
      <div className="bg-neutral-950 hidden md:flex flex-col gap-2 text-white">
        <div className="sticky top-0 p-2">
          <Button
            variant="ghost"
            className="w-full text-left px-2 justify-start p hover:bg-neutral-900 hover:text-neutral-50 gap-2"
          >
            <div className="rounded-full bg-white text-black flex items-center justify-center w-7 h-7">
              <BotIcon className="h-4 w-4" />
            </div>
            <div className="grow text-ellipsis overflow-hidden whitespace-nowrap text-sm">
              MariGPT
            </div>
            <PenIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-auto flex-1">
          <div className="grid gap-1 p-2">
            <div className="text-stone-500 text-xs font-medium px-2">Today</div>
            <Link
              href="#"
              className="truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block bg-neutral-900 hover:bg-neutral-900 hover:text-neutral-50"
              prefetch={false}
            >
              Como utilizar o modelo de IA do Google
            </Link>
            <Link
              href="#"
              className="truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block hover:bg-neutral-900 hover:text-neutral-50"
              prefetch={false}
            >
              Como fazer um chatbot com React
            </Link>
            <Link
              href="#"
              className="truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block hover:bg-neutral-900 hover:text-neutral-50"
              prefetch={false}
            >
              Como fazer filé à parmegiana
            </Link>
          </div>
          <div className="grid gap-1 p-2">
            <div className="text-stone-500 text-xs font-medium px-2">
              Yesterday
            </div>
            <Link
              href="#"
              className="truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block hover:bg-neutral-900 hover:text-neutral-50"
              prefetch={false}
            >
              Explique detalhadamente sobre árvores AVL
            </Link>
            <Link
              href="#"
              className="truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block hover:bg-neutral-900 hover:text-neutral-50"
              prefetch={false}
            >
              Descreva propriedades da função ReLU
            </Link>
            <Link
              href="#"
              className="truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block hover:bg-neutral-900 hover:text-neutral-50"
              prefetch={false}
            >
              O que são os neurônios em uma rede neural
            </Link>
            <Link
              href="#"
              className="truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block hover:bg-neutral-900 hover:text-neutral-50"
              prefetch={false}
            >
              O que é uma rede desbalanceada
            </Link>
            <Link
              href="#"
              className="truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block hover:bg-neutral-900 hover:text-neutral-50"
              prefetch={false}
            >
              Quais as funções utilizar para redes com dados binários
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="sticky top-0 p-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="gap-1 rounded-xl px-3 h-10 data-[state=open]:bg-neutral-100 text-lg"
              >
                MariGPT <span className="text-neutral-600">4.0</span>
                <ChevronDownIcon className="w-4 h-4 text-neutral-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="max-w-[300px]">
              <DropdownMenuItem className="items-start gap-2">
                <SparkleIcon className="w-4 h-4 mr-2 shrink-0 translate-y-1" />
                <div>
                  <div className="font-medium">GPT-4</div>
                  <div className="text-stone-600">
                    With DALL-E, browing and analysis. Limit 40 messages / 3
                    hours
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="items-start gap-2">
                <ZapIcon className="w-4 h-4 mr-2 shrink-0 translate-y-1" />
                <div>
                  <div className="font-medium">GPT-3</div>
                  <div className="text-stone-600">Great for everyday tasks</div>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="max-w-2xl flex-1 mx-auto flex flex-col items-start gap-8 px-4">
          {messages.map((message) =>
            message.role === "assistant" ? (
              <div key={message.id} 
              className="flex items-start gap-4 max-w-full">
                <Avatar className="border w-6 h-6">
                  <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-bold">MariGPT</div>
                  <div className="prose prose-stone">
                    <p>{message.content}</p>
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    >
                      <ClipboardIcon className="w-4 h-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    >
                      <ThumbsUpIcon className="w-4 h-4" />
                      <span className="sr-only">Upvote</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    >
                      <ThumbsDownIcon className="w-4 h-4" />
                      <span className="sr-only">Downvote</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
                    >
                      <RefreshCcwIcon className="w-4 h-4" />
                      <span className="sr-only">Regenerate</span>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div key={message.id} className="flex items-start gap-4 relative max-w-[70%] rounded-3xl px-4 py-2.5 bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
                <Avatar className="border w-6 h-6">
                  <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-bold">Mariana Andrade</div>
                  <div className="prose prose-stone">
                    <p>{message.content}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        <form onSubmit={handleSubmit} 
          className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-white dark:bg-gray-950">
          <div className="relative">
            <Textarea
              placeholder="Message ChatGPT..."
              name="message"
              id="message"
              rows={1}
              value={input}
              onChange={handleInputChange}
              className="min-h-[48px] rounded-2xl resize-none p-4 border border-gray-200 border-neutral-400 shadow-sm pr-16 dark:border-gray-800"
            />
            <Button
              type="submit"
              size="icon"
              className="absolute top-3 right-3 w-8 h-8"
              disabled = {!input}
            >
              <ArrowUpIcon className="w-4 h-4" />
              <span className="sr-only">Send</span>
            </Button>
            {/* <form>
            <Input type="file" name="file" accept=".png"/>
            <Button
              type="submit"
              size="icon"
              className="absolute top-3 right-12 w-8 h-8"
            >
              <CiImageOn className="w-4 h-4"/>
              <span className="sr-only">Send</span>
            </Button>
            </form> */}
          </div>
          <p className="text-xs text-center text-neutral-700 font-medium">
            ChatGPT can make mistakes. Consider checking important information.
          </p>
        </form>
      </div>
    </div>
  );
}

function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function BotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function ChevronDownIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ClipboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function PenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}

function RefreshCcwIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 16h5v5" />
    </svg>
  );
}

function SparkleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}

function ThumbsDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 14V2" />
      <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
    </svg>
  );
}

function ThumbsUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function ZapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}
