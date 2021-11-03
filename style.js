let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', showDiv);
function showDiv() {
    document.getElementById('hidden').style.display = "block";
    // document.getElementById('editablediv').style.display = "none";
}
//function disappear() {
//  document.getElementById('hidden').style.display = "none";
// document.getElementById('editablediv').style.display = "block";
//}

function getData() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://6180b83b8bfae60017adfbb5.mockapi.io/api/users', true);


    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            let list = document.getElementById('list');

            for (let i = 0; i < obj.data.length; i++) {

                var li = document.createElement('li');
                li.appendChild(document.createTextNode(obj.data[i].first_name + "" + obj.data[i].last_name));
                list.appendChild(li);


                li.addEventListener('click', function () {

                    let name = obj.data[i].first_name + " " + obj.data[i].last_name;
                    let email = "Email: " + "  " + obj.data[i].email;
                    document.getElementById("emailaddress").innerHTML = email;
                    document.getElementById("username").innerHTML = name;

                    let user = obj.data[i].id;
                    let img = document.getElementById('imagex');
                    img.src = obj.data[i].avatar;


                    document.getElementById('editbtn').addEventListener('click', function () {


                        let textfield = document.createElement("input");
                        textfield.type = "text";

                        textfield.value = obj.data[i].first_name;
                        document.getElementById('fname').appendChild(textfield);


                        let textfield2 = document.createElement("input");
                        textfield2.type = "text";

                        textfield2.value = obj.data[i].email;
                        document.getElementById('useremail').appendChild(textfield2);

                        let textfield3 = document.createElement("input");
                        textfield3.type = "text";

                        textfield3.value = obj.data[i].last_name;
                        document.getElementById('lname').appendChild(textfield3);

                        document.getElementById("editbtn").style.display = "none";
                        document.getElementById("username").style.display = "none";
                        document.getElementById("emailaddress").style.display = "none";

                        document.getElementById("savebtn").style.display = "block";
                        document.getElementById("fname").style.display = "block";
                        document.getElementById("useremail").style.display = "block";
                        document.getElementById("lname").style.display = "block";






                        document.getElementById('savebtn').addEventListener('click', function () {

                            // let myjs = JSON.stringify(obj.data[i]);
                            // myjs = myjs.replace(textfield, textfield.value);
                            // myjs = myjs.replace(textfield3, textfield3.value);

                            // myjs = myjs.replace(textfield2, textfield2.value);
                            // console.log(textfield, textfield.value);
                            // console.log(textfield3, textfield3.value);
                            //console.log(textfield2, textfield2.value);
                            //newjs = JSON.stringify(myjs);

                            let fullData = { "email": textfield2.value, "first_name": textfield.value, "last_name": textfield3.value };
                            let fullDataarray = JSON.stringify(fullData);
                            console.log(obj.data[i]);
                            // console.log(newjs);

                            // Content-type:  application/JSON; 

                            // Header("Content-type:  application/JSON"); 


                            const update_req = new XMLHttpRequest();
                           // update_req.setRequestHeader("Content-Type", "application/json")

                            // Header("Content-type:  application/JSON"); 
                            // AjaxReq.setRequestHeader("Content-Type", "application/JSON");

                            // let url = "https://6180b83b8bfae60017adfbb5.mockapi.io/api/users/"+user;
                            // console.log(url);
                            update_req.open('PUT', "https://6180b83b8bfae60017adfbb5.mockapi.io/api/users/" + user);

                            update_req.setRequestHeader("Content-Type", "application/json");
                            update_req.send(fullDataarray);
                            update_req.onload = function () {
                                if (this.status === 200) {
                                
                                     location.reload();
                                }
                            }

                        })

                    })





                    // let text4 = obj.data[i].first_name + " " + obj.data[i].last_name;
                    //let text5 = "Email: " + " " + obj.data[i].email;
                    //document.getElementById("demo4").innerHTML = text4;
                    // document.getElementById("demo5").innerHTML = text5;

                    // let image = document.getElementById('imagey');
                    //image.src=obj.data[i].avatar;

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