import React from "react";
import moment from "moment";
import DeleteButton from "./delete-button";

const Card = ({ entry }) => {
  return (
    <div className="p-8 bg-purple-300 hover:bg-purple-400  mb-4">
      <h3 className="text-2xl">{entry?.imageUrl} </h3>
      <div className="flex items-center justify-between">
        <p className="text-xs"> {moment(entry?.created).fromNow()}</p>
        <DeleteButton entryId={entry?._id} />
      </div>
    </div>
  );
};

export default Card;
