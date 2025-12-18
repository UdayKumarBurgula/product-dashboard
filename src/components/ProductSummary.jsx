import React from "react";

export default class ProductSummary extends React.Component {
  constructor(props) {
    super(props);
    console.log("[ProductSummary] constructor");
  }

  componentDidMount() {
    console.log("[ProductSummary] componentDidMount");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.totalCount !== this.props.totalCount) {
      console.log(
        "[ProductSummary] componentDidUpdate: totalCount changed",
        prevProps.totalCount,
        "->",
        this.props.totalCount
      );
    }
  }

  componentWillUnmount() {
    console.log("[ProductSummary] componentWillUnmount");
  }

  render() {
    return (
      <div className="card summary">
        <h2 className="cardTitle">Summary</h2>
        <p className="bigText">Total Products: {this.props.totalCount}</p>
      </div>
    );
  }
}
