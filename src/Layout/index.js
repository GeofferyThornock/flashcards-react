import React, { useState, useEffect } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import { createDeck, deleteDeck, listDecks, updateDeck } from "../utils/api";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import DeckCreate from "./DeckCreate";
import { Link, useHistory } from "react-router-dom";
import Study from "./Study";
import Deck from "./Deck";
import DeckEdit from "./DeckEdit";

function Layout() {
    const [decks, setDecks] = useState([]);
    const history = useHistory();

    useEffect(() => {
        if (decks.length) return;
        listDecks().then((data) => setDecks(data));
    }, [decks]);

    const submitDeckHandler = (id, data) => {
        createDeck(data).then((data) => setDecks(data));
    };

    const updateDeckHandler = (id, data) => {
        updateDeck(data).then((data) => setDecks(data));
    };

    const deleteBtn = (cardId) => {
        console.log(cardId);
        if (window.confirm("Do you really want to delete this deck?")) {
            deleteDeck(cardId).then((data) => setDecks(data));
            history.push("/");
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
                        {decks?.length ? (
                            <Home decks={decks} deleteBtn={deleteBtn} />
                        ) : (
                            <h2 className="mt-3 text-dark">
                                No decks have been created
                            </h2>
                        )}
                    </Route>
                    <Route path="/decks/new">
                        <DeckCreate submitHandler={submitDeckHandler} />
                    </Route>
                    <Route path="/decks/:deckId" exact>
                        <Deck deleteBtn={deleteBtn} />
                    </Route>
                    <Route path="/decks/:deckId/study">
                        <Study />
                    </Route>
                    <Route path="/decks/:deckId/edit">
                        <DeckEdit submitHandler={updateDeckHandler} />
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
