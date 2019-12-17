class Memo {

    constructor() 
    {
        this.d = new Date();
        this.html = '';
        this.cards = [];
        this.startTimestamp = 0;
        this.endTimestamp = 0;
        this.distribution = this.getCards().sort(function(a, b){return 0.5 - Math.random()});
        this.distribution.forEach(this.enHtml, this);
    }

    memoStart() 
    {
        // set startTimestamp with the current timestamp in milliseconds
        this.startTimestamp = this.d.getTime();
    }
    memoStop() 
    {
        // set endTimestamp with the current timestamp in milliseconds
        this.endTimestamp = this.d.getTime();
        console.log('le score : ' + this.getScore());
    }

    isMemoStarted() 
    {
        if (this.startTimestamp !== 0) {
            return true;
        }
        return false;
    }

    getScore() {
        return this.endTimestamp - this.startTimestamp;
    }

    getDistribution() {
        return this.html;
    }

    enHtml(value, index, array) {
        this.html = this.html + '<div class="memo_board_card memo_board_card--faceDown" data-faceup="' +value+ '"></div>';
    }
    
    getCards() {
       this.cards = [
                        'apple',
                        'banana',
                        'orange',
                        'greenlemon',
                        'pomegranate',
                        'abricot',
                        'lemon',
                        'strawberry',
                        'granny',
                        'peach',
                        'grappes',
                        'watermelon',
                        'plum',
                        'pear',
                        'cherry', 
                        'raspberry', 
                        'mango',
                        'yellowcherry'
                    ];
        return this.cards.concat(this.cards);
    }

  }