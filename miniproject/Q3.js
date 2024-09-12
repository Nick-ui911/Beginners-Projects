
const throttleFunction = (func, delay) => {

    let prev = 0;
    return (...args) => {
 
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;

            return func(...args);
        }
    }
};
document.querySelector("#center")
.addEventListener("mousemove",
    throttleFunction((event) => {
        // your code goes here
        // createElement is for adding html thinks from js;
        var div = document.createElement("div");

        div.classList.add('imagediv');
        // this line is for adding imagediv,where cursor goes inside center div or this give us location of cursor and we convert it into pixels;
        div.style.left = event.clientX + 'px';
        div.style.top = event.clientY + 'px';

        var img = document.createElement("img");
        // this setattribute is use for adding this url image into 'src' and then this goes into image tag;
        img.setAttribute("src","https://images.unsplash.com/photo-1723398466717-12d0c8f6299c?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
        div.appendChild(img);
        

        // appendChild property helps to add element in html or this add div in body where center div is present ;
        document.body.appendChild(div);
        // this is for animation 
        gsap.to(img,{
            y:"0",
            ease:Power1,
            duration:.5,
           });
           gsap.to(img,{
            y:"100%",
            ease:Power2,
            delay:.6,

           
           })
// this settimeout is basically removing previous div after 1.5sec;
       
        setTimeout(() => {
            div.remove()
        }, 1500);
     
        
    }, 500)
);