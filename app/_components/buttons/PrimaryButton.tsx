import { PrimaryButtonProps } from "@/app/_typescript/props/buttons/buttons.props";

export default function PrimaryButton({ onClick, content, type, disabled }: PrimaryButtonProps) {
    return (
        <button
            className='w-full font-semibold bg-accent-700 text-white p-4 text-center rounded-full outline-none focus:outline-none hover:bg-accent-800 transition'
            type={type}
            disabled={disabled}
            onClick={(e) => onClick({e, data: undefined})}>
            {content}
        </button>
    );
}