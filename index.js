const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit  = require('simple-git');


const file_path = './data.json'
const date = moment().format();
const data = { date: date};
jsonfile.writeFile(file_path, data);
simpleGit().add([file_path]).commit(date, {'--date':date}).push();

// const makeCommit = (x,y) =>{
//     const date = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();
//     const data = {date: date};
//     jsonfile.writeFile(file_path, data, ()=>{
//         simpleGit().add([file_path]).commit(date, {'--date':date}).push();
//     })
// }

// makeCommit(2,1);