class Bingo {
    constructor(card) {
        this.card = card.map(row => {
            return row.map(num => {
                return {
                    value: num,
                    state: undefined
                }
            })
        });
        this.id = card[0].join();
        this.winner = false;
    }

    stampCard(num) {
        return new Promise((resolve, reject) => {
            this.card.forEach(row => {
                row.forEach(square => {
                    if (square.value === num) {
                        square.state = 'called';
                    }
                })
            });
            return resolve();
        });
    }

    checkCard() {
        return new Promise((resolve, reject) => {
            this.checkHorizontal().then(result => {
                if (result) return resolve(this.card);
                this.checkVertical().then(res => {
                    if (res) return resolve(this.card);
                    else return resolve(false);
                })
            });
        })
    }

    checkHorizontal() {
        return new Promise((resolve, reject) => {
            this.card.forEach(row => {
                const called = row.filter(square => square.state === 'called');
                if (called.length === 5) {
                    this.winner = true;
                    return resolve(true);
                }
            });

            return resolve(false);
        })
    }

    checkVertical() {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < 5; i++) {
                let called = [];
                this.card.forEach(row => {
                    if (row[i].state === 'called') called.push(row[i]);
                });
                if (called.length === 5) {
                    this.winner = true;
                    resolve(true);
                }
            }

            resolve(false);
        })
    }
}

module.exports.Bingo = Bingo