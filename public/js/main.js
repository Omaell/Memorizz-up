

$( document ).ready(function() {
    console.log( "ready!" );

    //init
    memo = new Memo();
    $('.memo_board').append(memo.getDistribution());

    $('.memo_board').on('click', '.memo_board_card--faceDown',function(){
        console.log('click');
        if (!memo.isMemoStarted()) {
            memo.memoStart();
            console.log('le jeu commence');
        }

        let upturned = $('.upturned').length; //Nombre de cartes retournées
        let card = [];

        console.log('nombre de cartes retournées : ' + upturned);
        // si il y en a 2 ou plus 
        if (upturned > 1) {
            // On boucle sur les cartes dans l'état retourné (upturned)
            $('.upturned').each(function(index){
                card[index] = $( this ).data('faceup'); // on stocke en mémoire leur fruit
            });
            // On compare les fruits des deux cartes
            if (card[0] !== card[1]) { // si ils sont différents...
                $('.upturned').each(function(){
                    $( this ).removeClass('upturned'); // on leur retire l'état tourné (upturned)
                    $( this ).removeClass('memo_board_card--' + $( this ).data('faceup')); // et on les remet face cachée
                    $( this ).addClass('memo_board_card--faceDown');
                });
            }
            else { // si ce sont les mêmes
                $('.upturned').each(function(){
                    $( this ).removeClass('upturned'); // on leur retire aussi l'état tourné 
                    // mais on les laisse face découverte
                });
            }            
        }
        // si il n'y a qu'une ou zéro carte dans l'état tourné (upturned)
        // on peut découvrir la carte cliquée et la mettre en état tourné (upturned)
        $( this ).removeClass('memo_board_card--faceDown'); 
        $( this ).addClass('memo_board_card--' + $( this ).data('faceup'));
        $( this ).addClass('upturned');

        // On vérifie que le jeu n'est pas encore terminé
        if ( $('.memo_board_card--faceDown').length === 0){
            memo.memoEnd();
            console.log('le jeu se termine');
        }

    });


});