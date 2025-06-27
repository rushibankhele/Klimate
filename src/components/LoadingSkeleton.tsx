import { Skeleton } from "./ui/skeleton";

function WeatherSkeleton(){
    return (
        <div>
            <div>
                <Skeleton className="h-[300px] w-full rounded-lg" />
                <Skeleton className="h-[300px] w-full rounded-lg" />
            </div>
        </div>
    )
}

export default WeatherSkeleton;