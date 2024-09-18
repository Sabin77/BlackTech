import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import { format } from "date-fns";
import axios from "axios"; // Import axios

export default function ProductLineChart() {
  const [chartData, setChartData] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch stock-in and stock-out data using axios
        const stockInResponse = await axios.get(
          "https://your-api-endpoint.com/stock-in"
        );
        const stockOutResponse = await axios.get(
          "https://your-api-endpoint.com/stock-out"
        );

        const stockInData = stockInResponse.data;
        const stockOutData = stockOutResponse.data;

        // Process the stock-in data
        const stockInFormatted = stockInData.map((item) => ({
          day: format(new Date(item.date), "EEEE"), // Get the day of the week
          quantity_in: item.quantity_in,
        }));

        // Process the stock-out data
        const stockOutFormatted = stockOutData.map((item) => ({
          day: format(new Date(item.date), "EEEE"),
          quantity_out: item.quantity_out,
        }));

        // Combine stock-in and stock-out data by weekday
        const combinedData = stockInFormatted.map((stockInItem) => {
          const stockOutItem = stockOutFormatted.find(
            (outItem) => outItem.day === stockInItem.day
          );

          return {
            day: stockInItem.day,
            quantity_in: stockInItem.quantity_in,
            quantity_out: stockOutItem ? stockOutItem.quantity_out : 0,
          };
        });

        setChartData(combinedData);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="stock-chart">
      <h2>Stock In and Stock Out</h2>
      <p>Stock changes by weekday</p>
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <Tooltip />
        <Bar dataKey="quantity_in" fill="#8884d8" />
        <Bar dataKey="quantity_out" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
