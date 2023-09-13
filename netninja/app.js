const app = Vue.createApp({
  data() {
    return {
      url: 'http://www.google.com',
      showMovie: true,
      title: 'The Matrix',
      author: 'Joe Silver',
      age: 23,
      x: 0,
      y: 0,
      movies: [
        { title: 'Matrix', score: '10', img: '/assets/1.jpg', isFav: true },
        { title: 'John Wick', score: '9', img: '/assets/2.jpg', isFav: false },
        { title: 'Enter the dragon', score: '10', img: '/assets/3.jpg', isFav: false }
      ]
    }
  },
  methods: {
    toggleMovies() {
      this.showMovie = !this.showMovie
    },
    handleEvent(e, l) {
      console.log(e, e.type);
      if (l) {
        console.log(l);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    toggleClass(movie) {
      movie.isFav = !movie.isFav
    }
  },
  computed: {
    filteredMovies() {
      return this.movies.filter((movie) => movie.isFav)
    }
  }
})

app.mount('#app')