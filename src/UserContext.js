import React, { useEffect, useState, createContext } from "react";
import { usePosition } from "use-position";
import Geocode from "react-geocode";
// disabled location finder for dev setup
Geocode.setApiKey("AIzaSyD8GFTbKJa9sHNp-HDcfFsgoRDXueRRCBw");

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [location, setLocation] = useState({ city: "City", zip: null });
  const { latitude, longitude } = usePosition();
  useEffect(() => {
    console.log("effect used");
    if (!!latitude && !!longitude) {
      Geocode.fromLatLng(latitude, longitude).then(
        (response) => {
          if (response) {
            const userLocation = {};
            response.results[0].address_components.forEach((address) => {
              if (address.types.indexOf("locality") !== -1) {
                userLocation.city = address.short_name;
              } else if (address.types.indexOf("postal_code") !== -1) {
                userLocation.zip = address.short_name;
              }
            });
            setLocation(userLocation);
          }
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [latitude, longitude]);
  return (
    <UserContext.Provider
      value={{ location: location, setLocation: setLocation }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
