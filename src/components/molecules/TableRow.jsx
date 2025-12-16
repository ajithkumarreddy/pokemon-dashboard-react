import TableCell from "../atoms/TableCell";

const TableRow = ({ cells }) => {
  return (
    <tr>
      {cells.map((cell, index) => (
        <TableCell key={index}>{cell}</TableCell>
      ))}
    </tr>
  );
};

export default TableRow;
