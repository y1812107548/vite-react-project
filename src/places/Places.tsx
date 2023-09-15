import { useState } from "react";
import { initialTravelPlan } from "./data";

type Place = {
  id: number;
  title: string;
  childPlaces: Place[];
};

const flattenedPlaces:{[id:number]:Place} = {}

export default function Places() {
    const [selectedIds, setSelectedIds] = useState(new Set());


    function handleToggle(toggledId:number){
        const nextIds = new Set(selectedIds);
        if(nextIds.has(toggledId)){
            nextIds.delete(toggledId);
        }
    }
  return <></>;
}
