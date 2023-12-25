document.querySelector("#btn").addEventListener("click",async function(){
    let email=document.querySelector("#email").value;
    let pwd=document.querySelector("#password").value;
    if(email==""||pwd=="")
    {
        alert("Email or Password should not be Empty!!");
    }
    else {
        let data = {
            "email":email,
            "password": pwd
        }   
        let registerRes= await fetch("https://reqres.in/api/register",
        {
            "method":"POST",
            "body":JSON.stringify(data),
            "headers":{"content-type":"application/json"}
        })
        let registerjsonRes = await registerRes.json();
        document.querySelector("#registerRes").innerHTML=JSON.stringify(registerjsonRes);
    }
})