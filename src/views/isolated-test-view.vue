<template lang="pug">
//- This is an isolated test view. Just for testing purpose.
div
  vue-cal.vuecal--green-theme.ex--recurring-events.vuecal--full-height-delete(
    selected-date="2018-11-19"
    :time-from="8 * 60"
    :time-to="23 * 60"
    events-count-on-year-view
    editable-events
    show-all-day-events
    :events="recurringEvents")

  br
  br
  h1 Todo
  ul
    li
      h2.mt-5 Problems
      div
        label
          input.mr-2(type="checkbox")
          | Why only one all day event repetition shows up on the first week (week view) with repeat every day?
      div
        label
          input.mr-2(type="checkbox")
          | Why no event show up every January?
      div
        label
          input.mr-2(type="checkbox")
          | Why no event show up from 8th april to november when?
      div
        label
          input.mr-2(type="checkbox")
          | Annual recurring event on 29th of Feb should not show up in count on non leap years
      div
        label
          input.mr-2(type="checkbox")
          | On month view event counts don't appear on out of scope cells
    li
      h2.mt-5 Single day events
      v-layout
        div.mr-5
          strong Normal
          div
            label
              input.mr-2(type="checkbox" checked)
              | every day
          div
            label
              input.mr-2(type="checkbox" checked)
              | every x day
          div
            label
              input.mr-2(type="checkbox" checked)
              | every week day
          div
            label
              input.mr-2(type="checkbox" checked)
              | every week
          div
            label
              input.mr-2(type="checkbox" checked)
              | every month
          div
            label
              input.mr-2(type="checkbox" checked)
              | every year
          div
            label
              input.mr-2(type="checkbox" checked)
              | until
          div
            label
              input.mr-2(type="checkbox")
              | overlapping events with event repetition

        div.mr-5
          strong All day
          div
            label
              input.mr-2(type="checkbox" checked)
              | every day
          div
            label
              input.mr-2(type="checkbox" checked)
              | every x day
          div
            label
              input.mr-2(type="checkbox" checked)
              | every week day
          div
            label
              input.mr-2(type="checkbox" checked)
              | every week
          div
            label
              input.mr-2(type="checkbox" checked)
              | every month
          div
            label
              input.mr-2(type="checkbox" checked)
              | every year
          div
            label
              input.mr-2(type="checkbox" checked)
              | until
          div
            label
              input.mr-2(type="checkbox")
              | overlapping events with event repetition

    li
      h2.mt-5 Multiple day events
      v-layout
        div.mr-5
          strong Normal
          div
            label
              input.mr-2(type="checkbox")
              | every day
          div
            label
              input.mr-2(type="checkbox")
              | every x day
          div
            label
              input.mr-2(type="checkbox")
              | every week day
          div
            label
              input.mr-2(type="checkbox")
              | every week
          div
            label
              input.mr-2(type="checkbox")
              | every month
          div
            label
              input.mr-2(type="checkbox")
              | every year
          div
            label
              input.mr-2(type="checkbox")
              | until
          div
            label
              input.mr-2(type="checkbox")
              | overlapping events with event repetition

        div.mr-5
          strong All day
          div
            label
              input.mr-2(type="checkbox")
              | every day
          div
            label
              input.mr-2(type="checkbox")
              | every x day
          div
            label
              input.mr-2(type="checkbox")
              | every week day
          div
            label
              input.mr-2(type="checkbox")
              | every week
          div
            label
              input.mr-2(type="checkbox")
              | every month
          div
            label
              input.mr-2(type="checkbox")
              | every year
          div
            label
              input.mr-2(type="checkbox")
              | until
          div
            label
              input.mr-2(type="checkbox")
              | overlapping events with event repetition

    li
      h2.mt-5 Events count
      v-layout
        div.mr-5
          strong Single day normal
          div
            label
              input.mr-2(type="checkbox")
              | Events on month view
          div
            label
              input.mr-2(type="checkbox")
              | Events count month
          div
            label
              input.mr-2(type="checkbox")
              | Events count year
          div
            label
              input.mr-2(type="checkbox")
              | Events count years
        div.mr-5
          strong Single day all day
          div
            label
              input.mr-2(type="checkbox")
              | Events on month view
          div
            label
              input.mr-2(type="checkbox")
              | Events count month
          div
            label
              input.mr-2(type="checkbox")
              | Events count year
          div
            label
              input.mr-2(type="checkbox")
              | Events count years
        div.mr-5
          strong Multiple day normal
          div
            label
              input.mr-2(type="checkbox")
              | Events on month view
          div
            label
              input.mr-2(type="checkbox")
              | Events count month
          div
            label
              input.mr-2(type="checkbox")
              | Events count year
          div
            label
              input.mr-2(type="checkbox")
              | Events count years
        div.mr-5
          strong Multiple day all day
          div
            label
              input.mr-2(type="checkbox")
              | Events on month view
          div
            label
              input.mr-2(type="checkbox")
              | Events count month
          div
            label
              input.mr-2(type="checkbox")
              | Events count year
          div
            label
              input.mr-2(type="checkbox")
              | Events count years

</template>

<script>
import VueCal from '@/components/vue-cal'

const now = new Date()
export default {
  components: { VueCal },
  data: () => ({
    selectedDate: now,
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

      // To fix some multiple of 10 are skipped.
      // {
      //   start: '2018-11-19 08:00',
      //   end: '2018-11-19 11:00',
      //   title: 'Nightclub',
      //   content: '<i class="v-icon material-icons">local_drink</i>',
      //   class: 'leisure',
      //   repeat: {
      //     every: 10,
      //     until: '2020-11-30'
      //   }
      // },

      {
        // start: '2018-11-19 22:00',
        // end: '2018-11-20 11:00',
        start: '2018-11-19 08:00',
        end: '2018-11-19 11:00',
        title: 'Nightclub',
        content: '<i class="v-icon material-icons">local_drink</i>',
        class: 'leisure',
        allDay: true,
        repeat: {
          // every: 'day',
          // every: 'week',
          // every: 'month',
          // every: 'year',
          every: 2,
          // weekdays: [1, 4],
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
.test {
  .v-application--wrap {
    min-height: 0;
    padding-top: 8em;
    margin-top: -6em;
  }
  footer {display: none !important;}

  .vuecal {
    min-height: 400px;
    max-height: 75vh;
  }
}
</style>
