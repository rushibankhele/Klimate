export const API_CONFIG = {
    BASE_URL : 'https://api.openweathermap.org/data/2.5',
    API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY,
    DEFAULT_PARAMS: {
        units: "metric",
        apiid: import.meta.env.VITE_OPENWEATHER_API_KEY,
    },
}