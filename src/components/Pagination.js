import React from "react";

const Pagination = ({ videoList, resultsPerPage, currentPage, displayNewList }) => {
  const totalPages = Math.ceil(videoList.length / resultsPerPage);
  const handleClickEvent = (e) => {
    const gotoPage = +e.target.dataset.target;
    displayNewList(gotoPage);
  };
  if (currentPage === 1 && totalPages > 1)
    return (
      <div style={{ textAlign: "center" }}>
        <button
          data-target={currentPage * 1 + 1}
          onClick={handleClickEvent}
          className="ui right button"
        >
          Next
        </button>
      </div>
    );
  if (currentPage === totalPages && totalPages > 1)
    return (
      <div style={{ textAlign: "center" }}>
        <button
          data-target={currentPage - 1}
          onClick={handleClickEvent}
          className="ui left button"
        >
          Back
        </button>
      </div>
    );
  if (currentPage > 1 && currentPage < totalPages)
    return (
      <div style={{ textAlign: "center" }}>
        <button
          data-target={currentPage - 1}
          onClick={handleClickEvent}
          className="ui left button"
        >
          Back
        </button>
        <button
          data-target={currentPage * 1 + 1}
          onClick={handleClickEvent}
          className="ui right button"
        >
          Next
        </button>
      </div>
    );
  return <div></div>;
};

export default Pagination;
