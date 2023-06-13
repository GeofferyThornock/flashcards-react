import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import { deleteDeck, listDecks } from "../utils/api";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import DeckCreate from "./DeckCreate";
import { Link } from "react-router-dom";
import Study from "./Study";

function Layout() {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        listDecks().then((data) => setDecks(data));
    }, []);

    const deleteBtn = (cardId) => {
        console.log(cardId);
        if (window.confirm("Do you really want to delete this card?")) {
            deleteDeck(cardId).then((data) => setDecks(data));
        }
    };

    return (
        <>
            <Header />
            <div className="container">
                {/* TODO: Implement the screen starting here */}
                <Switch>
                    <Route path="/" exact>
                        <Link
                            to="/decks/new"
                            className="btn btn-secondary mb-2"
                        >
                            Create Deck
                        </Link>
                        {decks.length ? (
                            <Home decks={decks} deleteBtn={deleteBtn} />
                        ) : null}
                    </Route>
                    <Route path="/decks/new">
                        <DeckCreate />
                    </Route>
                    <Route path="/decks/:deckId/study">
                        <Study />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default Layout;
