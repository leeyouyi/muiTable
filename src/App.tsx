import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";

export default function FlexLayoutGrid() {
  // const { data } = useDemoData({
  //   dataSet: "Commodity",
  //   rowLength: 5,
  //   maxColumns: 6,
  // });
  const columns: GridColDef[] = [
    {
      field: "node",
      headerName: "node",
      width: 130,
      renderCell: (params: GridRenderCellParams) => {
        if (params.row.id === 3) {
          // console.log(params);
          return (
            <div
              onClick={() => {
                console.log(params.row);
              }}
            >
              O
            </div>
          );
        }
      },
    },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "fullName",
      headerName: "Full name",
      width: 160,
    },
  ];

  const rows = [
    { id: 1, firstName: "React", lastName: "xxxxx" },
    { id: 2, firstName: "qqqqqq", lastName: "MUI" },
    { id: 3, firstName: "xxxx", lastName: "MUI" },
  ];
  const arr = new Array(20).fill(0).map((item, index) => {
    if (index === 2) {
      return {
        id: index + 1,
        firstName: "React",
        lastName: "xxxxx",
        fullName: "PPPPPPP",
        chilren: [
          {
            id: 3.1,
            firstName: "React",
            lastName: "xxxxx",
            fullName: "PPPPPPP",
          },
        ],
      };
    } else
      return {
        id: index + 1,
        firstName: "React",
        lastName: "xxxxx",
        fullName: "PPPPPPP",
      };
  });
  const [pageSize, setPageSize] = React.useState<number>(5);
  const [rowData, setRowData] = React.useState(arr);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        columns={columns}
        rows={rowData}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
      />
    </div>
  );
}
