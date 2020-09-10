$(function(){
  $('body').keydown(function(e) {
    $.ajax({
      url: '/lessons.json',
      type: "POST",
      data: e.key,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = $('<li class="todo">').append(data.content);
      $('.todos').append(html);
      $('.js-form__text-field').val('');
    })
  })
});