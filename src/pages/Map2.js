import all from '../css/all.css';
import { useEffect, useRef, useState } from 'react';
import naverapi from '../apis/naverapi';



const Map2 = () => {
    const {naver} = window;




const [address, setAddress] = useState("");
const [roadAddress, setRoadAddress] = useState("null");

const [lat, setLat] = useState(37.54);
const [lng, setLng] = useState(126.99);
const [zoom, setZoom] = useState(12);

const handleChange = (e) => {
    const {address, value} = e.target;
    const newAddress = {address: value};
    setAddress(newAddress);
};

function searchAddressToCoordinate(address) {
    naver.maps.Service.geocode({
        query: address,
    },
    function (status, response) {
        if(status !== naver.maps.Service.Status.OK) 
        return alert("Something went wrong")

        var result = response.v2,
        items = result.addresses;

        let x = parseFloat(items[0].x);
        let y = parseFloat(items[0].y);

        setLat(y);
        setLng(x);
        setZoom(15);
        setRoadAddress(items[0].roadAddress);
    }
    );

    return(
        <>
            <div className="map-loader">
                <div className="map" style={{ width: "100%", height: "100%"}}>
                   <naverapi
                        zomm={zoom}
                        Latitude={lat}
                        Longtitude={lng}
                        roadAddress={roadAddress}
                   />  
                </div>
                <div className="search-container">
                    <form>
                        <input
                            className="findAddress"
                            placeholder='주소로 검색'
                            onChange={handleChange}
                        />
                        <button
                            className="submitAddress-button"
                            type='submit'
                            onClick={() => searchAddressToCoordinate(address.address)}
                        >
                            검색
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
}
export default Map2;