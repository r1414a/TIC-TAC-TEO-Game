$(document).ready(function(){
    var turn = 0;
    $('span').hide();
    $('table').hide();
    $('h3').css("background-color", "red");
    $('table').fadeOut(100);
    $('table').fadeIn(2000);
    
    $('.bttn').on('click', function () {
        if (turn == 0) {
            this.innerHTML = 'X';
            turn = turn + 1;
            $('h3').css("background-color", "green")
            $('h3').text("Player O's Turn")
        } else if (turn == 1) {
            this.innerHTML = 'O';
            turn = turn + 1;
            $('h3').css("background-color", "red")
            $('h3').text("Player X's Turn")
        } else if (turn == 2) {
            this.innerHTML = 'X'
            turn = turn + 1;
            $('h3').css("background-color", "green")
            $('h3').text("Player O's Turn")
        } else if (turn == 3) {
            this.innerHTML = 'O'
            turn = turn + 1;
            $('h3').css("background-color", "red")
            $('h3').text("Player X's Turn")
        } else if (turn == 4) {
            this.innerHTML = 'X'
            turn = turn + 1;
            $('h3').css("background-color", "green")
            $('h3').text("Player O's Turn")
            winner();
            //draw();
        } else if (turn == 5) {
            this.innerHTML = 'O'
            turn = turn + 1;
            $('h3').css("background-color", "red")
            $('h3').text("Player X's Turn")
            winner();
            //draw();
        } else if (turn == 6) {
            this.innerHTML = 'X'
            turn = turn + 1;
            $('h3').css("background-color", "green")
            $('h3').text("Player O's Turn")
            winner();
            //draw();
        } else if (turn == 7) {
            this.innerHTML = 'O'
            turn = turn + 1;
            $('h3').css("background-color", "red")
            $('h3').text("Player X's Turn")
            winner();
        } else if (turn == 8) {
            this.innerHTML = 'X'
            turn = turn + 1;
            winner();
            draw();
        }
    })
    function winner(){
        if($('#br1').html() === 'X' && $('#br4').html() === 'X' && $('#br7').html() === 'X'){
            $('#br1').css('color','rgb(39 0 255)');
            $('#br4').css('color','rgb(39 0 255)');
            $('#br7').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player X Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
            
        }else if($('#br1').html() === 'X' && $('#br2').html() === 'X' && $('#br3').html() === 'X'){
            $('#br1').css('color','rgb(39 0 255)');
            $('#br2').css('color','rgb(39 0 255)');
            $('#br3').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player X Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br1').html() === 'X' && $('#br5').html() === 'X' && $('#br9').html() === 'X'){
            $('#br1').css('color','rgb(39 0 255)');
            $('#br5').css('color','rgb(39 0 255)');
            $('#br9').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player X Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br2').html() === 'X' && $('#br5').html() === 'X' && $('#br8').html() === 'X'){
            $('#br2').css('color','rgb(39 0 255)');
            $('#br5').css('color','rgb(39 0 255)');
            $('#br8').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player X Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br3').html() === 'X' && $('#br6').html() === 'X' && $('#br9').html() === 'X'){
            $('#br3').css('color','rgb(39 0 255)');
            $('#br6').css('color','rgb(39 0 255)');
            $('#br9').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player X Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br3').html() === 'X' && $('#br5').html() === 'X' && $('#br7').html() === 'X'){
            $('#br3').css('color','rgb(39 0 255)');
            $('#br5').css('color','rgb(39 0 255)');
            $('#br7').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player X Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br4').html() === 'X' && $('#br5').html() === 'X' && $('#br6').html() === 'X'){
            $('#br4').css('color','rgb(39 0 255)');
            $('#br5').css('color','rgb(39 0 255)');
            $('#br6').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player X Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br8').html() === 'X' && $('#br7').html() === 'X' && $('#br9').html() === 'X'){
            $('#br8').css('color','rgb(39 0 255)');
            $('#br7').css('color','rgb(39 0 255)');
            $('#br9').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player X Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        }
    
    
        /* ----------------------------Above code is when winner is X------------------------- */
    
    
        if($('#br1').html() === 'O' && $('#br4').html() === 'O' && $('#br7').html() === 'O'){
            $('#br1').css('color','rgb(39 0 255)',);
            $('#br4').css('color','rgb(39 0 255)');
            $('#br7').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player O Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br1').html() === 'O' && $('#br2').html() === 'O' && $('#br3').html() === 'O'){
            $('#br1').css('color','rgb(39 0 255)');
            $('#br2').css('color','rgb(39 0 255)');
            $('#br3').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player O Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br1').html() === 'O' && $('#br5').html() === 'O' && $('#br9').html() === 'O'){
            $('#br1').css('color','rgb(39 0 255)');
            $('#br5').css('color','rgb(39 0 255)');
            $('#br9').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player O Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br2').html() === 'O' && $('#br5').html() === 'O' && $('#br8').html() === 'O'){
            $('#br2').css('color','rgb(39 0 255)');
            $('#br5').css('color','rgb(39 0 255)');
            $('#br8').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player O Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br3').html() === 'O' && $('#br6').html() === 'O' && $('#br9').html() === 'O'){
            $('#br3').css('color','rgb(39 0 255)');
            $('#br6').css('color','rgb(39 0 255)');
            $('#br9').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player O Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br3').html() === 'O' && $('#br5').html() === 'O' && $('#br7').html() === 'O'){
            $('#br3').css('color','rgb(39 0 255)');
            $('#br5').css('color','rgb(39 0 255)');
            $('#br7').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player O Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
       
        }else if($('#br4').html() === 'O' && $('#br5').html() === 'O' && $('#br6').html() === 'O'){
            $('#br4').css('color','rgb(39 0 255)');
            $('#br5').css('color','rgb(39 0 255)');
            $('#br6').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player O Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        
        }else if($('#br8').html() === 'O' && $('#br7').html() === 'O' && $('#br9').html() === 'O'){
            $('#br8').css('color','rgb(39 0 255)');
            $('#br7').css('color','rgb(39 0 255)');
            $('#br9').css('color','rgb(39 0 255)');
            $('h3').hide();
            $('span').text('Player O Won!!!!!');
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        }
        
    }
    
    $('#reset').click(function(){
        location.reload();
    });
    
    function draw () {
        if($('#br1').html() !== 'X' && $('#br2').html() !== 'X' && $('#br3').html() !== 'X'){
            $('h3').hide();
            $('span').text("It's A Draw!!!!!");
            $('span').fadeIn(1000);
            $('table').fadeOut(2000);
        }
    }
});
