
import React, {useState} from "react";

function UpdatingList() {
    const [items, setItems] = useState(["Apple", "Orange", "Banana"]);

    function handleAdding() {
        const newItem = document.getElementById("itemInput").value;
        document.getElementById("itemInput").value = "";
        setItems(i => [...i, newItem]);
    }
    function handleRemoving(index) {
        setItems(items.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of items</h2>
            <ul>
                {items.map((item, index) => <li key={index} onClick={() => handleRemoving(index)}>{item}</li>)}
            </ul>
            <input type="text" id="itemInput" placeholder="Eneter items here" />
            <button onClick={handleAdding}>Add item</button>
        </div>
    )
}

export default UpdatingList;
