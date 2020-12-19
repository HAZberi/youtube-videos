import React from "react";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gotoPage: 1 };
  }
  totalPages({ videoList, resultsPerPage }) {
    return Math.ceil(videoList.length / resultsPerPage);
  }
  handleClickEvent = (e) => {
    this.setState({ gotoPage: +e.target.dataset.target }, this.renderNewList);
  };

  renderNewList() {
    this.props.displayNewList(this.state.gotoPage);
  }

  buttonMarkup({ currentPage }, direction, buttonText) {
    return (
      <div style={{ textAlign: "center" }}>
        <button
          data-target={
            direction === "right" ? currentPage * 1 + 1 : currentPage - 1
          }
          onClick={this.handleClickEvent}
          className={`ui ${direction} button`}
        >
          {buttonText}
        </button>
      </div>
    );
  }
  paginationLogic(props = this.props) {
    if (props.currentPage === 1 && this.totalPages(props) > 1)
      return this.buttonMarkup(props, "right", "Next");
    if (
      props.currentPage === this.totalPages(props) &&
      this.totalPages(props) > 1
    )
      return this.buttonMarkup(props, "left", "Back");
    if (props.currentPage > 1 && props.currentPage < this.totalPages(props))
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.buttonMarkup(props, "left", "Back")}
          {this.buttonMarkup(props, "right", "Next")}
        </div>
      );
    return <div></div>;
  }
  render() {
    return this.paginationLogic();
  }
}

export default Pagination;
