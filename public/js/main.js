

$( document ).ready(function() {
    console.log( "ready!" );

    //init
memo = new Memo();
console.log( memo.getDistribution() );
$('div.plateau').append(memo.getDistribution());
});