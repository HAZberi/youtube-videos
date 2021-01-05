import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const [gotoPage, setGotoPage] = useState(1);
  const { displayNewList } = props;

  const totalPages = ({ videoList, resultsPerPage }) => {
    return Math.ceil(videoList.length / resultsPerPage);
  };
  const handleClickEvent = (e) => {
    setGotoPage(+e.target.dataset.target);
  };

  useEffect(() => {
    displayNewList(gotoPage);
  }, [gotoPage, displayNewList]);

  useEffect(()=>{
    setGotoPage(1);
  }, [props.videoList])

  const buttonMarkup = ({ currentPage }, direction, buttonText) => {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          data-target={
            direction === "right" ? currentPage * 1 + 1 : currentPage - 1
          }
          onClick={handleClickEvent}
          className={`ui ${direction} button`}
        >
          {buttonText}
        </button>
      </div>
    );
  };

  const paginationLogic = (props) => {
    if (props.currentPage === 1 && totalPages(props) > 1)
      return buttonMarkup(props, "right", "Next");
    if (props.currentPage === totalPages(props) && totalPages(props) > 1)
      return buttonMarkup(props, "left", "Back");
    if (props.currentPage > 1 && props.currentPage < totalPages(props))
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {buttonMarkup(props, "left", "Back")}
          {buttonMarkup(props, "right", "Next")}
        </div>
      );
    return <div></div>;
  };
  return paginationLogic(props);
};

export default Pagination;
