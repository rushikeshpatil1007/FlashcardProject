// this page will map the flashcard with accessing the flashcard UI

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlashcardUI from "../components/Card_UI/FlashcardUI";

const MyFlashCard = () => {
  const navigate = useNavigate();
  const flashcard = useSelector((state) => state.flashcard.flashcards);
  //  show All button to view all flashcards
  const [showAll, setShowAll] = useState(false);
  // flashcard showing limits
  const showLimit = !showAll ? 6 : flashcard.length;

  return (
    <section className="flex flex-col mt-16">
      {flashcard.length > 0 ? (
        <div>
          <div className="flex flex-wrap">
            {/* maping the flashcard  */}
            {flashcard.slice(0, showLimit).map(({ card }, i) => (
              <FlashcardUI key={i} flashcard={card} />
            ))}
          </div>
          <div className="flex justify-end mr-10">
            <button
              className="w-16 mt-1 font-semibold text-lg text-red-600 outline-none border-none active:outline-none active:border-none"
              onClick={() => setShowAll(!showAll)}
            >
              See all
            </button>
          </div>
        </div>
      ) : (
        // if there is no flashcard this text with createflashcard link will render
        <div className="flex items-center justify-center  shadow-lg p-20">
          <h1 className="font-semibold text-xl text-blue-600">
             
            <span
              className="text-black-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              CREATE NEW FLASHCARD
            </span>
             
          </h1>
        </div>
      )}
    </section>
  );
};

export default MyFlashCard;
