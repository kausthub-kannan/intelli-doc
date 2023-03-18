import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const XAi = () => {
  const { currentColor, currentMode } = useStateContext();

return (

    <div className="flex  justify-center flex-row" style={{height: "78vh"}}>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-full flex justify-between">
           
            <div className="bg-gray-100 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl w-9/12">
                
            </div>
            <div className=" m-2.5 p-4">
            
            <img className="w-96 h-4/6 rounded-2xl" src={product9} alt="" /> <br />
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>

              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Upload"
                  borderRadius="10px"
                />
              </div>
            
            </div>
        </div>
    </div>

);
};

export default XAi;
