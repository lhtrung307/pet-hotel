import React, { ReactElement } from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { IColumn } from "types";
import { get } from "lodash";

interface IProps<T> {
  columns: IColumn<T>[];
  data: T[];
  variant?: "simple" | "striped" | "unstyled";
}

function CustomTable<T extends Record<string, any>>({
  columns,
  data,
  variant = "simple"
}: IProps<T>): ReactElement {
  return (
    <Table variant={variant}>
      <Thead>
        <Tr>
          {columns.map((column) =>
            React.Children.toArray(
              <Th isNumeric={column.isNumeric}>{column.name}</Th>
            )
          )}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) =>
          React.Children.toArray(
            <Tr>
              {columns.map(
                ({ isNumeric, value, cell = (item) => get(item, value) }) =>
                  React.Children.toArray(
                    <Td isNumeric={isNumeric}>{cell(item)}</Td>
                  )
              )}
            </Tr>
          )
        )}
      </Tbody>
    </Table>
  );
}

export default CustomTable;
