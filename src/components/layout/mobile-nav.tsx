import { Box, Home, Settings, BarChart3 } from "lucide-react"
import Link from "next/link"

export function MobileNav() {
    return (
        <div className="fixed bottom-0 z-50 w-full border-t bg-background p-2 pb-4 md:hidden">
            <div className="grid grid-cols-4 gap-1">
                <Link
                    href="/"
                    className="flex flex-col items-center justify-center space-y-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                    <Home className="h-5 w-5" />
                    <span className="text-[10px]">Home</span>
                </Link>
                <Link
                    href="/inventory"
                    className="flex flex-col items-center justify-center space-y-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                    <Box className="h-5 w-5" />
                    <span className="text-[10px]">Stock</span>
                </Link>
                <Link
                    href="/reports"
                    className="flex flex-col items-center justify-center space-y-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                    <BarChart3 className="h-5 w-5" />
                    <span className="text-[10px]">Reports</span>
                </Link>
                <Link
                    href="/settings"
                    className="flex flex-col items-center justify-center space-y-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                    <Settings className="h-5 w-5" />
                    <span className="text-[10px]">Settings</span>
                </Link>
            </div>
        </div>
    )
}
