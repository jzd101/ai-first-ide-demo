import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 py-8 text-center bg-muted/20 rounded-lg border-2 border-dashed">
            <div className="rounded-full bg-primary/10 p-4">
                <BarChart3 className="h-8 w-8 text-primary" />
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">Reports Coming Soon</h3>
                <p className="max-w-xs text-sm text-muted-foreground">
                    Detailed analytics and sales reports will be available in the next update.
                </p>
            </div>
        </div>
    );
}
