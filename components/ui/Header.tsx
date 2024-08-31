import { JSX } from "preact";
import { useScript } from "deco/hooks/useScript.ts";

const onScroll = () => {
    let lastScrollY = globalThis.scrollY;

    const onScroll = () => {
        globalThis.requestAnimationFrame(updateScrollDir);
    };

    const updateScrollDir = () => {
        const scrollY = globalThis.scrollY;
        const isScrollingDown = scrollY > lastScrollY;

        isScrollingDown
            ? updateHeaderClassesOnScrolDown()
            : updateHeaderClassesOnScrollUp(), lastScrollY = scrollY;
    };

    function updateHeaderClassesOnScrolDown() {
        modifyHeaderClassList()
            .add("-top-full");
        modifyHeaderClassList()
            .remove("top-0");
    }

    function updateHeaderClassesOnScrollUp() {
        modifyHeaderClassList().add(
            "top-0",
        );
        modifyHeaderClassList()
            .remove(
                "-top-full",
            );
    }

    function modifyHeaderClassList() {
        return globalThis.document.getElementById("app_header")?.classList!;
    }

    globalThis.addEventListener("scroll", onScroll);
};

export default function HeaderC() {
    const defaultLinks: (JSX.IntrinsicElements["a"] & { key: string })[] = [
        { href: "#", children: "Coleções", key: "collections" },
        { href: "#", children: "Home", key: "home" },
        { href: "#", children: "Promoções", key: "promotions" },
    ];
    return (
        <>
            <div style={{ height: "64px" }}>
                <header
                    id="app_header"
                    className={`bg-primary fixed left-0 right-0 z-50 py-4 transition-all duration-600 ease-in-out`}
                >
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between">
                            <div className="text-2xl font-bold text-primary">
                                Logo
                            </div>
                            <nav className="hidden md:flex space-x-4">
                                {defaultLinks?.map((link) => {
                                    return (
                                        <a
                                            {...link}
                                            className="text-primary hover:text-primary/80 transition-colors"
                                        />
                                    );
                                })}
                            </nav>
                            <button>Get Started</button>
                        </div>
                    </div>
                </header>
            </div>
            <script
                type="module"
                dangerouslySetInnerHTML={{ __html: useScript(onScroll) }}
            />
        </>
    );
}
