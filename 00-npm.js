const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const formattedItems = _.flattenDeep(items);
console.log(formattedItems);

//npm install nodemon -D
//npm install nodemon --save-dev
// npm uninstall bootstrap