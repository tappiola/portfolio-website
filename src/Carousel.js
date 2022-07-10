import ondat1 from "./screenshots/ondat1.png";
import ondat2 from "./screenshots/ondat2.png";
import ondat3 from "./screenshots/ondat3.png";
import ondat4 from "./screenshots/ondat4.png";
import ondat5 from "./screenshots/ondat5.png";

export const Carousel = () => {
    return <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active float-left w-full">
                    <img
                        src={ondat1}
                        className="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
                <div className="carousel-item float-left w-full">
                    <img
                        src={ondat2}
                        className="block w-full"
                        alt="Camera"
                    />
                </div>
                <div className="carousel-item float-left w-full">
                    <img
                        src={ondat3}
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
                <div className="carousel-item float-left w-full">
                    <img
                        src={ondat4}
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
                <div className="carousel-item float-left w-full">
                    <img
                        src={ondat5}
                        className="block w-full"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"/>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"/>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
}