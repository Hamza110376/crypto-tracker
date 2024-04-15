import React, { useState, useEffect } from "react";
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs/Index';
import  axios  from "axios";

const Dashboard = () => {
  const [coins, setCoins] = useState([])

useEffect(() => {
axios
  .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
  .then((response) => {
setCoins(response.data)  
})
  .catch((error) => {
console.log(error)  });

}, [])

  
  return (
    <>
    <Header/>
    <TabsComponent coins={coins}/>
    </>
  );
}

export default Dashboard