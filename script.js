var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.save();
/*bras*/
ctx.beginPath();
ctx.moveTo(60,140);
ctx.lineTo(340,140);
ctx.lineWidth = 40;
ctx.lineCap = "round";
ctx.strokeStyle = "#976f0f";
ctx.stroke();
ctx.closePath();
/*jambe gauche*/
ctx.beginPath();
ctx.moveTo(170,140);
ctx.lineTo(170,380);
ctx.lineWidth = 40;
ctx.lineCap = "round";
ctx.strokeStyle = "#976f0f";
ctx.stroke();
ctx.closePath();
/*jambe droite*/
ctx.beginPath();
ctx.moveTo(230,140);
ctx.lineTo(230,380);
ctx.lineWidth = 40;
ctx.lineCap = "round";
ctx.strokeStyle = "#976f0f";
ctx.stroke();
ctx.closePath();
/*corps*/
ctx.beginPath();
ctx.fillStyle = "#976f0f";
ctx.fillRect(170,140,60,230)
ctx.closePath();
/*entre jambe*/
ctx.beginPath();
ctx.moveTo(200,380);
ctx.lineTo(200,340);
ctx.lineWidth = 20;
ctx.lineCap = "round";
ctx.strokeStyle = "white";
ctx.stroke();
ctx.closePath();
/*tete*/
ctx.restore();
ctx.beginPath();
ctx.arc(200,80,60,0,Math.PI*2,true);
ctx.strokeStyle = "#976f0f"
ctx.fillStyle = "#976f0f";
ctx.fill();
ctx.stroke();
/*oeil gauche*/
ctx.beginPath();
ctx.arc(180,70,10,0,Math.PI*2,true);
ctx.strokeStyle = "white"
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
/*oeil droit*/
ctx.beginPath();
ctx.arc(220,70,10,0,Math.PI*2,true);
ctx.strokeStyle = "white"
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();
/*bouton haut*/
ctx.beginPath();
ctx.arc(200,180,10,0,Math.PI*2,true);
ctx.strokeStyle = "#7a2976"
ctx.fillStyle = "#7a2976";
ctx.fill();
ctx.stroke();
/*bouton bas*/
ctx.beginPath();
ctx.arc(200,220,10,0,Math.PI*2,true);
ctx.strokeStyle = "#7a2976"
ctx.fillStyle = "#7a2976";
ctx.fill();
ctx.stroke();
/*bouche*/
ctx.beginPath();
ctx.moveTo(175,100);
ctx.quadraticCurveTo(200,110,225,100);
ctx.strokeStyle="red";
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.stroke();
ctx.beginPath();
ctx.moveTo(175,100);
ctx.quadraticCurveTo(200,130,225,100);
ctx.strokeStyle="red";
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.stroke();
/*sourcils gauche*/
ctx.beginPath();
ctx.moveTo(170,50);
ctx.quadraticCurveTo(180,40,190,50);
ctx.strokeStyle="white";
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.stroke();
/*sourcils droit*/
ctx.beginPath();
ctx.moveTo(210,50);
ctx.quadraticCurveTo(220,40,230,50);
ctx.strokeStyle="white";
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(300,120);
ctx.lineTo(310,128);
ctx.lineTo(300,132);
ctx.lineTo(320,138);
ctx.lineTo(315,144);
ctx.lineTo(300,150);
ctx.lineTo(318,155);
ctx.lineTo(300,160);
ctx.lineWidth = 4;
ctx.lineCap = "round";
ctx.strokeStyle = "white";
ctx.stroke();
ctx.closePath();
