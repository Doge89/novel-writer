import FormLabel from "@/app/_components/forms/FormLabel";
import {NodeWithChildrenProps} from "@/app/_typescript/props/base.props";
import {FormSectionProps} from "@/app/_typescript/props/forms/forms.props";

export default function FormSectionContainer({ children, labelContent, htmlFor }: NodeWithChildrenProps<FormSectionProps>) {
    return (
        <div className='w-full flex flex-col items-start justify-start gap-1'>
            <FormLabel content={labelContent} htmlFor={htmlFor} />
            {children}
        </div>
    )
}