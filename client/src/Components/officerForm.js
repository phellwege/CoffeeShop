import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

// officer form makes items

const OfficerForm = (props) => {
    const [response, setResponse] = useState({});
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState("");
    const [inventory, setInventory] = useState("");
    const [description, setDescription] = useState("");
    const [media, setMedia] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // finds file from form submission 
        const files = [...document.querySelector("input[type=file]").files];

        //maps through all files/images uploaded and preps for POST request
        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const res = event.target.result;
                    console.log(res);
                    resolve(res);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(promises).then((base64files) => {
            console.log(base64files);

            //set data for POST
            const data = {
                itemName: itemName,
                price: price,
                inventory: inventory,
                description: description,
                media: media,
                category: category,
            };

            axios
                .post("http://localhost:8000/api/item", data)
                .then((res) => {
                    console.log(res);
                    setItemName("");
                    setPrice("");
                    setInventory("");
                    setMedia("");
                    setCategory("");
                    setDescription("");
                    setErrors("");
                })
                .catch((err) => {
                    setErrors(err.response.data.errors);
                });
                //BOOMSKY D.O.N.E.
            
        });
    };
    return (
        <div>
            <h2>Add Item</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Item name</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setItemName(e.target.value)}
                        value={itemName}
                    />
                    {errors?.itemName && (
                        <span
                            style={{ color: "red" }}
                            className="error-message"
                        >
                            {errors.itemName?.properties?.message}
                        </span>
                    )}
                </p>
                <p>
                    <label>Price</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                    />
                    {errors?.price && (
                        <span style={{ color: "red" }}>
                            {errors?.price?.message}
                        </span>
                    )}
                </p>
                <p>
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    {errors?.description && (
                        <span style={{ color: "red" }}>
                            {errors?.description?.message}
                        </span>
                    )}
                </p>
                <p>
                    <label>Number in Inventory</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setInventory(e.target.value)}
                        value={inventory}
                    />
                    {errors?.inventory && (
                        <span style={{ color: "red" }}>
                            {errors?.inventory?.message}
                        </span>
                    )}
                </p>
                <p>
                    <label>Pictures</label>
                    <br />
                    <input
                        type="file"
                        onChange={(e) => setMedia(e.target.value)}
                        value={media}
                        name="media"
                        multiple
                    />
                    {errors?.media && (
                        <span style={{ color: "red" }}>
                            {errors?.media?.message}
                        </span>
                    )}
                </p>
                <p>
                    <label>category</label>
                    <br />
                    <input
                        type="text"
                        onChange={(e) => setCategory(e.target.value)}
                        value={category}
                    />
                    {errors?.category && (
                        <span style={{ color: "red" }}>
                            {errors?.category?.message}
                        </span>
                    )}
                </p>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default OfficerForm;
