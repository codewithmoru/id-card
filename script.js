function testVariable() {
          
  var strText = document.getElementById("fname").value;
  var strText1 =document.getElementById("lname").value;
  var strText2 = document.getElementById("Email").value;
  var strText3 = document.getElementById("Myadd").value;
  var strText4 = document.getElementById("Mobno").value;
  var strText5 = document.getElementById("pcode").value;
    document.getElementById("p1").innerHTML = strText;
    document.getElementById("p2").innerHTML = strText1;
    document.getElementById("p3").innerHTML = strText2;
    document.getElementById("p4").innerHTML = strText3;
    document.getElementById("p5").innerHTML = strText4;
    document.getElementById("p6").innerHTML = strText5;
  
     
};
var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
  }
const downloadCharacterSheet = () => {

const node = document.getElementById('id-form');

html2canvas(node).then(canvas => {
// document.body.appendChild(canvas)
// var img    = canvas.toDataURL("image/png");
// document.write('<img src="'+img+'"/>');
var link = document.createElement('a');
link.download = 'filename.png';
link.href = canvas.toDataURL()
link.click();
});

};


document
.getElementById('download-button')
.addEventListener('click', downloadCharacterSheet);

