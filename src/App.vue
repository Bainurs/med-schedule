<template>
  <div class="container" id="app">
    <div class="row">
      <div class="col-5">
        <select
          @change="onChange($event)"
          name="typeSchedule"
          id="type-schedule"
          v-model="typeSchedule"
        >
          <option
            v-for="item in schedules"
            :key="item"
            v-bind:value='item'
          >
            {{ item }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div
        class="col-5"
        v-if="typeSchedule === schedules[0]"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">График приема</th>
              <th scope="col">Состояние</th>
              <th scope="col">Забронировать</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in schedule1"
              :key="row.id"
              :id="row.id"
            >
              <td>{{row.option}}</td>
              <td>{{row.type}}</td>
              <td>
                <button v-if="row.type === '❌'" class="btn btn-danger" disabled>Забронированно</button>
                <button v-if="row.type !== '❌'" class="btn btn-success" @click="schedule1Reservation(schedule1, row.id)">Забронировать</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="col-5"
        v-if="typeSchedule === schedules[1]"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">График приема</th>
              <th scope="col">Состояние</th>
              <th scope="col">Забронировать</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in schedule2"
              :key="row.id"
              :id="row.id"
            >
              <td>{{row.option}}</td>
              <td>{{row.type}}</td>
              <td>
                <button v-if="row.type === '❌'" class="btn btn-danger" disabled>Забронированно</button>
                <button v-if="row.type !== '❌'" class="btn btn-success" @click="schedule1Reservation(schedule2, row.id)">Забронировать</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="col-5"
        v-if="typeSchedule === schedules[2]"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">График приема</th>
              <th scope="col">Состояние</th>
              <th scope="col">Забронировать</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in schedule3"
              :key="row.id"
              :id="row.id"
            >
              <td>{{row.option}}</td>
              <td>{{row.type}}</td>
              <td>
                <button v-if="row.type === '❌'" class="btn btn-danger" disabled>Забронированно</button>
                <button v-if="row.type !== '❌'" class="btn btn-success" @click="schedule1Reservation(schedule3, row.id)">Забронировать</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      typeSchedule: 'Первый график',
      schedules: [
        'Первый график',
        'Второй график',
        'Третий график'
      ],
      schedule1: [
        {id: 1, option: '8:00 - 8:30', type: '❌'},
        {id: 2, option: '8:30 - 9:00', type:'✅'},
        {id: 3, option: '9:00 - 9:30', type:'✅'},
        {id: 4, option: '9:30 - 10:00', type:'❌'},
        {id: 5, option: '10:00 - 10:30', type:'✅'},
        {id: 6, option: '10:30 - 11:00', type:'✅'},
        {id: 7, option: '11:00 - 11:30', type:'✅'},
        {id: 8, option: '11:30 - 12:00', type:'❌'},
        {id: 9, option: '12:00 - 12:30', type:'❌'},
        {id: 10,option: '12:00 - 13:00', type:'❌'},
        {id: 11,option: '13:00 - 13:30', type:'✅'},
        {id: 12,option: '13:30 - 14:00', type:'✅'},
        {id: 13,option: '14:00 - 14:30', type:'✅'},
        {id: 14,option: '14:30 - 15:00', type:'✅'},
        {id: 15,option: '15:00 - 15:30', type:'✅'},
        {id: 16,option: '15:30 - 16:00', type:'✅'},
        {id: 17,option: '16:00 - 16:30', type:'✅'},
        {id: 18,option: '16:30 - 17:00', type:'✅'},
      ],
      schedule2: [
        {id: 1, option: '7:00 - 7:15', type: '✅'},
        {id: 2, option: '7:15 - 7:30', type: '✅'},
        {id: 3, option: '7:30 - 7:45', type: '✅'},
        {id: 4, option: '7:45 - 8:00', type: '✅'},
        {id: 5, option: '8:00 - 8:15', type: '✅'},
        {id: 6, option: '8:15 - 8:30', type: '❌'},
        {id: 7, option: '8:30 - 8:45', type: '✅'},
        {id: 8, option: '8:45 - 9:00', type: '✅'},
        {id: 9, option: '9:00 - 9:15', type: '✅'},
        {id: 10, option: '9:15 - 9:30', type: '✅'},
        {id: 11, option: '9:30 - 9:45', type: '❌'},
        {id: 12, option: '9:45 - 10:00', type: '❌'},
        {id: 13, option: '10:00 - 10:15', type: '✅'},
        {id: 14, option: '10:15 - 10:30', type: '✅'},
        {id: 15, option: '10:30 - 10:45', type: '✅'},
        {id: 16, option: '10:45 - 11:00', type: '✅'},
        {id: 17, option: '11:00 - 11:15', type: '✅'},
        {id: 18, option: '11:15 - 11:30', type: '✅'},
        {id: 19, option: '11:30 - 11:45', type: '❌'},
        {id: 20, option: '11:45 - 12:00', type: '❌'},
        {id: 21, option: '12:00 - 12:15', type: '❌'},
        {id: 22, option: '12:15 - 12:30', type: '❌'},
        {id: 23, option: '12:30 - 12:45', type: '❌'},
        {id: 24, option: '12:45 - 13:00', type: '✅'},
        {id: 25, option: '13:00 - 13:15', type: '✅'},
        {id: 26, option: '13:15 - 13:30', type: '✅'},
        {id: 27, option: '13:30 - 13:45', type: '✅'},
        {id: 28, option: '13:45 - 14:00', type: '✅'},
        {id: 29, option: '14:00 - 14:15', type: '✅'},
        {id: 30, option: '14:15 - 14:30', type: '✅'},
        {id: 31, option: '14:30 - 14:45', type: '✅'},
        {id: 32, option: '14:45 - 15:00', type: '✅'},
        {id: 33, option: '15:00 - 15:15', type: '✅'},
        {id: 34, option: '15:15 - 15:30', type: '✅'},
        {id: 35, option: '15:30 - 15:45', type: '✅'},
        {id: 36, option: '15:45 - 16:00', type: '✅'},
        {id: 37, option: '16:00 - 16:15', type: '✅'},
        {id: 38, option: '16:15 - 16:30', type: '✅'},
        {id: 39, option: '16:30 - 16:45', type: '✅'},
        {id: 40, option: '16:45 - 17:00', type: '✅'},
      ],
      schedule3: [
        {id: 1, option: '9:00 - 10:15', type: '❌'},
        {id: 2, option: '10:15 - 11:30', type: '✅'},
        {id: 3, option: '11:30 - 12:45', type: '❌'},
        {id: 4, option: '12:45 - 14:00', type: '✅'},
        {id: 5, option: '14:00 - 15:15', type: '✅'},
        {id: 6, option: '15:15 - 16:30', type: '✅'},
        {id: 7, option: '16:30 - 16:45', type: '❌'},
      ]
    }
  },
  methods: {
    onChange(event) {
      console.log(this.typeSchedule)
    },
    schedule1Reservation(arr, id) {
      console.log(arr);
      arr.map(item => {
        item.id === id ? item.type = '❌' : null;
        return item;
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
