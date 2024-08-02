import React from "react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
function OrdersChart({ chartData }) {
  const chartConfig = {
    orders: {
      label: "Orders",
      color: "hsl(var(--chart-1))",
    },
    bookings: {
      label: "Bookings",
      color: "hsl(var(--chart-2))",
    },
  };
  return (
    <Card className={"w-full"}>
      <CardHeader>
        <CardDescription>Showing total bookings and orders for the last 6 weeks</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className={"h-[210px] w-full"} config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            height={12}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={true} axisLine={true} tickMargin={8} tickFormatter={(value) => value} />
            <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillOrders" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-orders)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-orders)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-bookings)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-bookings)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area dataKey="bookings" type="natural" fill="url(#fillBookings)" fillOpacity={0.4} stroke="var(--color-bookings)" stackId="a" />
            <Area dataKey="orders" type="natural" fill="url(#fillOrders)" fillOpacity={0.4} stroke="var(--color-orders)" stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default OrdersChart;
