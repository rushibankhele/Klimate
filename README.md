# Klimate Application

- created a vite + react + typescript app
- run npm install command 
- install tailwind and shadcn components using shadn URL
- install react-router-dom for routing in this application
    - setup router for this application Layout > Header > {children} > Footer
    - add themecontext provider using shadcnUI to create dark and light mode in the application
    - created routes for application 
- created a header component and added a toggle button to switch to dark and light theme using              themecontextprovided and usetheme component
- added dark mode and added transition for toggle button
- install a tanstack/query for managing state of this application
    - setup tanstack/query and tanstack devtools 
- setup Openweather API_KEY in application through open weather application 
    - setup API of openweather in config file added BASE_URL + API_KEY + default parameters > Units and apiid
    - created a types of the weather URL fetchData + getCurrentWeather + getForecast + Geocode
    - created API to fetchData + getCurrentWeather + getForecast + Geocode

- Created a custom hook to fetch the location data 
- Setup a react query client 
- Created weather loading skeleton (shimmer UI)
- Created alert_box in any error occurs when user doesn't provide location access for the site 
- Also handle the error when coordinates are not found 
