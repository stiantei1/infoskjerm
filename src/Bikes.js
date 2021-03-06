import React, {useState, useEffect } from "react";
import createEnturService from '@entur/sdk';


const service = createEnturService({ clientName: 'stianteien-infoskjerm' })

const Bikes = () => {
    const [bikeStations, setBikeStations] = useState([]);

    useEffect(() => {
        service.getBikeRentalStationsByPosition(
            {latitude: 59.9289553, longitude: 10.7586829},
            300
        ).then((data) => setBikeStations(data));
    }, []);

    console.log(bikeStations);
    return ( <div className="BikeStations">
        <h3>Bysykkel</h3>
        {bikeStations.map((stationData) => (
            <Station key={stationData.id} station={stationData} />
        ))}
        </div>
    );
};

export default Bikes;


const Station = (props) => {
    const { station } = props;
    console.log(station);

    return (
    <div className="station">
        {station.name} - ledig: {station.bikesAvailable} : ledigPlasser: {station.spacesAvailable}

    </div>
    );
};