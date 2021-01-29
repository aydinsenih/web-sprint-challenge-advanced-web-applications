import React, { useState } from "react";
import { ChromePicker } from "react-color";

const EditMenu = ({ colorToEdit, saveEdit, setColorToEdit, setEditing }) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const handleChangeComplete = (pickedColor) => {
        setColorToEdit({ ...colorToEdit, code: { hex: pickedColor.hex } });
    };

    return (
        <form onSubmit={saveEdit}>
            <legend>edit color</legend>
            <label htmlFor="colorName">color name:</label>
            <input
                name="colorName"
                id="colorName"
                onChange={(e) =>
                    setColorToEdit({ ...colorToEdit, color: e.target.value })
                }
                value={colorToEdit.color}
            />

            <label htmlFor="hex">hex code:</label>
            <input
                name="hex"
                id="hex"
                onChange={(e) =>
                    setColorToEdit({
                        ...colorToEdit,
                        code: { hex: e.target.value },
                    })
                }
                value={colorToEdit.code.hex}
            />
            <button onClick={() => setDisplayColorPicker(!displayColorPicker)}>
                Select Color
            </button>
            {displayColorPicker && (
                <ChromePicker
                    color={colorToEdit.code.hex}
                    onChangeComplete={handleChangeComplete}
                />
            )}

            <div className="button-row">
                <button type="submit">save</button>
                <button onClick={() => setEditing(false)}>cancel</button>
            </div>
        </form>
    );
};

export default EditMenu;
