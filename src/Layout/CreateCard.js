import React from "react";
import CardForm from "./CardForm";

const CreateCard = ({ submitHandler }) => {
    const formData = { front: "", back: "" };

    return (
        <div>
            <CardForm
                header={"Add Card"}
                initialFormData={formData}
                submitHandler={submitHandler}
            />
        </div>
    );
};

export default CreateCard;
