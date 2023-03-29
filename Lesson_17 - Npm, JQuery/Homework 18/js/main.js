$(document).ready(function() {
    const $galleryItems = $('.js--gal_item');
    const $modal = $('.js--modal');
    const $modalContent = $('.js--modal__content img');
    const $closeBtn = $('.js--modal__close');
    const $prevBtn = $('.js--modal__prev');
    const $nextBtn = $('.js--modal__next');
  
    let currentIndex;
  
    function openModal(index) {
      currentIndex = index;
      const src = $galleryItems.eq(index).find('img').attr('src');
      $modalContent.attr('src', src);
      $modal.addClass('active');
    }
  
    function closeModal() {
      $modal.removeClass('active');
    }
  
    function prevImage() {
      if (currentIndex > 0) {
        openModal(currentIndex - 1);
      }
    }
  
    function nextImage() {
      if (currentIndex < $galleryItems.length - 1) {
        openModal(currentIndex + 1);
      }
    }
  
    $galleryItems.on('click', function() {
      const index = $galleryItems.index($(this));
      openModal(index);
    });
  
    $closeBtn.on('click', closeModal);
    $prevBtn.on('click', prevImage);
    $nextBtn.on('click', nextImage);
  
    $(document).on('keydown', function(event) {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'ArrowRight') {
        nextImage();
      }
    });
  });