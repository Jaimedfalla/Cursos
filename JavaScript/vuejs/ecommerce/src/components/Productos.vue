<template>
  <main>
    <section class="product">
      <div class="product__thumbnails">
        <div class="thumb"></div>
        <div class="thumb"></div>
      </div>
      <div class="product__image">
        <img src="" alt="">
      </div>
    </section>
    <section class="description">
      <h4>Producto</h4>
      <span class="badge new">Nuevo</span>
      <span class="badge offer">Oferta</span>
      <p class="description__status"></p>
      <p class="description__price">5000</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "HelloWorld",
  data(){
    return{
      product:{
        name:'Cámara',
        price:450_000,
        stock:0,
        content:'Ex nulla culpa non aliquip ad sunt duis in laboris nostrud est. Anim mollit \
                eiusmod do pariatur laboris aliqua eu est. Incididunt quis nulla cillum enim quis.\
                Non elit quis sunt nisi aliquip nisi non. Esse proident culpa officia exercitation consequat nulla. \
                Enim incididunt amet labore et cillum qui sunt tempor duis ad ea exercitation labore quis. Quis labore ad \
                amet deserunt occaecat in proident nisi excepteur ex velit do.',
        images:[
          {
            image:"./images/camara.jpg",
            thumbnail:"./images-thumbnail.jpg"
          }
        ]    
      }    
    }
  }
};
</script>
