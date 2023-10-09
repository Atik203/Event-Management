import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../../Components/Card/Card";

const InviteCards = () => {
  const cards = useLoaderData();

  return (
    <div className="mb-20">
      <h1 className="text-3xl font-bold text-center mt-20">
        Our Card Collection
      </h1>
      <div className="my-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
        {cards.map((card) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default InviteCards;
