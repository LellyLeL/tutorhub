"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

type Props = {
    role: "student" | "tutor";
    onBack: () => void;
}

export function LoginForm({ role, onBack }: Props) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="w-full max-w-md mx-auto space-y-4">
            <div className="text-center space-y-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Login</h1>
              <p className="text-gray-600">Sign in to your TutorHub account</p>
            </div>

            <Card className="w-full bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-gray-900">Login to your account</CardTitle>
        <CardDescription className="text-gray-600">
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link" className="text-blue-600 hover:text-blue-700">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="abc@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
    <Button variant="outline" className="w-full bg-white" onClick={onBack}>Back</Button>

        <p className="text-sm text-gray-600 text-center">
          Create an account?{" "}
          <Link href={`/signup/${role}`} className="text-blue-600 hover:text-blue-700 font-medium hover:underline">
            Sign up
          </Link>
        </p>
        </div>
    );
}






