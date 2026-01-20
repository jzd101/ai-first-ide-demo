import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScanBarcode, Package, AlertTriangle, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button size="lg" className="h-24 flex-col space-y-2 text-lg">
          <ScanBarcode className="h-8 w-8" />
          <span>Scan Item</span>
        </Button>
        <Button size="lg" variant="secondary" className="h-24 flex-col space-y-2 text-lg">
          <Package className="h-8 w-8" />
          <span>Add Stock</span>
        </Button>
      </div>

      {/* Stats Overview */}
      <h2 className="text-xl font-bold tracking-tight">Overview</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">
              +4 new items this month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-500">3</div>
            <p className="text-xs text-muted-foreground">
              Needs reordering soon
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today Sales</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">฿4,250</div>
            <p className="text-xs text-muted-foreground">
              +12% from yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Mockup */}
      <h2 className="text-xl font-bold tracking-tight">Recent Activity</h2>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-0">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between border-b p-4 last:border-0">
              <div className="flex items-center space-x-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <Package className="h-4 w-4 text-blue-600" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Restocked Arabica Beans</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
              <div className="font-medium text-green-600">+5 kg</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
