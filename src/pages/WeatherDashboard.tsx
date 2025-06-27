import { Button } from "@/components/ui/button";
import { UseGeoLocation } from "@/hooks/UseGeoLocation";
import { RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = UseGeoLocation();

  console.log(coordinates);

  const handelRefresh = () => {
    getLocation();
    if (coordinates) {
      //reload weather data
    }

    if(locationLoading){
      
    }
  };


  return (
    <div className="space-y-4">
      {/* favourite city */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handelRefresh}
          // disabled={}
        >
          <RefreshCw></RefreshCw>
        </Button>
      </div>
      current and Hourly weather
    </div>
  );
};

export default WeatherDashboard;
