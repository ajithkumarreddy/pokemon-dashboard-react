import TableHeaderCell from "../atoms/TableHeaderCell";

const TableHeaderRow = ({ headers }) => {
  return (
    <tr>
      {headers.map((header, index) => (
        <TableHeaderCell key={index}>{header}</TableHeaderCell>
      ))}
    </tr>
  );
};

export default TableHeaderRow;
