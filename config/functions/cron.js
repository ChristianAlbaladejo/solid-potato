'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#cron-tasks
 */

function addDays(date, days) {
  const copy = new Date(Number(date))
  copy.setDate(date.getDate() + days)

  return copy
}

module.exports = {
  '*/5 * * * * *': () => {
    console.log("🚀 ~ file: cron.js ~ line 21 ~Every 5sec");

    var nombre = async function () {
      const date = new Date(new Date().setUTCHours(0, 0, 0, 0));
      const newDate = addDays(date, 5);
      var test = await strapi.query('operations').find({ nextDate: newDate });
      return test;
    }

    nombre().then(function (value) {
      // cumplimiento
      if (value.length > 0){
        for (let i = 0; i < value.length; i++) {
          
        }
      }
    });

    var threeDays = async function () {
      const date = new Date(new Date().setUTCHours(0, 0, 0, 0));
      const newDate = addDays(date, 3);
      var test = await strapi.query('checklists').find({ alertDate: newDate });
      return test;
    }

    threeDays().then(function (value) {
      // cumplimiento
      if (value.length != 0) {
        console.log("holaa")
      }
    });

    var oneDays = async function () {
      const date = new Date(new Date().setUTCHours(0, 0, 0, 0));
      const newDate = addDays(date, 1);
      var test = await strapi.query('checklists').find({ alertDate: newDate });
      return test;
    }

    oneDays().then(function (value) {
      // cumplimiento
      if (value.length != 0) {
        console.log("hola")
      }
    });

    var ceroDays = async function () {
      const date = new Date(new Date().setUTCHours(0, 0, 0, 0));
      const newDate = addDays(date, 0);
      var test = await strapi.query('checklists').find({ alertDate: newDate });
      return test;
    }

    ceroDays().then(function (value) {
      // cumplimiento
      if (value.length != 0) {
        console.log("hola")
      }
    });
  },
  '*/10 * * * * *': () => {
    console.log("🚀 ~ file: cron.js ~ line 21 ~Every 10sec");
  },
  '* */5 * * * *': () => {
    console.log("🚀 ~ file: cron.js ~ line 21 ~Every 5min");
  },
  '* * */5 * * *': () => {
    console.log("🚀 ~ file: cron.js ~ line 21 ~Every 5hour");
  },

};
