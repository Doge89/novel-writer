import {NodeWithChildrenProps} from "@/app/_typescript/props/base.props";

export default function RootContainer({ children }: NodeWithChildrenProps<unknown>) {
    return (
        <main className="relative w-screen h-screen flex flex-row flex-1">
            {children}
        </main>
    )
}