import React from "react";
import { useParams } from "react-router-dom";
import { CardData } from "./config/data";
import { BottomSet } from "./components/BottomSet";
import { Yakiniku } from "./pages/MenuYakiniku";
import { Appetizer } from "./pages/MenuAppetizer";
import { Foods } from "./pages/MenuFoods";
import { Drink } from "./pages/MenuDrink";
import { Dessert } from "./pages/MenuDessert";
import { Set } from "./pages/MenuSet";
import { Lunch } from "./pages/MenuLunch";

const MenuItem = () => {
  const { id } = useParams();
  return (
    <>
      {getComponent(id)}
      <BottomSet />
    </>
  );
};

const getComponent = (id) => {
  const fetchData = CardData.filter((cd) => cd.id === id)[0];
  switch (id) {
    case "yakiniku":
      return <Yakiniku data={fetchData} />;
    case "appetizer":
      return <Appetizer data={fetchData} />;
    case "foods":
      return <Foods data={fetchData} />;
    case "drinks":
      return <Drink data={fetchData} />;
    case "dessert":
      return <Dessert data={fetchData} />;
    case "set":
      return <Set data={fetchData} />;
    case "lunch":
      return <Lunch data={fetchData} />;
    default:
      return <h1>No Menu Match</h1>;
  }
};

export default MenuItem;
