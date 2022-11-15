import React from "react";
export default class SecondBurger extends React.Component {
  render() {
    return (
      <div className="burger">
        <img
          className="burger-picture"
          src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/60712f81a07316d3300b65823ab68b59def70c8e-1333x1333.png?w=750&q=40&fit=max&auto=format"
          alt="burger-icon"
        />
        <h2 className="burger-title">Bacon King</h2>
        <p className="cal-text">1,202 Cal</p>
      </div>
    );
  }
}
