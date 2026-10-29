const button = document.querySelector("button")

button.addEventListener("click", () => console.log("1"));
button.removeEventListener("click", () => console.log("1"));
button.onclick = () => console.log(2);


//o segundo no funciona porque como no le pasas la referencia