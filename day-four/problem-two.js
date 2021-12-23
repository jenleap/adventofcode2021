const fs = require('fs');
const { Bingo } = require('./bingo');

fs.readFile('./day-four/input.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return;
    }

    const splitData = data.split('\n');

    const numsToCall = splitData[0].split(",").filter(num => num.length > 0);

    let bingoCards = [];

    let winners = new Set();

    for (let i = 2; i < splitData.length - 6; i = i + 6) {
      let cards = [];
      for (let j = 0; j < 5; j++) {
        cards.push(splitData[i + j].split(" ").filter(num => num.length > 0));
      }

      bingoCards.push(new Bingo(cards));
    }

      numsToCall.forEach(num => {
        bingoCards.forEach(card => {
          setTimeout(() => {
            card.stampCard(num).then(() => {
              card.checkCard().then(res => {
                if (res) {
                    if (winners.size < bingoCards.length - 1) {
                        winners.add(card.id);
                    } else if (!winners.has(card.id)) {
                        const cardSum = sumCard(res);
                        console.log(cardSum * parseInt(num));
                        process.exit();
                    }
                  
                };
              })
            });
          });
          }, 100);     
      });

});

sumCard = (card) => {
  let total = 0;
  card.forEach(row => {
    row.forEach(square => {
      if (square.state !== 'called') {
        total = total + parseInt(square.value);
      }
    })
  });
  return total;
}