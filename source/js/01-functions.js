// paints the square white
var paintGridWhite = function(s){
  $(s).css('background-color', '#fff');
};

// paints the square black
var paintGridBlack = function(s){
  $(s).css('background-color', '#000');
};


// generates a grid with l squares on each side
var generateGrid = function(totalWidth, l){
  var squareWidth=(totalWidth/l)+'px';
  var $grid=$('.level');
  // squaring side size 
  l = l*l;
  $grid[0].innerHTML="";
  for(var i=0;i<l;i++){
    $grid.append(mySquare);
  }
  $('.square').css('width',squareWidth);
  $('.square').css('height', squareWidth);
};

function randomPos() {
  var x = Math.floor(Math.random()*grid.cols);
  var y = Math.floor(Math.random()*grid.cols);
  return [x,y];
}