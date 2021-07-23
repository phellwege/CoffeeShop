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
        // const data = {
        //     itemName: itemName,
        //     price: price,
        //     inventory: inventory,
        //     description: description,
        //     media: media,
        //     category: category,
        // };

        const files = [...document.querySelector("input[type=file]").files];
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

            // fetch('https://api/item', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // })
            //     .then(response => response.json())
            //     .then(data => {
            //         console.log('Success:', data);
            //         setResponse(data);
            //     })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //         setErrors("Sorry we couldn't identitfy this plant, there was no match in the database. Would you like to try a different image?")
            //     });
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

/**
 * 
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        setLoading(true)

        const files = [...document.querySelector('input[type=file]').files];
        const promises = files.map((file) => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const res = event.target.result;
                    console.log(res);
                    resolve(res);
                }
                reader.readAsDataURL(file)
            })
        })

        Promise.all(promises).then((base64files) => {
            console.log(base64files)

            const data = {
                api_key: "----insert key------",
                images: base64files,
                modifiers: ["crops_fast", "similar_images"],
                plant_language: "en",
                plant_details: ["common_names",
                    "url",
                    "name_authority",
                    "wiki_description",
                    "taxonomy",
                    "synonyms"]
            };

            fetch('https://api.plant.id/v2/identify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    setResponse(data);
                    setLoading(false);
                    setLoaded(true); //set page to loaded after data is set to display results
                })
                .catch((error) => {
                    console.error('Error:', error);
                    setErrors("Sorry we couldn't identitfy this plant, there was no match in the database. Would you like to try a different image?")
                });
        })

    };
    
    if(!errors){
    return (
        <div className="center">
            <form className="Identify" onSubmit={onSubmitHandler}>
                <input type="file" multiple />
                <button type="submit">submit</button>
            </form>
 */
