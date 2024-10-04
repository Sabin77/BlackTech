import React, { useEffect, useState } from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import Sidebar from "./Sidebar";
import { FiDollarSign } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import { Barchart } from "./Barchart";
import defaultImg from "../../assets/defprof.jpg";
import Suppliers from "./Suppliers";
import Products from "./Products";
import Settings from "./Settings";
import RecentlyAdded from "./RecentlyAdded";
import { RadialGraph } from "./RadialChart2";
import { RadialChart } from "./RadialChart";
import Addsupplier from "./Addsupplier";
import CustomerGraph from "./ProductGraph";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import CustomerLineChart from "./ProductLineChart";
import CustomerBar from "./ProductBarChart";
import StockIn from "./StockIn";
import StockOut from "./StockOut";
import { Outlet } from "react-router-dom";
import ProductLineChart from "./ProductLineChart";
import ProductBar from "./ProductBarChart";
import ProductGraph from "./ProductGraph";
import Reports from "./Reports";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function Dashboard() {
  const [user, setUser] = useState("");
  const [selectedOption, setSelectedOption] = useState("Dashboard");
  const [totalStockIn, setTotalStockIn] = useState(0);
  const [totalStockOut, setTotalStockOut] = useState(0);
  const [recentSales, setRecentSales] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(async () => {
    const getUserDetails = await axios.get(
      `http://localhost:5000/api/auth/getuser`, // Adjust the endpoint if needed
      {
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
        },
      }
    );
    setUser(response.data);
    console.log(response.data);
  }, []);

  const getStockDetails = async () => {
    try {
      const stockIn = await axios.get(
        `http://localhost:5000/api/stock/getallstockin`, // Adjust the endpoint if needed
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );

      const stockOut = await axios.get(
        `http://localhost:5000/api/stock/getallstockout`, // Adjust the endpoint if needed
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );

      // setReports(stockIn.data);

      // Calculate total stock-in and stock-out quantities
      const totalStockIn = stockIn.data.reduce(
        (total, record) => total + record.quantity_in,
        0
      );
      const totalStockOut = stockOut.data.reduce(
        (total, record) => total + record.quantity_out,
        0
      );

      setTotalStockIn(totalStockIn);
      // console.log(totalStockIn);

      setTotalStockOut(totalStockOut);
      // console.log(totalStockOut);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  const getLastMonthSales = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/stock/getstockoutlastmonth",
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      setRecentSales(response.data);

      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getallsuppliers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/supplier/getallsuppliers",
        {
          headers: {
            Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiMGE3ZTJkY2RkODYyOTVlOTY2ZWM0In0sImlhdCI6MTcyMjg1NTAxNH0.vtAmibJS7KNCGsVjLRINsJkjEJg2T6u4Bxp-WjBpIls`,
          },
        }
      );
      setSuppliers(response.data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLastMonthSales();
    getallsuppliers();
    getStockDetails();
  }, [showModal, showEdit, showDelete]);

  const renderContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return (
          <>
            <div className=" flex px-3 ">
              <div className=" flex flex-col  m-4 w-72 h-36 px-6 bg-white rounded-md shadow-md ">
                <div className=" relative flex items-center mt-4 h-8 font-semibold">
                  {" "}
                  <p>Total revenue</p>
                  <FiDollarSign className="absolute right-3 text-2xl" />
                </div>
                <div className="  h-14">
                  <p className="text-3xl font-bold">$55,000</p>
                  <p className=" text-sm py-1">+20.1% from last month</p>
                </div>
              </div>
              <div className=" flex flex-col m-4 w-72 h-36 px-6 bg-white rounded-md shadow-md ">
                <div className=" relative flex items-center  mt-4 h-8 font-semibold">
                  {" "}
                  <p>Total Users</p>
                  <LuUsers className="absolute right-3 text-2xl" />
                </div>
                <div className="  h-14">
                  <p className="text-3xl font-bold">5,000</p>
                  <p className=" text-sm py-1">+200.1% from last month</p>
                </div>
              </div>

              <div className=" flex flex-col  m-4 w-72 h-36 px-6 bg-white rounded-md shadow-md ">
                <div className=" relative flex items-center  mt-4 h-8 font-semibold">
                  {" "}
                  <p>In</p>
                  <IoArrowDownOutline className="absolute right-3 text-2xl" />
                </div>
                <div className="  h-14">
                  <p className="text-3xl font-bold">{totalStockIn}</p>
                  <p className=" text-sm py-1">+20.1% from last month</p>
                </div>
              </div>

              <div className=" flex flex-col  m-4 w-64 h-36 px-6 bg-white rounded-md shadow-md ">
                <div className=" relative flex items-center  mt-4 h-8 font-semibold">
                  {" "}
                  <p>Out</p>
                  <IoArrowUpOutline className="absolute right-3 text-2xl" />
                </div>
                <div className="  h-14">
                  <p className="text-3xl font-bold">{totalStockOut}</p>
                  <p className=" text-sm py-1">+30.1% from last month</p>
                </div>
              </div>
            </div>
            <div className=" flex px-4 py-1    ">
              <div className="  w-3/5 bg-white mx-3 rounded-lg shadow-md ">
                <Barchart />
              </div>
              <div className="   w-2/5 px-2 bg-white mx-3 rounded-lg shadow-md ">
                <div className="  h-16 p-4">
                  <h1 className=" text-xl font-semibold"> Recent Sales </h1>
                  <p className=" text-gray-500">
                    You made 777 sales this month
                  </p>
                </div>
                <div className=" m-4  overflow-y-scroll ">
                  {recentSales &&
                    recentSales.map((recentSale) => {
                      return (
                        // Add return here
                        <div
                          key={recentSale._id}
                          className="flex items-center h-16 border-b-2 border-[#dbefe5]"
                        >
                          <div className="border-2 h-10 w-10 rounded-full">
                            <img
                              src={defaultImg}
                              alt="Buyer"
                              className="rounded-full"
                            />
                          </div>
                          <div className="flex flex-col justify-center pl-4 w-2/3 h-10">
                            <h2 className="font-semibold">
                              {" "}
                              {recentSale.buyerName}
                            </h2>
                            <p className="text-sm">{recentSale.buyerPhone}</p>
                          </div>
                          <div className="w-28 h-10">
                            <p className="text-center font-semibold">
                              {" "}
                              +Rs.{recentSale.price}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="m-6 ">
              <Tabs defaultValue="supplier" className="w-full">
                <TabsList>
                  <TabsTrigger value="supplier" className=" text-md">
                    Supplier
                  </TabsTrigger>
                  <TabsTrigger value="product" className=" text-md">
                    Product
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="supplier" className=" h-[1000px]">
                  <div className=" flex flex-col space-y-6">
                    <div className=" flex space-x-4 w-full h-[410px] ">
                      <div className=" w-1/2 rounded-lg shadow-md">
                        <RadialGraph />
                      </div>
                      <RecentlyAdded suppliers={suppliers} />
                    </div>
                    <div className=" flex flex-col items-center w-1/3 ">
                      <div className=" w-full rounded-lg h-fit shadow-md ">
                        <RadialChart />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="product" className=" h-[1000px]">
                  <div className="flex flex-col space-y-4 m-4">
                    <div className=" rounded-lg shadow-md">
                      <ProductGraph />
                    </div>
                    <div className=" flex space-x-4">
                      <div className="w-1/3 rounded-lg shadow-md">
                        <ProductBar />
                      </div>
                      <div className=" w-1/3 rounded-lg shadow-md ">
                        {/* <ProductLineChart /> */}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </>
        );
      case "Suppliers":
        return <Suppliers />;
      case "Products":
        return <Products />;
      case "Stock In":
        return <StockIn />;
      case "Stock Out":
        return <StockOut />;

      case "Report":
        return <Reports />;

      case "Settings":
        return (
          <div className="m-4 p-4 bg-white rounded-lg">
            <Settings />
          </div>
        );
      default:
        return (
          <div className="m-4 p-4 bg-white rounded-lg">Dashboard Section</div>
        );
    }
  };

  return (
    <div className=" text-black">
      <div className="  flex">
        <Sidebar
          setSelectedOption={setSelectedOption}
          activeOption={selectedOption}
        />
        <div className=" flex flex-col  border-red-400 w-full bg-gray-100">
          <div className=" flex  h-20 bg-white py-4">
            <div className=" flex flex-1  items-center ">
              <h1 className=" text-2xl font-bold pl-10 text-[#5FBF8F] ">
                {" "}
                {selectedOption}
              </h1>
            </div>
            <div className=" flex flex-1  space-x-2 pr-4 flex-row-reverse items-center ">
              <Popover>
                <PopoverTrigger asChild>
                  <div className="">
                    <IoIosArrowDown />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className=" flex flex-col items-center  h-60 ">
                    <div className=" border-2 h-28 w-28 mt-3 rounded-full"></div>
                    <div className="">
                      <h1>Name</h1>
                      <p>email@email.com</p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <div className=" w-8 h-8 border-2 rounded-full ">
                <img src={defaultImg} className=" rounded-full" />
              </div>
              <MdOutlineNotifications className=" text-2xl" />
              <IoMdSearch className=" text-2xl" />
            </div>
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
