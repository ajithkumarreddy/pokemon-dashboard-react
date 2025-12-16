import TableHeaderRow from "../../molecules/TableHeaderRow";
import TableRow from "../../molecules/TableRow";
import './Table.css';

const Table = ({ headers, items }) => {
  return (
    <table>
      <thead>
        <TableHeaderRow headers={headers} />
      </thead>

      <tbody>
        {items.map((item, index) => (
          <TableRow key={index} cells={item.cells} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
