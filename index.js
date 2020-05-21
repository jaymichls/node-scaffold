const dataFns = require('date-fns')

const now = dataFns.format(new Date(),  "yyyy-MM-dd")
console.log(`Todays date is: ${now}`)