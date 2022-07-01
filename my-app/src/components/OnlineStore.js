import React, { useState } from "react";
import StoreTable from "./StoreTable";
import SearchBar from "./SearchBar";

export default function OnlineStore(){

  const [filter, setFilter] = useState({ text : "", inStockOnly : false});

  function updateFilter(key, value) {
    setFilter({
      ...filter,
      [key] : value,
    });
  }

  const datas = [
    {category: "SportingGoods", price: "$49.99", stocked: true, name: "Football"},
    {category: "SportingGoods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "SportingGoods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  ];

  return <div>
            <SearchBar filter={filter} updateFilter={updateFilter} />
            <StoreTable products= {datas} filter={filter}/>
          </div>;
}