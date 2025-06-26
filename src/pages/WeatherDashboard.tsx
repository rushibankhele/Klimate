import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const WeatherDashboard = () => {
  return (
    <div>
      {/* favourite city */}
      <div>
          <h1>My Location</h1>
          <Button>
            <RefreshCw></RefreshCw>
          </Button>
      </div>

      curren and Hourly weather
    </div>
  )
}

export default WeatherDashboard