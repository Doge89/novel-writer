import { IconButtonProps } from "@/app/_typescript/props/buttons/buttons.props";

export default function IconButton({ onClick, icon, isRounded, borderStyle, width, height }: IconButtonProps) {

    const roundedStyle = isRounded ? 'rounded-full' : 'rounded-xl';

    return (
        <button type='button' className={`${width ? width : ''} ${height ? height : ''} ${roundedStyle} ${borderStyle} flex items-center justify-center`}
            onClick={(e) => onClick({e, data: undefined})}>
            { icon }
        </button>
    )
}