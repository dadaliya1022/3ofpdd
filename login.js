

function getuser(){
	var user = document.getElementById("u").value;
	return user;
}


function signin(){
	let pwd = document.getElementById("p").value;
	if (pwd == "3ofpdd"){
		alert("感恩生活。弓虽有我（登陆成功）");
		window.open("index.html");
		}
	else{
		alert("好好看看");
		}
	}

function onload(){
		/*let isrc = document.getElementById("change");
		isrc.src=("photo/"+window.user+'.jpg');
		alert(isrc.src);*/
	}