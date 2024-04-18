import React, { useState, useEffect } from "react";
import Header from '../components/Common/Header';
import TabsComponent from '../components/Dashboard/Tabs/Index';
import  axios  from "axios";
import Search from "../components/Dashboard/Search";
import PaginationControlled from "../components/Dashboard/Pagenation";



const Dashboard = () => {
  const [coins, setCoins] = useState([]);
  const [paginatedCoin, setPaginatedCoin] = useState([])
   const [search, setSearch] = useState("");
     const [page, setPage] = useState(1);
     const handleChange = (event, value) => {
       setPage(value);
       var previousIndex= (value-1)*10;
       setPaginatedCoin(coins.slice(previousIndex, previousIndex+20))
     };
   const onSearchChange=(e)=>{
    setSearch(e.target.value)
   }
   var filteredCoins= coins.filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()))
useEffect(() => {
axios
  .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
  .then((response) => {
setCoins(response.data)  
 setPaginatedCoin(response.data.slice(0, 20));
})
  .catch((error) => {
console.log(error)  });

}, [])

  
  return (
    <>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} />
      <TabsComponent coins={search ? filteredCoins : paginatedCoin} />

      {
        !search &&(
          <PaginationControlled page={page} handleChange={handleChange} />
        )
      }
    </>
  );
}

export default Dashboard