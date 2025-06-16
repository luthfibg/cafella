import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: React.ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
    return (
        <div className={clsx(className, "w-full rounded-xl bg-white dark:bg-dark-choco-900")}>
            {children}
        </div>
    );
}