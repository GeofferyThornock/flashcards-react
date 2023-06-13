import React from "react";
import Card from "./Card";
const Home = ({ decks, deleteBtn }) => {
    const deckList = decks.map((e) => (
        <Card flashcard={e} deleteBtn={deleteBtn} key={e.id} />
    ));
    return <div>{deckList};</div>;
};

export default Home;
