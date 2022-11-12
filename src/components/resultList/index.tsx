import React from "react";
import { useNavigate } from "react-router-dom";

function ResultList({ list = [] }) {
  const navigate = useNavigate();

  if (list.length > 0) {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Symbol</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {list.map((stock) => (
            <tr
              key={stock.id}
              className={"cursor-pointer"}
              onClick={() => navigate(`./${stock.id}`)}
            >
              <td>{stock.name}</td>
              <td>{stock.symbol}</td>
              <td>{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ResultList;
