import "./widget.css";

export default function Widget() {
  const Button = ({ type }) => {
    return <button className={"widgetButton " + type}>{type}</button>;
  };
  return (
    <div className="widget">
      <h3 className="widgetTitle">Latest transactions</h3>
      <table className="widgetTable">
        <tr className="widgetTr">
          <th className="widgetTh">Customer</th>
          <th className="widgetTh">Date</th>
          <th className="widgetTh">Amount</th>
          <th className="widgetTh">Status</th>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp3h1Eyf4XIuFLjiXdCzS1NK5CFhFOWNP6P2Ru7kuI_Y-ufbcK2j7OcwOHAEkpH5rjgQ&usqp=CAU"
              alt=""
              className="widgetImg"
            />
            <span className="widgetName">Mickey</span>
          </td>
          <td className="widgetDate">5 Jan 2023</td>
          <td className="widgetAmount">£122.00</td>
          <td className="widgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp3h1Eyf4XIuFLjiXdCzS1NK5CFhFOWNP6P2Ru7kuI_Y-ufbcK2j7OcwOHAEkpH5rjgQ&usqp=CAU"
              alt=""
              className="widgetImg"
            />
            <span className="widgetName">Mike Fury</span>
          </td>
          <td className="widgetDate">5 Jan 2023</td>
          <td className="widgetAmount">£92.00</td>
          <td className="widgetStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp3h1Eyf4XIuFLjiXdCzS1NK5CFhFOWNP6P2Ru7kuI_Y-ufbcK2j7OcwOHAEkpH5rjgQ&usqp=CAU"
              alt=""
              className="widgetImg"
            />
            <span className="widgetName">Tom Hardy</span>
          </td>
          <td className="widgetDate">4 Jan 2023</td>
          <td className="widgetAmount">£47.00</td>
          <td className="widgetStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetTr">
          <td className="widgetUser">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyp3h1Eyf4XIuFLjiXdCzS1NK5CFhFOWNP6P2Ru7kuI_Y-ufbcK2j7OcwOHAEkpH5rjgQ&usqp=CAU"
              alt=""
              className="widgetImg"
            />
            <span className="widgetName">Mike Pence</span>
          </td>
          <td className="widgetDate">5 Jan 2023</td>
          <td className="widgetAmount">£46.00</td>
          <td className="widgetStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
