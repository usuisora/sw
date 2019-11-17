<template>
  <div id="list" class="list mx-5 mx-md-0">
    <v-row>
      <v-col id="label-col" cols="12" md="1" class="d-flex flex-column">
        <div class="vtext">Our Starships</div>
      </v-col>

      <v-col id="sort-col " cols="5" class="d-flex d-md-none">
        <Sort :sortParam="sortParam" />
      </v-col>

      <v-col id="filter-buttom-col" cols="7" class="d-flex d-md-none justify-end">
        <v-btn x-large text>
          <span class="primary--text">(3)</span>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </v-col>

      <v-col id="filters-col" cols="12" md="4" lg="3">
        <Filters :pilots="pilots" :starships="starships" :setFilters="setFilters" />
      </v-col>

      <v-col id="cards-col" cols="12" md="7" lg="8">
        <div class="d-flex justify-end">
          <Sort :setSort="setSort" />
        </div>

        <Cards :starships="filteredStarships" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import VerticalTitle from "./list/VerticalTitle";
import Filters from "./list/Filters";
import Cards from "./list/Cards";
import Sort from "./list/Sort";

export default {
  components: {
    Filters,
    Cards,
    Sort
    // VerticalTitle
  },
  data() {
    return {
      starships: [],
      pilots: [],
      sortParam: "",
      filters: { pilots: [], crew: [], capacity: [] }
    };
  },
  computed: {
    sortedStarships: {
      cache: false,
      get() {
        return this.starships
          .slice()
          .sort(
            (a, b) => Number(b[this.sortParam]) - Number(a[this.sortParam])
          );
      }
    },
    filteredStarships: {
      cache: false,
      get() {
        let filtered = this.sortedStarships;
        if (this.filters.pilots.length) {
          filtered = filtered.slice().filter(starship => {
            let intersection = starship.pilots.filter(pilot =>
              this.filters.pilots.includes(pilot)
            );
            return intersection.length > 0;
          });
        }
        //crew
        filtered = filtered.slice().filter(starship => {
          return (
            (starship.crew >= this.filters.crew[0]) &
            (starship.crew <= this.filters.crew[1]) &
            (starship.passengers >= this.filters.capacity[0]) &
            (starship.passengers <= this.filters.capacity[1])
          );
        });
        return filtered;
      }
    }
  },
  methods: {
    async getStarships(url) {
      console.log("fetching");
      let response = await this.$http.get(url);
      let ships = await response.body.results;
      let nships = ships.map(ship => {
        ship.id = ship.url.match(/\d+/)[0];
        return ship;
      });
      return nships;
    },

    async getPilots(url) {
      console.log("fetching");
      let response = await this.$http.get(url);
      let pilots = await response.body.results;
      let npilots = pilots.map(ship => {
        ship.id = ship.url.match(/\d+/)[0];
        return ship;
      });
      return npilots;
    },

    setSort(value) {
      this.sortParam = value;
    },

    setFilters(filters) {
      Object.keys(filters).forEach(key => {
        this.filters[key] = filters[key];
      });
    }
  },
  async created() {
    let starships = JSON.parse(localStorage.getItem("starships"));
    let pilots = JSON.parse(localStorage.getItem("pilots"));

    if (!starships) {
      localStorage.clear();
      //request
      starships = await this.getStarships("https://swapi.co/api/starships");
      localStorage.setItem("starships", JSON.stringify(starships));

      pilots = await this.getStarships("https://swapi.co/api/people");
      localStorage.setItem("pilots", JSON.stringify(pilots));
    }
    //return to data
    this.starships = starships;
    this.pilots = pilots;
  }
};
</script>

<style lang ='scss'>
.list {
  position: relative;
  display: flex;
  z-index: 1;
}
.vtext {
  margin-top: 200px;
  line-height: 26px;
  font-family: "Archivo Black";
  font-size: 24px;
  transform: rotate(-90deg) !important;
  text-transform: uppercase;
}

@media (max-width: 970px) {
  .vtext {
    margin-top: 0px;
    line-height: 26px;
    font-family: "Archivo Black";
    font-size: 14px;
    transform: rotate(0) !important;
    text-transform: uppercase;
  }
}
/* .invisible-text {
  position: absolute;
  font-family: Archivo Black;
  color: #fafafa;
  font-style: normal;
  font-weight: normal;
  font-size: 100px;
  line-height: 109px;
  width: 852px;
  height: 331px;
  text-transform: uppercase;
  bottom: 0;
  z-index: 0;
} */
</style>