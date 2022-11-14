const comments= document.querySelectorAll(".comment")
const notif = document.querySelector(".notif")
const mark= document.querySelector(".mark")
let num= notif.textContent


//loop through the comments array
// comments[0].addEventListener("click", () =>{
// 	notif.textContent++
// })
// notif.addEventListener("click", () =>{
// 	notif.textContent++
// })

comments.forEach(comment=>{
	comment.addEventListener("click", () =>{

		comment.style.backgroundColor="white"
		if (notif.textContent==0){
			notif.textContent=0
		}else{

			notif.textContent--
		}
	})
})

//if i click that mark all as read
//loop through the coments and change al backgrounds to white
//change the notif to 0
mark.addEventListener("click",()=>{
	comments.forEach(comment=>{
		comment.style.backgroundColor="white"
		notif.textContent=0
	})
})
