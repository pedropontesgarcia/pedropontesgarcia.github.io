function scrollOnClick() {
	document.getElementById('content').scrollIntoView({ behavior: 'smooth' });
}

function randInt(min, max) { // min and max included 
	return Math.floor(Math.random() * (max - min + 1) + min)
}

rand = randInt(1, 3);
document.querySelector('.right-pane').style.backgroundImage = "url('images/bg/" + rand + ".png')";
