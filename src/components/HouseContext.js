import React, { useState, useEffect, createContext } from "react";

// import data
import { housesData } from "../data";

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Localização (todas)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Tipo (todos)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Faixa de Preço (todos)");
  const [loading, setLoading] = useState(false);

  // return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ["Localização (todas)", ...new Set(allCountries)];

    //set countries state
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ["Tipo (todos)", ...new Set(allProperties)];

    //set properties state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {};

  return (
    <HouseContext.Provider
      value={{
        houses,
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
