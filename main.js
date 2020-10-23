 document.addEventListener('keydown', (event) => {
   var keyName = event.key;

   if (event.shiftKey) {
     if (keyName == "X") {
       console.log("Xが押されたよ！")
     }
   }
 })