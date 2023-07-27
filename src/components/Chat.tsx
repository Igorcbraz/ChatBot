'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area"

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat Bot</CardTitle>
        <CardDescription>Utilizando a vercel SDK</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96 w-full q-pr-4">
          { messages.map(message => {
            return (
              <div key={message.id} className="flex gap-2 text-slate-600 text-small mt-4">
                { message.role === 'user' && (
                  <Avatar>
                    <AvatarFallback>IG</AvatarFallback>
                    <AvatarImage src="https://github.com/igorcbraz.png" />
                  </Avatar>
                ) }
                { message.role === 'assistant' && (
                  <Avatar>
                    <AvatarFallback>RS</AvatarFallback>
                    <AvatarImage src="https://github.com/rocketseat.png" />
                  </Avatar>
                ) }
                <p className="leading-relaxed">
                  <span className="block font-bold text-slate-700">
                    { message.role === 'user' ? 'Usuário' : 'AI' }:
                  </span>
                  { message.content }
                </p>
              </div>
            )
          }) }
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Como posso te ajudar ?"
          />
          <Button type="submit">Enviar</Button>
        </form>
      </CardFooter>
    </Card>
  )
}