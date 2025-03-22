import React from "react";

export default function FormLabel({
    content,
    ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label className='font-semibold text-complementary-950' {...props}>{ content }</label>
    )
}