


<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container px-5">
          <a class="navbar-brand" href="index.html">MPQ: Adventurer's Guide</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <!-- <li class="nav-item"><a class="nav-link" href="/">Game Sample Videos</a></li> -->
                  <li class="nav-item"><a class="nav-link" href="/heroes">All Heroes</a></li>
                  <li class="nav-item"><a class="nav-link" href="/my_heroes">My Roster</a></li>

                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Admin</a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                          <li><a class="dropdown-item" href="/heroes/new">Create New Hero</a></li>
                          <!-- <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li> -->
                      </ul>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Log-In</a>
                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                          <li><a class="dropdown-item" href="/signup">Sign-Up</a></li>
                          <li><a class="dropdown-item" href="/login">Log-In</a></li>
                          <li><a class="dropdown-item" href="/logout">Logout</a></li>
                      </ul>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="/heroes">All Heroes</a>
          <a class="nav-link" href="/heroes/new">Create New Hero</a>
          <a class="nav-link" href="/my_heroes">My Roster</a>
          <a class="nav-link" href="/signup">Signup</a>
          <a class="nav-link" href="/login">Login</a>
          <a class="nav-link" href="/logout">Logout</a>

          <a class="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav> -->
  
    <!-- Header-->
  <header class="bg-dark py-1">
    <div class="image-fit" :style="{ 'background-image': `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url(https://res.cloudinary.com/dvhdgjued/image/upload/v1657696821/capstone_images/marvel-puzzle-quest-2020-4k-wx_vhltzg.jpg)` }">   
      <div class="container px-2">
          <div class="row gx-9 align-items-center justify-content-center">
              <div class="col-lg-8 col-xl-7 col-xxl-6">
                  <div class="my-5 text-center text-xl-start">
                      <h3 class="display-4 fw-bolder text-center text-white mb-1 ">Marvel Puzzle Quest</h3>
                      <h1 class="display-3 fw-bolder text-center text-white mb-2">-Adventurer's Guide-</h1>
                      <p class="lead display-6 fw-normal text-center text-white-60 mb-2">The Unofficial Companion App to the popular Marvel Puzzle Quest game!</p>
                      <p class="lead fw-normal text-center text-white-60 mb-1">Utilizing the powers of Comicvine and Marvel APIs,</p>
                      <p class="lead fw-bold text-center text-white-60 mb-1">it's the key to unlocking the Marvel Universe!</p>

                  </div>
              </div>
              <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                <!-- <img class="img-fluid rounded-3 my-5" src="https://res.cloudinary.com/dvhdgjued/image/upload/v1657694757/capstone_images/miniheader_hppnfn.jpg" alt="" /> -->
              </div>
          </div>
      </div>
    </div>
  </header>
  
  <router-view/>
  
  <!-- Footer-->
  <footer class="bg-dark py-4 mt-auto">
    <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
            <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Your Website 2022</div></div>
            <div class="col-auto">
                <a class="link-light small" href="https://en.wikipedia.org/wiki/Fourth_Amendment_to_the_United_States_Constitution">Privacy</a>
                <span class="text-white mx-1">&middot;</span>
                <a class="link-light small" href="https://www.apple.com/legal/internet-services/itunes/">Terms</a>
                <span class="text-white mx-1">&middot;</span>
                <a class="link-light small" href="http://marvel.com/">Contact</a>
            </div>
        </div>
    </div>
  </footer>
</template>

<style>

.image-fit {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 500px;
  background-color: black;
  color: white;
  margin-bottom: 0;

}

.bg-dark.py-1 {
  margin-bottom: 0;
}

.container .px-2 {
  margin-bottom: 0;
}

/* .backgrounder {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-position: center;
  background-color: black;
  color: white;
} */
</style>
