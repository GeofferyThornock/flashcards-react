import React from "react";
import { Link } from "react-router-dom";

export default function Card({ flashcard, deleteBtn }) {
    const { id, name, description } = flashcard;

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h4 className="card-title text-muted">{name}</h4>
                <p className="card-text text-muted">{description}</p>
                <Link to={`/decks/${id}`} className="btn btn-secondary">
                    View
                </Link>
                <Link
                    to={`/decks/${id}/study`}
                    className="btn btn-primary mx-2"
                >
                    Study
                </Link>
                <button
                    onClick={() => deleteBtn(id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}
