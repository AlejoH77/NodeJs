const { exec, spawn } = require('child_process');
const { stdout } = require('process');

exec('dir', (err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout);
});

let proceso = spawn('dir', []);