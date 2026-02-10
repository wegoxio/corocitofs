import { cn } from "@/lib/utils"

type ContainerProps = {
    children: React.ReactNode
    className?: string
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div className={cn("mx-auto w-full max-w-[1760px] px-6 md:px-10 lg:px-12", className)}>
            {children}
        </div>
    )
}
