// console.log("prueba numero 1");

// //comentario busqueda mediante DOM  se declara variable mediante la frase reservada let esta solo devuelve un elemento
// let table = document.querySelector('.Table');

// console.log(table);

// //busqueda mas de un registro


// let etiqueta = document.querySelectorAll('td');

// // console.log(etiqueta);


// etiqueta.forEach(function(etiqueta) {
//    console.log(etiqueta);
// }
// );



// let etiqueta = document.querySelectorAll('td');
//  etiqueta.forEach(function(td){
//     td.addEventListener('click',function(){
//         console.log(this);
//     })
    
//  })



// let etiqueta = document.querySelectorAll('.close');

// etiqueta.forEach(function(link){
//     link.addEventListener('click', function(){
//         console.log('hola a todos')

//     })

// })



// 
        let etiqueta = document.querySelectorAll('.close');

        etiqueta.forEach(function(link){
            link.addEventListener('click', function(ev){
            ev.preventDefault();
            let count = document.querySelector(".Content");

            count.classList.remove("animate__bounceInDown");
            count.classList.remove("animate__animated");
            count.classList.add("animate__bounceOutDown");
            count.classList.add("animate__animated");
       
    //  uso de timmer
        setTimeout(function(){
          location.href="/";
        },500);

        return false;


    })

})




// let iconos = document.querySelectorAll("i");

//   iconos.forEach(function(icono){

//   icono.classList.remove("fa-star");
// //    icono.classList.add("fa-sharp");
// //    icono.classList.add("fa-solid");
// //    icono.classList.add("fa-square-xmark");
// //    icono.classList.add("fa-flip-both");
     



    
    
        

//     })


