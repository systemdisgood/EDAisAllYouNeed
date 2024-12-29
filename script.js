"use strict";
//alert("hello");

console.log("main");
const const_heh = 123;
let pred = true;
console.log("hello");
let main_canvas = document.getElementById("main_canvas");
let main_canvas_context = main_canvas.getContext("2d");
main_canvas.width =  window.innerWidth;
main_canvas.height = window.innerWidth / 2560 * 1080;


// one variables for mouse
let mouse_x = 0
let mouse_y = 0


// mousedown handler
main_canvas.addEventListener("mousedown", (e) => {
  mouse_x = e.offsetX;
  mouse_y = e.offsetY;
  console.log(mouse_x)
  console.log(mouse_y)
})

class Rect{
  constructor(center_pos_x, center_pos_y, width, height, color) {
    this.center_pos_x = center_pos_x
    this.center_pos_y = center_pos_y
    this.width = width
    this.height = height
    this.color = color
    this.update_diag_corners_poses()
  }

  update_diag_corners_poses() {
      this.upper_left_pos_x = this.center_pos_x - this.width / 2  
      this.upper_left_pos_y = this.center_pos_y - this.height / 2
  }

  set_center_pos(center_pos_x, center_pos_y){
    this.center_pos_x = center_pos_x;
    this.center_pos_y = center_pos_y;
    this.update_diag_corners_poses()
  }

  draw_on_canvas(canvas_context, x, y){
    canvas_context.clearRect(this.upper_left_pos_x, this.upper_left_pos_y, this.width, this.height)
    this.set_center_pos(x, y)
    canvas_context.fillStyle = this.color
    canvas_context.fillRect(this.upper_left_pos_x, this.upper_left_pos_y, this.width, this.height)
  }
}

let rect_pos_x = 0;
let rect_pos_y = 0;

let rect = new Rect(0, 0, 20, 10, "green")


function draw() {
    rect.draw_on_canvas(main_canvas_context, rect_pos_x,rect_pos_y)
    //rect_pos_x += 1;
    //rect_pos_y += 1;
    rect_pos_x = mouse_x;
    rect_pos_y = mouse_y;
    //console.log(mouse_x)
    window.requestAnimationFrame(draw);
}
draw()

/*
// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;

main_canvas.addEventListener("mousedown", (e) => {
    x = e.offsetX;
    y = e.offsetY;
    console.log(String(x) + " " + String(y))
    isDrawing = true;
  });
  
  main_canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
      drawLine(main_canvas_context, x, y, e.offsetX, e.offsetY);
      x = e.offsetX;
      y = e.offsetY;
    }
  });
  
  window.addEventListener("mouseup", (e) => {
    if (isDrawing) {
      drawLine(main_canvas_context, x, y, e.offsetX, e.offsetY);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });
  
  function drawLine(main_canvas_context, x1, y1, x2, y2) {
    main_canvas_context.beginPath();
    main_canvas_context.strokeStyle = "black";
    main_canvas_context.lineWidth = 1;
    main_canvas_context.moveTo(x1, y1);
    main_canvas_context.lineTo(x2, y2);
    main_canvas_context.stroke();
    main_canvas_context.closePath();
  }


function getScrollbarWidth() {
  const outerTempDiv = document.createElement('div');
  outerTempDiv.style.visibility = 'hidden';
  outerTempDiv.style.overflow = 'scroll';
  outerTempDiv.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outerTempDiv);
  const innerTempDiv = document.createElement('div');
  outerTempDiv.appendChild(innerTempDiv);
  const scrollbarWidth = (outerTempDiv.offsetWidth - innerTempDiv.offsetWidth);
  outerTempDiv.parentNode.removeChild(outerTempDiv);
  return scrollbarWidth;   
}

*/

function onLoadFunction()
{
  console.log("onLoadFunction");
  //console.log(main_canvas.clientWidth)
  //console.log(getScrollbarWidth())
}