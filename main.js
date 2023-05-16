let btn = document.querySelector('#btn');
let URI = "http://localhost/SpUkM01-085/myPrimeravezPhp"
btn.addEventListener("click",async(e)=>{
    let res = await(await fetch(`${URI}/api.php`)).text();
    /* document.querySelector("pre").innerHTML = res; */
    console.log(res);
})