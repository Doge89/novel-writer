import {NodeWithChildrenProps} from "@/app/_typescript/props/base.props";

export default function FormContainer({ children }: NodeWithChildrenProps<unknown>) {
    return (
        <form className='w-full flex flex-col gap-4'>
            {children}
        </form>
    );
}