// IMPORT ANY NEEDED COMPONENTS HERE
import React from "react";
import { useState } from "react";
import { Dataset } from "./data/dataset";
import Header from "./components/Header/Header"; 
import Chip from "./components/Chip/Chip";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"; 
import "./App.css"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!

export function App() {
  const { data, categories, restaurants } = Dataset.createDataSet()

  const [category, setCategory] = useState(0); 
  const [resturant, setResturant] = useState(0); 
  const [currentCategory, setCurrentCategory] = useState(null); 
  const [currentResturant, setCurrentResturant] = useState(null); 
  const [currentItem, setCurrentItem] = useState(null); 

  const [menuItem, setMenuItem] = useState(0); 

  let CurrentMenuitems = data.filter(element => {
    return (element.food_category === category) && (element.restaurant === resturant)
  }); 

  console.log(CurrentMenuitems); 


  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((elem, index) => (
            <Chip 
              key={index} 
              label={elem} 
              handleClose={(e) => {
                setCategory(0); 
              }}
              isActive={category === elem}
              onClick={() => {
                if (category !== elem) {
                  setCategory(elem)
                }
              }}
              />
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description} /> 
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((elem, index) => (
              <Chip 
                key={index} 
                label={elem} 
                handleClose={(e) => {
                  setResturant(0);
                }}
                isActive={resturant === elem}
                onClick={() => {
                  if (resturant !== elem) {
                    setResturant(elem); 
                  }
                }}
              
              />
            ))}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}

        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {CurrentMenuitems.map((elem, index) => (
              <Chip 
                key={index} 
                label={elem.item_name}
                handleClose={(e) => {
                  setMenuItem(0); 
                }}
                isActive={menuItem === elem}
                onClick={() => {
                  if (menuItem !== elem) {
                    setMenuItem(elem); 
                  }
                }}
                />
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            <NutritionalLabel  menuDish={menuItem} />
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
