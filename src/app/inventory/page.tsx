import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InventoryPage() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold tracking-tight">Stock</h1>
                <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Item
                </Button>
            </div>

            {/* Search & Filter */}
            <div className="flex gap-2">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-8"
                    />
                </div>
                <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                </Button>
            </div>

            {/* Inventory List */}
            <div className="grid gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Card key={i}>
                        <CardContent className="flex items-center justify-between p-4">
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-md bg-muted flex items-center justify-center font-bold text-muted-foreground">
                                    IMG
                                </div>
                                <div>
                                    <p className="font-medium leading-none">Product Name {i}</p>
                                    <p className="text-sm text-muted-foreground">SKU-{1000 + i}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-bold">24</p>
                                <p className="text-xs text-muted-foreground">units</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
