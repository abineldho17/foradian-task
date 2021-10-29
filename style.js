let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', showDiv);
function showDiv() {
    document.getElementById('hidden').style.display = "block";
    document.getElementById('editablediv').style.display = "none";
 }
 function disappear() {
    document.getElementById('hidden').style.display = "none";
    document.getElementById('editablediv').style.display = "block";
 }
 
function getData() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);


    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');

            for (let i = 0; i < obj.data.length; i++) {
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(obj.data[i].first_name + "" + obj.data[i].last_name));
                list.appendChild(li);


                li.addEventListener('click', function () {
                    console.log(obj.data[i].first_name + " " + obj.data[i].last_name);
                    let text = obj.data[i].first_name + " " + obj.data[i].last_name;
                    let text2 = "Email: " + "  " + obj.data[i].email;
                    document.getElementById("demo2").innerHTML = text2;
                    document.getElementById("demo").innerHTML = text;
                    console.log(obj.data[i]);
                    // document.getElementById("image-holder").innerHTML = img.src = obj.data[i].avatar;
                    // document.getElementById("image-holder").innerHTML ="<img src = obj.data[i].avatar/>" ;

                   // var img = document.createElement('img');
                   // img.src = obj.data[i].avatar;
                
                   // console.log(obj.data[i].avatar);
                    //document.getElementById("image-holder").appendChild(img);
                    let img = document.getElementById('imagex');
                    img.src=obj.data[i].avatar;


                   //// let text3 = "Edit";
                   // document.getElementById("demo3").innerHTML = text3;

                   // document.getElementsByClassName("hidden").style.display = "none";
                   
                   let text4 = obj.data[i].first_name + " " + obj.data[i].last_name;
                   let text5 = "Email: " + " " + obj.data[i].email;
                   document.getElementById("demo4").innerHTML = text4;
                   document.getElementById("demo5").innerHTML = text5;

                   let image = document.getElementById('imagey');
                   image.src=obj.data[i].avatar;

                  // var btn = document.getElementById("demo3");
                  // if(btn.innerText=="edit"){
                   //////   btn.innerText="hide";
                   ///  }
                  // else{
                   //  btn.innerText="edit";
                    // }
                })
            }



        }
        else {
            console.log("Some error occured");
        }
    }

    xhr.send();
}
getData()

