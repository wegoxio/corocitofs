"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FormEvent } from "react"

export function ContactForm() {
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // Placeholder: aquí se integrará envío real (email, API, etc.)
        alert("Form submitted! (placeholder)")
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your name" required />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" required />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" rows={4} required />
            </div>

            <Button type="submit" className="mt-2">
                Send
            </Button>
        </form>
    )
}
