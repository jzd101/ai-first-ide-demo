import { Avatar, User } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center px-4">
                <div className="mr-4 hidden md:flex">
                    <a className="mr-6 flex items-center space-x-2" href="/">
                        <span className="hidden font-bold sm:inline-block">
                            ☕ Coffee Inventory
                        </span>
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search or Title for Mobile */}
                        <span className="font-bold md:hidden">Inventory App</span>
                    </div>
                    <button className="flex h-9 w-9 items-center justify-center rounded-full border bg-background">
                        <User className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </header>
    )
}
