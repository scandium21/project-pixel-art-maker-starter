// When size is submitted by the user, call makeGrid()
let btn = document.getElementById("submit_btn");
let table = document.getElementById('pixelCanvas');


// Select size input

btn.addEventListener("click", makeGrid);
document.addEventListener("keyup", function(event) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Trigger the button element with a click
      document.getElementById("submit_btn").click();
    }
  });

function makeGrid() {
    //Clear the old table 
    let curr_row = table.rows.length;
    if (Number(curr_row)>=0) {
        for (let n=0; n<Number(curr_row);n++) {
            table.deleteRow(0);
        }
    }

    //Create new table
    let width = document.getElementById("inputWidth").value;
    let height = document.getElementById("inputHeight").value;

    //Your code goes here!
    for (let i=0;i<Number(height);i++) {
        let newRow = table.insertRow(i);
        for (let k=0; k<Number(width);k++) {
            let newCell = newRow.insertCell(k);
            table.rows[i].cells[k].onclick = function () {
                paintCell(this);
            }
        }
    }
}

// //Determine which cell is clicked
// for (let m=0; m < table.rows.length; m++) {
//     for (let j=0; j < table.rows[m].cells.length; j++) {
//         table.rows[m].cells[j].onclick = function () {
//             paintCell(this);
//         }
//     }
// }


function paintCell(tableCell) {
    tableCell.style.backgroundColor = document.getElementById("colorPicker").value;
}

