import { Toggle } from "./Toggle";
export const ToggleContainer = ({ disastersOn,setDisastersOn }) => {

    const disasters = ["Flood","Storm","Drought","Wildfire","Extreme temperature"];

    const onToggle = (disasterType) => {
        setDisastersOn((prevState)=>{
            let newDisastersOn = [...prevState];
            if(prevState.includes(disasterType)){
                //remove that disaster type from the array
                newDisastersOn = prevState.filter(d=>d!==disasterType);
            }else{
                //add that disaster type from the array
                newDisastersOn.push(disasterType);
            }

            return newDisastersOn;
        });

    };


    return disasters.map((d,i) => {
        const checked = disastersOn.includes(d);
        return <Toggle key={i} id={i+1} disaster={d} checked={checked} onToggle={onToggle}/>;
    });
};
