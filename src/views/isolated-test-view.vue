<template lang="pug">
//- This is an isolated test view. Just for testing purpose.
vue-cal.vuecal--green-theme.ex--recurring-events.vuecal--full-height-delete(
  selected-date="2018-11-19"
  :time-from="8 * 60"
  :time-to="23 * 60"
  hide-weekends
  events-count-on-year-view
  editable-events
  show-all-day-events
  :events="recurringEvents"
  style="min-height: 400px;max-height: 65vh")
</template>

<script>
import VueCal from '@/components/vue-cal'

const now = new Date()
export default {
  components: { VueCal },
  data: () => ({
    selectedDate: now,
    events: [
      {
        startDate: now.subtractDays(1),
        endDate: now.addDays(1),
        title: 'Event'
      }
    ],
    recurringEvents: [
      // @todo: repeat a single day background event the whole week. E.g. lunch.
      // {
      //   start: '2018-11-19 12:00',
      //   end: '2018-11-19 14:00',
      //   title: 'Lunch',
      //   content: '<i class="v-icon material-icons">local_drink</i>',
      //   class: 'lunch',
      //   background: true,
      //   repeat: {
      //     // every: 'day',
      //     weekdays: [1, 2, 3, 4, 5],
      //     until: '2020-11-30'
      //   }
      // },
      {
        start: '2018-11-19 22:00',
        end: '2018-11-20 11:00',
        title: 'Nightclub',
        content: '<i class="v-icon material-icons">local_drink</i>',
        class: 'leisure',
        repeat: {
          // every: 'day', // OK.
          every: 'week', // OK.
          // every: 'month', // OK.
          // every: 'year', // OK.
          // every: 10, // OK.
          // weekdays: [1, 4], // OK.
          // weekdays: [2, 4],
          until: '2020-11-30'
        }
      },

      // All bellow are ok.
      // {
      //   start: '2018-11-19 22:00',
      //   end: '2018-11-20 11:00',
      //   title: 'Nightclub',
      //   content: '<i class="v-icon material-icons">local_drink</i>',
      //   class: 'leisure',
      //   repeat: {
      //     // every: 'week', // OK.
      //     // every: 'month', // OK.
      //     // every: 'year', // OK.
      //     // every: 10, // OK.
      //     weekdays: [1, 3], // OK.
      //     // weekdays: [2, 4],
      //     until: '2020-11-30'
      //   }
      // },
      // {
      //   start: '2018-11-23', // You can put time or not, will be discarded.
      //   end: '2018-11-23',
      //   title: 'Pizza day!',
      //   content: '<i class="v-icon material-icons">local_pizza</i>',
      //   class: 'pink-event',
      //   allDay: true,
      //   repeat: {
      //     weekdays: [5] // If original event day is not in these days, original event will still show up.
      //   }
      // },
      // {
      //   start: '2018-11-20 18:00',
      //   end: '2018-11-20 20:00',
      //   title: 'Tennis',
      //   content: '<i class="v-icon material-icons">sports_tennis</i>',
      //   class: 'sport',
      //   repeat: {
      //     weekdays: [2, 4],
      //     until: '2018-11-28' // Don't need a time here as it will take the same as original event date.
      //   }
      // },
      // {
      //   start: '2018-11-22 10:00',
      //   end: '2018-11-22 12:00',
      //   title: 'Piano lesson',
      //   content: '<i class="v-icon material-icons">queue_music</i>',
      //   class: 'leisure',
      //   repeat: {
      //     weekdays: [3, 4],
      //     // every: 1, // OK.
      //     until: '2018-12-26'
      //   }
      // },
      // {
      //   start: '2018-11-01',
      //   end: '2018-11-01',
      //   title: 'Crêpes day',
      //   content: '<i class="v-icon material-icons">queue_music</i>',
      //   class: 'yellow-event',
      //   allDay: true,
      //   repeat: {
      //     every: 'month',
      //     until: '2019-12-26'
      //   }
      // },
      // {
      //   start: '2015-06-15',
      //   end: '2015-06-15',
      //   title: 'My Birthday',
      //   content: '<i class="v-icon material-icons">cake</i><br>I am 4.',
      //   class: 'blue-event',
      //   allDay: true,
      //   repeat: {
      //     every: 'year'
      //   }
      // },
      // {
      //   start: '2018-11-21 18:30',
      //   end: '2018-11-21 19:30',
      //   title: 'Apero time',
      //   content: '<i class="v-icon material-icons">local_bar</i>',
      //   class: 'leisure',
      //   repeat: {
      //     every: 14,
      //     until: '2019-02-01'
      //   }
      // }
    ],
  }),

  methods: {
  }
}
</script>

<style lang="scss">
.v-application--wrap {min-height: 0;}
footer {display: none !important;}
</style>
