import React from "react";
import { useCustomization, cake1Colors, cake2Colors, cake3Colors, flavorColors, fillingColors } from "../contexts/Customization";

const Configurator = () => {
    const {
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
        selectedTier,
        setSelectedTier,
    } = useCustomization();

    const handleMaterialChange = (newMaterial) => {
        setMaterial(newMaterial);
    };

    const handleTierColorChange = (selectedColor) => {
        switch (selectedTier) {
            case 1:
                setCake1Color(selectedColor);
                break;
            case 2:
                setCake2Color(selectedColor);
                break;
            case 3:
                setCake3Color(selectedColor);
                break;
            case 4:
                setFlavorColor(selectedColor);
                break;
            case 5:
                setFillingColor(selectedColor);
                break;
            default:
                break;
        }
    };

    const getSelectedTierColors = () => {
        switch (selectedTier) {
            case 1:
                return cake1Colors;
            case 2:
                return cake2Colors;
            case 3:
                return cake3Colors;
            case 4:
                return flavorColors;
            case 5:
                return fillingColors;
            default:
                return [];
        }
    };

    return (
        <div className="configurator">
                
            <div className="configurator__section">
                <div className="configurator__section__title">Cake Design</div>
                <div className="configurator__section__values">
                    <button
                        className={`item ${material === "water" ? "item--active" : ""}`}
                        onClick={() => setSelectedTier(4)}
                    >
                        Flavor
                    </button>
                    <button
                        className={`item ${material === "choco" ? "item--active" : ""}`}
                        onClick={() => setSelectedTier(5)}
                    >
                        Filling
                    </button>
                    <button
                        className={`item ${selectedTier === 1 ? "item--active" : ""}`}
                        onClick={() => setSelectedTier(1)}
                    >
                        Tier 1
                    </button>
                    <button
                        className={`item ${selectedTier === 2 ? "item--active" : ""}`}
                        onClick={() => setSelectedTier(3)}
                    >
                        Tier 2
                    </button>
                    <button
                        className={`item ${selectedTier === 3 ? "item--active" : ""}`}
                        onClick={() => setSelectedTier(2)}
                    >
                        Tier 3
                    </button>
                </div>
            </div>
            <div className="configurator__section">
                <div className="configurator__section__title">Cake color</div>
                <div className="configurator__section__values">
                    {getSelectedTierColors().map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`item ${item.color === (selectedTier === 4 ? flavorColor : selectedTier === 5 ? fillingColor : selectedTier === 1 ? cake1Color : selectedTier === 2 ? cake2Color : cake3Color).color ? "item--active" : ""}`}
                                onClick={() => handleTierColorChange(item)}
                            >
                                <div
                                    className="item__dot"
                                    style={{ backgroundColor: item.color }}
                                />
                                <div className="item__label">{item.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Configurator;
