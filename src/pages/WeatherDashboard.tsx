import WeatherSkeleton from "@/components/LoadingSkeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { UseGeoLocation } from "@/hooks/UseGeoLocation";
import { AlertTriangleIcon, MapPin, RefreshCw } from "lucide-react";

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
  };

  if (locationLoading) {
    return <WeatherSkeleton />;
  }

  if(locationError){
    return <Alert variant="destructive">
        <AlertTriangleIcon />
        <AlertTitle>Location Error</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable location
          </Button>
        </AlertDescription>
      </Alert>
  }

  if(!coordinates){
    return <Alert variant="destructive">
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>Please enable the location access to see your local weather.</p>
          <Button onClick={getLocation} variant={"outline"} className="w-fit">
            <MapPin className="mr-2 h-4 w-4" />
            Enable location
          </Button>
        </AlertDescription>
      </Alert>
  }

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
