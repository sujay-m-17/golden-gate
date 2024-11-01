import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function OrderOnline() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <>
            <div className="max-w-full w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-transparent backdrop-blur-[2px] dark:bg-black">
                <h2 className="font-bold font-heading text-[20px] text-[#ebd049] dark:text-neutral-200">
                    Personal Information
                </h2>
                <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                </p>

                <form className="my-8 font-heading" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input id="firstname" className="font-primary" placeholder="Tyler" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" className="font-primary" placeholder="projectmayhem@fc.com" type="email" />
                    </LabelInputContainer>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                    <LabelInputContainer className="mb-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" className="font-primary" placeholder="(123) 456-7890" type="tel" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" className="font-primary" placeholder="Jordan" type="text" />
                    </LabelInputContainer>
                    </div>
                    <h2 className="font-bold text-[20px] text-[#ebd049] dark:text-neutral-200">
                        Product Details
                    </h2>
                    <br />
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="brand">Brand</Label>
                            <Input id="brand" className="font-primary" placeholder="Gadro" type="text" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                        <Label htmlFor="description">Description</Label>
                        <Input id="description" className="font-primary" placeholder="Product Variant Info" type="text" />
                    </LabelInputContainer>
                    </div>
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                        <LabelInputContainer>
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input id="quantity" className="font-primary" placeholder="1" type="number" />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4">
                        <Label htmlFor="weight">Weight</Label>
                        <Input id="weight" className="font-primary" placeholder="25kg" type="text" />
                    </LabelInputContainer>
                    </div>
                
                    <button
                        className="bg-gradient-to-br relative font-button font-[700] group/btn from-gray-500 to-black w-full text-white rounded-[50px] h-10"
                        type="submit"
                    >
                        Submit
                        <BottomGradient />
                    </button>

                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

                    {/* <div className="flex flex-col space-y-4">
                        <button
                            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                GitHub
                            </span>
                            <BottomGradient />
                        </button>
                        <button
                            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Google
                            </span>
                            <BottomGradient />
                        </button>
                        <button
                            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                            type="submit"
                        >
                            <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                OnlyFans
                            </span>
                            <BottomGradient />
                        </button>
                    </div> */}
                </form>
            </div>
        </>
    )
}

const BottomGradient = () => {
    return (
      <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-[#f8f06b] to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-[#f8f06b] to-transparent" />
      </>
    );
};

const LabelInputContainer = ({
    children,
    className,
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };