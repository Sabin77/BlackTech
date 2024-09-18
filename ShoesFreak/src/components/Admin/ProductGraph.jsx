import React, { useState, useEffect, useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// const chartData = [
//   { date: "2024-04-01", stockin: 222, stockout: 150 },
//   { date: "2024-04-02", stockin: 97, stockout: 180 },
//   { date: "2024-04-03", stockin: 167, stockout: 120 },
//   { date: "2024-04-04", stockin: 242, stockout: 260 },
//   { date: "2024-04-05", stockin: 373, stockout: 290 },
//   { date: "2024-04-06", stockin: 301, stockout: 340 },
//   { date: "2024-04-07", stockin: 245, stockout: 180 },
//   { date: "2024-04-08", stockin: 409, stockout: 320 },
//   { date: "2024-04-09", stockin: 59, stockout: 110 },
//   { date: "2024-04-10", stockin: 261, stockout: 190 },
//   { date: "2024-04-11", stockin: 327, stockout: 350 },
//   { date: "2024-04-12", stockin: 292, stockout: 210 },
//   { date: "2024-04-13", stockin: 342, stockout: 380 },
//   { date: "2024-04-14", stockin: 137, stockout: 220 },
//   { date: "2024-04-15", stockin: 120, stockout: 170 },
//   { date: "2024-04-16", stockin: 138, stockout: 190 },
//   { date: "2024-04-17", stockin: 446, stockout: 360 },
//   { date: "2024-04-18", stockin: 364, stockout: 410 },
//   { date: "2024-04-19", stockin: 243, stockout: 180 },
//   { date: "2024-04-20", stockin: 89, stockout: 150 },
//   { date: "2024-04-21", stockin: 137, stockout: 200 },
//   { date: "2024-04-22", stockin: 224, stockout: 170 },
//   { date: "2024-04-23", stockin: 138, stockout: 230 },
//   { date: "2024-04-24", stockin: 387, stockout: 290 },
//   { date: "2024-04-25", stockin: 215, stockout: 250 },
//   { date: "2024-04-26", stockin: 75, stockout: 130 },
//   { date: "2024-04-27", stockin: 383, stockout: 420 },
//   { date: "2024-04-28", stockin: 122, stockout: 180 },
//   { date: "2024-04-29", stockin: 315, stockout: 240 },
//   { date: "2024-04-30", stockin: 454, stockout: 380 },
//   { date: "2024-05-01", stockin: 165, stockout: 220 },
//   { date: "2024-05-02", stockin: 293, stockout: 310 },
//   { date: "2024-05-03", stockin: 247, stockout: 190 },
//   { date: "2024-05-04", stockin: 385, stockout: 420 },
//   { date: "2024-05-05", stockin: 481, stockout: 390 },
//   { date: "2024-05-06", stockin: 498, stockout: 520 },
//   { date: "2024-05-07", stockin: 388, stockout: 300 },
//   { date: "2024-05-08", stockin: 149, stockout: 210 },
//   { date: "2024-05-09", stockin: 227, stockout: 180 },
//   { date: "2024-05-10", stockin: 293, stockout: 330 },
//   { date: "2024-05-11", stockin: 335, stockout: 270 },
//   { date: "2024-05-12", stockin: 197, stockout: 240 },
//   { date: "2024-05-13", stockin: 197, stockout: 160 },
//   { date: "2024-05-14", stockin: 448, stockout: 490 },
//   { date: "2024-05-15", stockin: 473, stockout: 380 },
//   { date: "2024-05-16", stockin: 338, stockout: 400 },
//   { date: "2024-05-17", stockin: 499, stockout: 420 },
//   { date: "2024-05-18", stockin: 315, stockout: 350 },
//   { date: "2024-05-19", stockin: 235, stockout: 180 },
//   { date: "2024-05-20", stockin: 177, stockout: 230 },
//   { date: "2024-05-21", stockin: 82, stockout: 140 },
//   { date: "2024-05-22", stockin: 81, stockout: 120 },
//   { date: "2024-05-23", stockin: 252, stockout: 290 },
//   { date: "2024-05-24", stockin: 294, stockout: 220 },
//   { date: "2024-05-25", stockin: 201, stockout: 250 },
//   { date: "2024-05-26", stockin: 213, stockout: 170 },
//   { date: "2024-05-27", stockin: 420, stockout: 460 },
//   { date: "2024-05-28", stockin: 233, stockout: 190 },
//   { date: "2024-05-29", stockin: 78, stockout: 130 },
//   { date: "2024-05-30", stockin: 340, stockout: 280 },
//   { date: "2024-05-31", stockin: 178, stockout: 230 },
//   { date: "2024-06-01", stockin: 178, stockout: 200 },
//   { date: "2024-06-02", stockin: 470, stockout: 410 },
//   { date: "2024-06-03", stockin: 103, stockout: 160 },
//   { date: "2024-06-04", stockin: 439, stockout: 380 },
//   { date: "2024-06-05", stockin: 88, stockout: 140 },
//   { date: "2024-06-06", stockin: 294, stockout: 250 },
//   { date: "2024-06-07", stockin: 323, stockout: 370 },
//   { date: "2024-06-08", stockin: 385, stockout: 320 },
//   { date: "2024-06-09", stockin: 438, stockout: 480 },
//   { date: "2024-06-10", stockin: 155, stockout: 200 },
//   { date: "2024-06-11", stockin: 92, stockout: 150 },
//   { date: "2024-06-12", stockin: 492, stockout: 420 },
//   { date: "2024-06-13", stockin: 81, stockout: 130 },
//   { date: "2024-06-14", stockin: 426, stockout: 380 },
//   { date: "2024-06-15", stockin: 307, stockout: 350 },
//   { date: "2024-06-16", stockin: 371, stockout: 310 },
//   { date: "2024-06-17", stockin: 475, stockout: 520 },
//   { date: "2024-06-18", stockin: 107, stockout: 170 },
//   { date: "2024-06-19", stockin: 341, stockout: 290 },
//   { date: "2024-06-20", stockin: 408, stockout: 450 },
//   { date: "2024-06-21", stockin: 169, stockout: 210 },
//   { date: "2024-06-22", stockin: 317, stockout: 270 },
//   { date: "2024-06-23", stockin: 480, stockout: 530 },
//   { date: "2024-06-24", stockin: 132, stockout: 180 },
//   { date: "2024-06-25", stockin: 141, stockout: 190 },
//   { date: "2024-06-26", stockin: 434, stockout: 380 },
//   { date: "2024-06-27", stockin: 448, stockout: 490 },
//   { date: "2024-06-28", stockin: 149, stockout: 200 },
//   { date: "2024-06-29", stockin: 103, stockout: 160 },

//   { date: "2024-06-30", stockin: 446, stockout: 400 },
// ];

const chartConfig = {
  views: {
    label: "Total Products",
  },
  stockin: {
    label: "Stock In",
    color: "#63aa86",
  },
  stockout: {
    label: "Stock Out",
    color: "#d14504 ",
  },
};

export default function ProductGraph() {
  const [activeChart, setActiveChart] = useState("stockin");
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the last 3 months of data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/stock/getstockquantities",
          {
            headers: {
              Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
            },
          }
        );
        console.log(response.data);

        setChartData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const total = useMemo(
    () => ({
      stockin: chartData.reduce((acc, curr) => acc + curr.stockIn, 0),
      stockout: chartData.reduce((acc, curr) => acc + curr.stockOut, 0),
    }),
    []
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Product Flow</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["stockin", "stockout"].map((key) => {
            return (
              <button
                key={key}
                data-active={activeChart === key}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(key)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[key].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart data={chartData} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
