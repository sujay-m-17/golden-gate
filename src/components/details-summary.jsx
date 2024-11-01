import { React } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DetailsSummary() {
    return (
        <>
            <div className="summary__wrapper py-[5rem]">
                <h2 className="font-heading text-[30px] text-center capitalize text-[black]">Why Develop Private Brands?
                </h2>
                <div className="flex justify-center py-[2rem]">
                    <Accordion type="single" collapsible className="w-[40%]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="font-heading text-[20px] no-underline">Control</AccordionTrigger>
                            <AccordionContent className="font-primary">
                            A retailer will have a much greater degree of control over quality and marketing of private products because it develops them.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="font-heading text-[20px] no-underline">Profit Margin</AccordionTrigger>
                            <AccordionContent className="font-primary">
                            Private product brands tend to have a higher profit margin compared to name brands. Image: Retailers can create a unique name for their retail establishment with their private brands.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className="font-heading text-[20px] no-underline">Loyalty</AccordionTrigger>
                            <AccordionContent className="font-primary">
                                It’s possible to improve customer loyalty because of the exculsivity of private brands.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
}