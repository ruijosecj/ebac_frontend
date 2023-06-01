
$('form').on('submit', function(e){
    e.preventDefault();
    const inputNovaAtividade = $('#inputNovaAtividade').val();
    $(`<li>${inputNovaAtividade} <i class="fas fa-check"></i> </li>`).appendTo('ol');
    $('#inputNovaAtividade').val('');  
     
   $('li').click(function(){
    $(this).addClass('checked')
   })
})


$('header button').click(function(e){
    $('form').slideDown();
})

$('.cancelar').click(function(e){
    $('form').slideUp();
})

