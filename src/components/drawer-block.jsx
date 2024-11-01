import { React, useState } from "react"
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
    {
        text: "",
        message: "I am pleased to welcome you to the website of our Golden Gate Dairy Manufacturing Company By browsing our website, you will be able to get acquainted with our history and our most important achievements, as well as see the latest products and services that we offer. This site also allows you to take a closer look at the values that our company has adopted since its foundation. We are always proud of all the accomplishments and successes we have achieved, and we strive to continue the path of progress and growth, keeping the future in mind and based on a set of pillars and best practices with a focus on achieving sustainable growth, and from this standpoint, we harness all our capabilities to support and develop our human cadres in all its categories, which is our primary capital with continued full commitment to our customers and the communities we serve. And today we continue to set the standards for leadership and excellence in work. We are still working for development and growth to continue the path of progress and success. Once again ... Welcome to our site.General Manager"
    }
]

const message = "I am pleased to welcome you to the website of our Golden Gate Dairy Manufacturing Company By browsing our website, you will be able to get acquainted with our history and our most important achievements, as well as see the latest products and services that we offer. This site also allows you to take a closer look at the values that our company has adopted since its foundation. We are always proud of all the accomplishments and successes we have achieved, and we strive to continue the path of progress and growth, keeping the future in mind and based on a set of pillars and best practices with a focus on achieving sustainable growth, and from this standpoint, we harness all our capabilities to support and develop our human cadres in all its categories, which is our primary capital with continued full commitment to our customers and the communities we serve. And today we continue to set the standards for leadership and excellence in work. We are still working for development and growth to continue the path of progress and success. Once again ... Welcome to our site.General Manager"

export function DrawerBlock() {
    return (
        <>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button className="bg-transparent text-black font-[700] p-0 hover:bg-transparent underline underline-offset-[5px]" >Manager's Note</Button >
                </DrawerTrigger>
                <DrawerContent>
                    <div className="mx-auto w-full">
                        <DrawerHeader>
                            <DrawerTitle className="font-heading text-[30px]">Message From our Manager</DrawerTitle>
                            <DrawerDescription className="font-primary">Hear from him.</DrawerDescription>
                        </DrawerHeader>
                        <div className="p-4 pb-0">
                            <div className="flex items-center justify-center space-x-2">
                                <div className="font-primary text-[16px] leading-[150%] tracking-[1px]">
                                    I am pleased to welcome you to the website of our Golden Gate Dairy Manufacturing Company By browsing our website, you will be able to get acquainted with our history and our most important achievements, as well as see the latest products and services that we offer. This site also allows you to take a closer look at the values that our company has adopted since its foundation. We are always proud of all the accomplishments and successes we have achieved, and we strive to continue the path of progress and growth, keeping the future in mind and based on a set of pillars and best practices with a focus on achieving sustainable growth, and from this standpoint, we harness all our capabilities to support and develop our human cadres in all its categories, which is our primary capital with continued full commitment to our customers and the communities we serve. And today we continue to set the standards for leadership and excellence in work. We are still working for development and growth to continue the path of progress and success. Once again ... <br /> Welcome to our site.General Manager
                                </div>
                            </div>
                        </div>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button className="button--primary rounded-[50px] font-button font-[700]">Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
        </>
    )
}