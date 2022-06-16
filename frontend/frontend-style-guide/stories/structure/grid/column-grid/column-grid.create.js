// import "./grid.scss";

// export const createColumnGrid = ({
//   grid_mode = "default",
//   rows = 1,
//   cols = 4,
// }) => {
//   const columnGrid = document.createElement("div");

//   // Create grid container
//   const gridMode = grid_mode !== "default" ? `grid--${grid_mode}` : "";
//   columnGrid.className = ["grid", gridMode].join(" ");

//   // Create row
//   const row = document.createElement("div");
//   row.className = ["row"].join(" ");

//   // Crete cols
//   const col = document.createElement("div");
//   col.className = ["col"].join(" ");

//   // create col inner row
//   const innerRow = document.createElement("div");
//   innerRow.className = ["row"].join(" ");
//   col.appendChild(innerRow);

//   // Append cols to row
//   for(let i = 1; i <= cols; i++) {
//     row.appendChild(col.cloneNode(true));
//   }

//   // Append rows to grid container
//   for (let i = 1; i <= rows; i++) {
//     columnGrid.appendChild(row.cloneNode(true));
//   }

//   return columnGrid;
// };
