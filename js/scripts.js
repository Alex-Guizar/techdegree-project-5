$('#gallery').rebox({ selector: 'a' });

const filterGallery = function() {
  const $input = $('.searchInput');
  const $photos = $('#gallery a');

  $input.on("keyup", function() {
    const searchTerm = $(this).val();

    $photos.each(function() {
      if ($(this).attr('title').indexOf(searchTerm) === -1) {
          $(this).parent().hide();
      } else {
        $(this).parent().show();
      }
    });
  });
};

filterGallery();
