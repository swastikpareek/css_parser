(function() {
  $(document).ready(function() {
    $('.form').hide();
    $('.out-put').hide();
    $('#submit-url').click(function() {
      var text = $('#get-the-url').val();
      var goats = text.split('}');
      goats = goats.splice(0, goats.length - 1);
      $('.marking').html('');
      var html = '';
      var i = 0;

      goats.forEach(function(goat) {
        html += "<div class='selectors item-" + i + "'><label class='label'>" + goat.split('{')[0] + "</label><input type='hidden' class='css-code' value='" + goat.split('{')[1] + "'><input class='new-selector' /></div>";
        i = i + 1;
      });
      $('.marking').prepend(html);
      $('.container').fadeOut();
      $('.form').fadeIn();
      $('.out-put').fadeIn();
    });
    $('#update').click(function() {
      var output = '';
      $('.selectors').each(function() {
        var new_selector;
        if ($(this).find('.new-selector').val() === '') {
          new_selector = $(this).find('label').html();
        } else {
          new_selector = $(this).find('.new-selector').val();
        }
        output += new_selector + '{' + $(this).find('.css-code').val() + '}<br/>';
      });
      $('.final-output').html(output);
    });
  });
})(jQuery);
