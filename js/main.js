// ------------------------------------------
let str1 = 'qwe_asd zxc/123 !@#';
let str2 = 'vbn fgh_rty 456 $%^';
let str3 = 'nm, jkl/uio 789_&*(';
let restrictedList = ['!', ' ', '_', '/'];

let clear1 = str1.split('');
let clear2 = str2.split('');
let clear3 = str3.split('');
console.log('Start1: ' + clear1);
console.log('Start2: ' + clear2);
console.log('Start3: ' + clear3);

for (let i=0; i<restrictedList.length; i++) {
    for (let j=0; j<clear1.length; j++) {
        if (restrictedList[i] === clear1[j]) {
            clear1.splice(j,1);
        }
    }
}

for (let i=0; i<restrictedList.length; i++) {
    for (let j=0; j<clear2.length; j++) {
        if (restrictedList[i] === clear2[j]) {
            clear2.splice(j,1);
        }
    }
}

for (let i=0; i<restrictedList.length; i++) {
    for (let j=0; j<clear3.length; j++) {
        if (restrictedList[i] === clear3[j]) {
            clear3.splice(j,1);
        }
    }
}

clear1 = clear1.join('');
clear2 = clear2.join('');
clear3 = clear3.join('');
console.log('End1: '+ clear1);
console.log('End2: '+ clear2);
console.log('End3: '+ clear3);