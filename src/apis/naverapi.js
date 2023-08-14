import {useState} from 'react';
import{RenderAfterNavermapsLoaded, NaverMap, Marker} from 'react-naver-maps';
// process.env.NAVER_ID
// process.env.NAVER_SECRET

export const naverapi = (props) => {
    return (
        <RenderAfterNavermapsLoaded
            ncpClientId={"z7eokbkfss"}
            submodules={["geocoder"]}
        >
            <NaverMap
                mapDivId={"map-getting-started-uncontrolled"}
                style={{width: "100%", height: "100%"}}
                center={{lat: props.Latitude, lng: props.Longitude}}
                defaultZoom={12}
                Zoom={props.Zoom}
                minZoom={12}
                enableWheelZoom={false}
            >
                {props.zoom == 15 && (
                <Marker
                    position={{lat: props.Latitude, lng: props.Longitude}}
                    title={props.roadAddress}
                    clickable={true}
                />

                )}
            </NaverMap>
        </RenderAfterNavermapsLoaded>
    )

} 

export default naverapi;