import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch } from "react-router-dom";
import { readDeck, deleteCard } from "../utils/api";

export default function Deck({ deleteBtn }) {
    const [deck, setDeck] = useState({});
    const { deckId } = useParams();
    const { url } = useRouteMatch();

    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    const deleteCardById = (id) => {
        if (
            window.confirm(
                "Are you sure you want to delete this card? \n \n You will not be able to recover it."
            )
        ) {
            deleteCard(id);
        }
    };

    const cards = deck.cards?.map((e) => (
        <div className="mt-4 border rounded-lg p-4" key={e.id}>
            <h4>Front: </h4>
            <p>
                <span className="mx-4">{e.front}</span>
            </p>
            <h4>Back: </h4>
            <p>
                <span className="mx-4">{e.back}</span>
            </p>
            <Link to="edit" className="btn btn-secondary">
                Edit
            </Link>
            <button
                onClick={() => deleteCardById(e.id)}
                className="btn btn-danger mx-2"
            >
                Delete
            </button>
        </div>
    ));

    return (
        <div>
            <nav className="breadcrumb">
                <Link className="breadcrumb-item" to="/">
                    Home
                </Link>
                <span className="breadcrumb-item active" aria-current="page">
                    {deck.name}
                </span>
            </nav>
            <div>
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                <Link to={`${url}/edit`} className="btn btn-secondary">
                    Edit
                </Link>
                <Link to={`${url}/study`} className="btn btn-primary mx-3">
                    Study
                </Link>
                <Link to={`${url}/cards/new`} className="btn btn-primary">
                    Add Cards
                </Link>
                <button
                    onClick={() => deleteBtn(deckId)}
                    className="btn btn-danger mx-3"
                >
                    Delete
                </button>
            </div>
            <div className="mt-5">
                <h3>Cards</h3>
                {cards}
            </div>
        </div>
    );
}
