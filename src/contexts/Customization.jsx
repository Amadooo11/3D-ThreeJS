import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const cake1Colors = [

    {
        color: "#FFFFFF",
        name: "None",
    },
    {
        color: "#ff00ff",
        name: "Pink",
    },
    {
        color: "#ffff00",
        name: "yellow",
    },
    {
        color: "#3dc5ff",
        name: "blue",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#800080",
        name: "Purple",
    },
];


export const cake2Colors = [


    {
        color: "#FFFFFF",
        name: "None",
    },
    {
        color: "#ff00ff",
        name: "Pink",
    },
    {
        color: "#ffff00",
        name: "yellow",
    },
    {
        color: "#3dc5ff",
        name: "blue",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#800080",
        name: "Purple",
    },
];

export const cake3Colors = [
    {
        color: "#FFFFFF",
        name: "None",
    },
    {
        color: "#ff00ff",
        name: "Pink",
    },
    {
        color: "#ffff00",
        name: "yellow",
    },
    {
        color: "#3dc5ff",
        name: "blue",
    },
    {
        color: "#222222",
        name: "black",
    },
    {
        color: "#800080",
        name: "Purple",
    },
];

export const flavorColors = [
    {
        color: "#F6FDFF",
        name: "None",
    },
    {
        color: "#2537E4",
        name: "Blueberry",
    },
    {
        color: "#FF770E",
        name: "Orange",
    },
    {
        color: "#F9FF45",
        name: "Pineapple",
    },
    {
        color: "#FFB31E",
        name: "Carrot",
    },
 
    {
        color: "#FF0706",
        name: "Strawberry",
    },

    
    
];



export const fillingColors = [
    {
        color: "#F6FDFF",
        name: "None",
    },
    {
        color: "#2771FF",
        name: "Blueberry",
    },
    {
        color: "#FA99BB",
        name: "Strawberry",
    },

    {
        color: "#F57077",
        name: "Lychee",
    },
    {
        color: "#FCF02A",
        name: "Bananas",
    },
    {
        color: "#834124",
        name: "Coffee",
    },
   
];


export const CustomizationProvider = (props) => {
    const [material, setMaterial] = useState("cake");
    const [cake1Color, setCake1Color] = useState(cake1Colors[0]);
    const [cake2Color, setCake2Color] = useState(cake2Colors[0]);
    const [cake3Color, setCake3Color] = useState(cake3Colors[0]);
    const [flavorColor, setFlavorColor] = useState(flavorColors[0]);
    const [fillingColor, setFillingColor] = useState(fillingColors[0]);
    const [selectedTier, setSelectedTier] = useState(1); 


    return (
        <CustomizationContext.Provider
            value={{
                material,
                setMaterial,
                cake1Color,
                setCake1Color,
                cake2Color,
                setCake2Color,
                cake3Color,
                setCake3Color,
                flavorColor,
                setFlavorColor,
                fillingColor,
                setFillingColor,
                selectedTier, // Include selectedTier
                setSelectedTier, // Include setSelectedTier
            }}
        >
            {props.children}
        </CustomizationContext.Provider>
    );
};


export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
};