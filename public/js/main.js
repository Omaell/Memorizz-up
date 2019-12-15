

$( document ).ready(function() {
    console.log( "ready!" );

    //init
    memo = new Memo();
    $('.memo_board').append(memo.getDistribution());
});