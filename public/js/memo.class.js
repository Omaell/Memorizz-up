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
        this.html = this.html + '<div class="carte ' +value+ '"></div>';
    }
    
    getCartes() {
       this.cartes = [
                        'pomme',
                        'banane',
                        'orange',
                        'citronvert',
                        'grenade',
                        'abricot',
                        'citron',
                        'fraise',
                        'pommegranny',
                        'peche',
                        'raisin',
                        'pasteque',
                        'prune',
                        'poire',
                        'cerise', 
                        'framboise', 
                        'mangue',
                        'cerisejaune'
                    ];
        return this.cartes.concat(this.cartes);
    }
  }