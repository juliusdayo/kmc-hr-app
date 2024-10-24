"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Index = () => {
  return (
    <div className="flex w-full h-lvh bg-blue-900 flex-col font-Inter text-center">
        <Card className="w-1/3 self-end h-lvh flex justify-center items-center flex-col radius ">
        <CardHeader>
          <div className=" font-bold text-3xl text-[#F99D3A]">KMC</div>
          <CardTitle className="font-bold  text-2xl text-[#757575] " >Login to your account</CardTitle>
          <CardDescription className=" font-semibold text-[#757575]" >Welcome back! select a method to login</CardDescription>
        </CardHeader>
        <CardContent   className=" w-full p-10">
          <form>
            <div className="grid w-full items-center gap-6  ">
              <div className="flex flex-col space-y-1.5">

                <Input id="name" placeholder="Email" />
              </div>
              <div className="flex flex-col space-y-1.5">

                <Input id="password" type="password" placeholder="Password" />
              </div>
              <div className="flex flex-col space-y-1.5">

                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Client</SelectItem>
                    <SelectItem value="sveltekit">Candidate</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between w-full px-10">
          <Button className="w-full text-white bg-[#F99D3A]">
          <a href="/client">LOG IN</a></Button>
        </CardFooter>
      </Card>
    </div>

  )
}
export default Index;
