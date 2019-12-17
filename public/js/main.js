
var maxDuration = 60000; // temps maximum en millisecondes
var interval = 10; // nombres d'intervales pour l'animation de la barre
var timeoutVar = 0;

function startTimeBarAnimation(maxDuration, interval) {
    intervalDelay = maxDuration  / interval; //durée en millisecondes
    setTimeBar();
    timevar = window.setInterval(changeTimeBar, intervalDelay);
    window.setTimeout(looserAnimation, maxDuration);
}

function looserAnimation() {
    console.log('Partie perdue');
    $('.memo_board_playground').empty();
    $('.memo_board_final_looser').show();
}

function winnerAnimation() {
    console.log('Partie gagnée');
    $('.memo_board_playground').empty();
    $('.memo_board_final_winner').show();
}

function setTimeBar() {
    timerW = $('.memo_timer').width();
    $('.memo_timer_left').width(timerW);
    $('.memo_timer_past').width(0);
}

function changeTimeBar() {
    leftW = $('.memo_timer_left').width();
    pastW = $('.memo_timer_past').width();
    if (leftW !== 0) {
        $('.memo_timer_left').width(leftW - 100);
        $('.memo_timer_past').width(pastW + 100);
    }
}

$( document ).ready(function() {
    console.log( "ready!" );

    //init
    memo = new Memo();
    $('.memo_board_playground').append(memo.getDistribution());

    $('.memo_board_playground').on('click', '.memo_board_card--faceDown',function(){
        if (!memo.isMemoStarted()) {
            memo.memoStart();
            startTimeBarAnimation(maxDuration, interval);
            console.log('le jeu commence');
        }

        let upturned = $('.upturned').length; //Nombre de cartes retournées
        let card = [];

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
            window.clearInterval(timeoutVar);
            winnerAnimation(); 
            console.log('le jeu se termine');
        }

    });


});