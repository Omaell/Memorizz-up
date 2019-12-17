<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>MEMORIZZ UP</title>
        <link rel="stylesheet" href="/public/styles/css/main.css">
        <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous"></script>
        <script src="/public/js/memo.class.js?refresh=<?=rand(1,100)?>"></script>
        <script src="/public/js/main.js?refresh=<?=rand(1,100)?>"></script>
    </head>

    <body>
        <div class="memo_wrapper">
            <div class="memo_title">MEMORIZZ UP</div>
            <div class="memo_message">Vous souhaitez cueillir assez de fruits pour vous préparer un smoothie méga-multi-fruits ? Pour cela, venez jouez avec moi !</div>
            <div class="memo_timer">
                <div class="memo_timer_past"></div>
                <div class="memo_timer_left"></div>
            </div>
            <div class="memo_board">
                <div class="memo_board_playground"></div>
                <div class="memo_board_final memo_board_final_winner">
                   
                    <p>Ok, t\'as gagné ton smoothie... Par contre, on n'a plus de verre !</p>
                </div>
                <div class="memo_board_final memo_board_final_looser">
                    <p>Perdu ! Pas de smoothie pour cette fois.</p>
                </div>
            </div>
        </div>
    </body>

</html>