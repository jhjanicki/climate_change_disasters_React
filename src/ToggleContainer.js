import { Toggle } from "./Toggle";
export const ToggleContainer = () => {

    const disasters = ["Flood","Storm","Drought","Wildfire","Extreme temperature"];

    return disasters.map((d,i) => {
        return <Toggle key={i} id={i+1} disaster={d}/>;
    });
};
