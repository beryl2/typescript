function ping(){
    setTimeout(function(){
        console.log("ping")
    },1000);
}
ping()

function ping (){
    setTimeout(()=>console.log("ping"),1000);
}
ping()