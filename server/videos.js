obtenerVideos();

function obtenerVideos(){
    var videos
    fetch('https://retoolapi.dev/HZUivn/videos?vista=getstarted')
    .then(res => res.json())
    .then(data =>{
        videos =data;
        mostrarVideos(videos);
    })
}

function mostrarVideos(videos){
    var contenedor=document.getElementById("videos");
    var cantidadVideos=videos.length;
    for(i=0;i<=cantidadVideos;i++){
        contenedor.innerHTML+='<article><h2>'+videos[i].titulo+'</h2><iframe class="direccion" width="720" height="405" src="'+videos[i].direccion+'"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></article>';
    }
}