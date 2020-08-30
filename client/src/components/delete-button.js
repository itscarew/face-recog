import React from "react";

import { AiFillDelete } from "react-icons/ai";
import { connect } from "react-redux";
import { deleteEntry } from "../redux/action/entries.action";

const DeleteButton = ({ entryId, deleteEntry }) => {
  return (
    <AiFillDelete
      className="cursor-pointer"
      size="1rem"
      color="#fff"
      onClick={() => deleteEntry(entryId)}
    />
  );
};

export default connect(undefined, { deleteEntry })(DeleteButton);
