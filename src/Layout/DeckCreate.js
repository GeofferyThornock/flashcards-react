import React from "react";
import DeckForm from "./DeckForm";
import { Link } from "react-router-dom";

function DeckCreate({ submitHandler }) {
    const formData = { name: "", description: "" };

    return (
        <div>
            <nav class="breadcrumb">
                <Link class="breadcrumb-item" to="/">
                    Home
                </Link>
                <span class="breadcrumb-item active" aria-current="page">
                    Create Deck
                </span>
            </nav>
            <DeckForm
                header="Create Deck"
                initialFormData={formData}
                submitHandler={submitHandler}
            />
        </div>
    );
}

export default DeckCreate;
