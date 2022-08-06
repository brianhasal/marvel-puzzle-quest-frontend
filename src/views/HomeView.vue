<script>
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
      };
    },
    created: function () {},
    methods: {},
  };
</script>

<template>
  <div class="home">
    <h1 class="display-3 fw-bolder text-center text-white mb-1 ">Sample Website, by Brian Hasal</h1>
    <h3 class="display-6 fw-bolder text-center text-white mb-1 "><a href="https://github.com/brianhasal">github.com/brianhasal</a> | <a href="https://www.linkedin.com/in/brianhasal/">linkedin.com/in/brianhasal/</a></h3>
    <h3 class="fw-bolder text-center text-white mb-1 ">
      <a href="mailto:brian.hasal@gmail.com">brian.hasal@gmail.com</a> | <a href="src/assets/Brian Hasal - Resume.pdf">Resume</a>
    </h3>
    <div>
      <h4 class="fw-bolder text-center text-white mb-1 ">
        This is an ongoing project initially built as a capstone for <a href="https://anyonecanlearntocode.com/">Actualize Bootcamp</a>.
      </h4> 
    </div>
    <div>
      <p class="display-p fw-bold text-center text-white mb-1 "> I'm using a PostgreSQL database with a Ruby on Rails backend. The frontend was built using Vue.js, and a template from <a href="https://startbootstrap.com/">startbootstrap.com</a>.</p>
      <p class="fw-bold text-center text-white mb-1 "></p>
    </div>
    <div class="container text-white">
      <div class="display-6">WHAT IS THIS?!</div>
      <p>
        I play a game called Marvel Puzzle Quest, and it's had a steady community of players for the past 8 years. Known for innovating match-3 games by adding RPG elements, the makers of Puzzle Quest have built a quality product based around a solid IP that is in no danger of slowing down. The day I start playing, I will gain access to Iron Man and Black Widow, each with one special ability. Each character will eventually have three special abilities. I can activate these abilities after matching enough like colors that I’m accruing at the top of the screen. Winning these battles can yield tokens that can be exchanged for cards. These cards can power up my existing team’s special moves up to five times each, or help me collect brand new heroes. With more than 250 characters, keeping track of that much information can be cumbersome on mobile devices. On a base level, my app helps me track my collection, but it does a bit more.
      </p>
      <p>
        My capstone's goal is to be the bridge between the game and other forms of media, including movies, games, and, of course, the comics. Combined with my copious knowledge about imaginary characters, I've utilized the Comicvine and Official Marvel APIs to provide buckets of information, and up-to-the minute content from Marvel.com. In fact, my seeds file was populated by artwork I downloaded using the MARVEL API. Before that, I had to log-in.
      </p>
      <p>
        In order to access different information, whether it be comics, characters, series, creators, etc, each topic has its own specific path. Am I sorting by official name? or by the first few letters? Or by ID that is only indicated on the JSON? Each of the options have their own methods, which became a required parameter to building the request. 
      </p>
      <p>
        Unquestionably, constructing the API string was the most challenging part of the process, from a learning-on the-go perspective. 
      </p>
      <p>
        My ultimate version will accept an ID number as a param (from Marvel, stored in the db) That id is put into a function that yields the method portion of the url. The method is used in, essentially, a URL HANDLER function that returns a GET request. Those functions are both used in one of several final functions that each give different results. 
      </p>
      <p>
        By comparison, the constructor method I built to assemble to urls for Comicvine couldn’t have been more user-friendly. By tacking the url onto the back of the url, I gained almost instant access to a more comprehensive API than Marvel’s, if I’m being honest.
      </p>
      <div class="display-6">WHAT CAN I DO? </div>
      <p>
        Feel free to sign up with a dummy email account and password, or use <p class="p.i">email</p>: a@test.com, <p class="p.i">password</p> password<br/>
        From there, you will be delivered to the index of all of my sample heroes (9 in total)
      </p>
      <p>
        Clicking on the "Powers" button raises a modal (pop-up) containing the color, cost, name, and description for each of their particular powers. 
      </p>
      <p>
        Following the modal's linksends me to that character's show page, which is really just an excuse to look at a higher resolution version of the art. 
      </p>
      <p>
        Back on the All Heroes page, because I'm signed in, I can add heroes to my team here, and they are added to my team on the Roster Page. 
      </p>
      <p>
        This roster page only includes heroes on my team, and allows me to keep track of my power count using a modified ratings system connected to the backend. 
      </p>
      <p>
        As my collection grows, I unlock achievements in the form of specific additional information from my APIs. In this build, all of that information is available now.
      </p>
      <p>
        At 5 characters, the Achievements Page unlocks explaining how it works. This is another excuse to look at the artwork from the APIs that are associated with each of the individual character's biographies. 
      </p>
      <p>
        10 characters earns links to Marvel.com, helping me find official links to comic information for each specific character (***currently only Spider-Man***). Other tiers will include aliases, truncated biographies, and even EPIC illustrated biographies detailing nearly every event in a character's history. 
      </p>
      <p>
        Would you like to see the same information for “Batman” from DC, or “Spawn” from Image? Throw that request in the search bar to see what comes up. (If multiple universes have characters of the same name, there is chance the API pulls the wrong one. I haven’t sorted that out, yet.)
      </p>
      <p>
        Eventually, I'd like to create a compare collections option amongst users, allowing you to view and contrast with other players' collections. 
      </p>
      <div>
        <div class="display-6">WHAT WOULD I ADD? </div>
        <p>
          I'd also like to see a sorting function on the index pages to help parse through collections. 
        </p>
        <p>
          There's a built function and database that allows any user to leave comments on each characters' show page that felt difficult to justify. Kind of a hat on a hat situation. 
        </p>
      </div>
    </div>
  </div>
</template>

<style>
p.i {
  font-style: italic;
}
</style>