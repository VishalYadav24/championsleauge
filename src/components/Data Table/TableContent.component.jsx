import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
} from "@mui/material";
import React, { Fragment, useState } from "react";
import TableHeader from "./TableHeader.component";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  console.log(order, orderBy);
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const sortRowInformation = (rowArray, comparator) => {
  const stabilizedRowArray = rowArray.map((el, index) => [el, index]);

  stabilizedRowArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedRowArray.map((el) => el[0]);
};

const TableContent = ({ headerCells, records }) => {
  console.log(records)
  const [orderDirection, setOrderDirection] = useState("asc");
  const [valueToOrderBy, setValueToOrderBy] = useState(headerCells[0].key);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAscending = valueToOrderBy === property && orderDirection === "asc";
    setValueToOrderBy(property);
    setOrderDirection(isAscending ? "desc" : "asc");
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value), 10);
    setPage(0);
  };
  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHeader
            headerCells={headerCells}
            valueToOrderBy={valueToOrderBy}
            orderDirection={orderDirection}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {sortRowInformation(
              records,
              getComparator(orderDirection, valueToOrderBy)
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((data) => {
                return (
                  <TableRow key={data?.id}>
                    <TableCell>{data?.id}</TableCell>
                    <TableCell>
                      <img alt={data?.name} src={data?.image_url} />
                    </TableCell>
                    <TableCell>{data?.name}</TableCell>
                    <TableCell>{data?.hp}</TableCell>
                    <TableCell>{data?.armor}</TableCell>
                    <TableCell>{data?.attackdamage}</TableCell>
                    <TableCell>{data?.attackrange}</TableCell>
                    <TableCell>{data?.hpregen}</TableCell>
                    <TableCell>{data?.spellblock}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      ></TablePagination>
    </Fragment>
  );
};

export default TableContent;
