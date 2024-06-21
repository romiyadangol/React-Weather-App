function Forecast(){
    return (
        <div>

            <div className="city-name">
                <h2>Kathmandu</h2>
            </div>

            <div className="date">
                <span>Friday, June 2, 2024</span>
            </div>

            <div className="temp">
                <img src="" alt="" />
                <span>24 <sup>°C|°F</sup></span>
            </div>

            <p>Clear Sky</p>

            <div className="weather-info">
                <div className="col">
                    {/* icon */}
                    <div>
                        <p>Wind</p>
                    </div>
                </div>

                <div className="col">
                    {/* icon */}
                    <div>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>

            <div className="forecast">
                <h3>5 day ForeCast</h3>
                <div className="forecast-container">
                    
                </div>
            </div>
        </div>
    )
}
export default Forecast;