import React from "react";
import MainLayout from "../layouts/main-layout";
import isEmpty from "is-empty";

import { connect } from "react-redux";
import Card from "../components/card";

import { MdHistory } from "react-icons/md";

const HistoryPage = ({ entry, entry: { entries } }) => {
  return (
    <MainLayout>
      <div className=" w-3/5 mx-auto">
        <h2 className="text-3xl mb-2">
          Your History <MdHistory className="inline" size="2rem" />
        </h2>
        <h3 className="text-2xl">
          {" "}
          {isEmpty(entries) ? "No History Yet" : null}{" "}
        </h3>
        <div className="flex flex-col-reverse">
          {entries.map((entry) => (
            <Card key={entry._id} entry={entry} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

const mapStateToProps = (state) => ({
  entry: state.entry,
});

export default connect(mapStateToProps)(HistoryPage);
