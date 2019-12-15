class Memo {


    constructor() {
        this.html = '';
        this.cartes = [];
        this.distribution = this.getCartes().sort(function(a, b){return 0.5 - Math.random()});
        this.distribution.forEach(this.enHtml, this);
    }

    getDistribution() {
        return this.html;
    }

    enHtml(value, index, array) {
        this.html = this.html + '<div class="memo_board_card memo_board_card--' +value+ '"></div>';
    }
    
    getCartes() {
       this.cartes = [
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
        return this.cartes.concat(this.cartes);
    }
  }