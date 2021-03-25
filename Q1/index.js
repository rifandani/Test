const readline = require('readline');

// make readline interface to get user input from command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// initial state
let resto = null;
let keepGoing = 1;
let items = [];

// stdout item
function logItem(text) {
  const textLength = text.length; // text length
  const dotLength = 30 - textLength; // untuk mengisi jumlah ...
  const dotText = '.'.repeat(dotLength); // '......'

  let splittedText = text.split('Rp'); // ['item', '1000']
  splittedText.splice(1, 0, dotText, 'Rp'); // ['item', '...', 'Rp', '1000']
  const joinedText = splittedText.join(''); // 'item...Rp1000'

  console.log(joinedText);
}

// stdout text
function logConsole(text) {
  const textLengthDividedBy30 = Math.ceil(text.length / 30); // untuk mengetahui berapa baris text nya
  let first = 0;
  let second = 30;
  let textArr = []; // text dibagi per baris nya disimpan dalam array

  for (let i = 0; i < textLengthDividedBy30; i++) {
    const slicedText = text.slice(first, second); // get only first 30 chars dan kelipatannya
    textArr.push(slicedText); // push 30 char text pertama ke array
    first += 30;
    second += 30;
  }

  for (let i = 0; i < textArr.length; i++) {
    console.log(textArr[i]);
  }
}

// when user decided to stop continuing
function done() {
  logConsole(`\n${resto.name}`);
  logConsole(`Tanggal: ${resto.date}`);
  logConsole(`Nama kasir: ${resto.cashier}`);

  console.log(`\n==============================\n`);

  for (let i = 0; i < items.length; i++) {
    logItem(`${items[i].name}Rp${items[i].price}`);
  }

  console.log(``);
  const totalPrice = items.reduce((total, el) => total + Number(el.price), 0); // sum total price
  logItem(`TotalRp${totalPrice}`);
}

// if user decided to continue
function keepQuestioning() {
  for (let i = 0; i < keepGoing; i++) {
    rl.question(`Input item ${keepGoing} name: `, (itemName) => {
      rl.question(`Input item ${keepGoing} price: `, (itemPrice) => {
        rl.question('Continue? (yes / no) ', (userContinue) => {
          // push user input to items array
          items.push({
            name: itemName,
            price: itemPrice,
          });

          // if user agreed to continue
          if (
            userContinue === 'yes' ||
            userContinue === 'y' ||
            userContinue === 'Yes' ||
            userContinue === 'YES'
          ) {
            keepGoing += 1;

            keepQuestioning(); // recursive
          } else {
            done(); // selesai

            rl.close();
          }
        });
      });
    });
  }
}

// main function
rl.question('Input resto name: ', (restoName) => {
  rl.question('Input date: ', (dateOfPrint) => {
    rl.question('Input cashier name: ', (cashierName) => {
      resto = {
        name: restoName,
        date: dateOfPrint,
        cashier: cashierName,
      };

      keepQuestioning();
    });
  });
});

rl.on('close', function () {
  process.exit(0);
});
