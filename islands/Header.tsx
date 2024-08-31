import { useSignal } from "@preact/signals";
import { useScroll } from "site/hooks/useScroll.ts";
import { JSX } from "preact";

export interface HeaderProps {
    children: JSX.Element;
}

export default function Header(props: HeaderProps) {
    const isScrolled = useSignal<"down" | "up" | "">("");

    useScroll({
        onScrollDown: () => {
            isScrolled.value = "down";
        },
        onScrollUp: () => {
            isScrolled.value = "up";
        },
    });

    return (
        <>
            <header
                style={{ backgroundColor: "red" }}
                className={`fixed left-0 right-0 z-50 py-4 transition-all duration-300 ease-in-out ${
                    isScrolled.value === "down" ? "-top-full" : "top-0"
                }`}
            >
                {props.children}
            </header>
        </>
    );
}
