var wrapper = document.body;
var stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12]
var elements = [];

for (var i = 0; i < stringers.length; i++) {
  elements.push(new stringer(stringers[i]));
}

function stringer(data) {
  var that = this;
  this.data = data;
  this.ele = document.createElement("div");
  this.ele.classList.add("style");
  this.dataEle = document.createElement("div");
  
  if(this.data < 10){
    this.dataEle.innerHTML = "The value is " + this.data + " and is less than 10";
  }else if (this.data == 15){
    this.dataEle.innerHTML = "The value is " + this.data + " and is exactly 15";
  }else if (this.data.length > 5){
    this.dataEle.innerHTML = "The value is " + this.data + " and character length is more than 5";
  }else{
  this.dataEle.innerHTML = "The value is " + this.data + " and is normal";
  }
  
  this.ele.addEventListener("click", function(){
    that.changeColor();
  })  

  this.ele.appendChild(this.dataEle);
  wrapper.appendChild(this.ele);
}

stringer.prototype.changeColor = function () {
  this.ele.style.color="blue";
};