
  $(document).ready(function () {
    $("#modals_get").load("modals.html");
    $("#nav_get").load("nav.html");
    $("#funzoneModal .modal-body").load("forum/forum.html");
    $("#creditsModal .modal-body").load("credits/credits.html");

    $(".dropdown-item").on("click", function (event) {
      event.preventDefault();
      url = $(this).attr("href");
      img_url = url.split('/embed/')[1];

      value = $(this).html();
      pages = ["Fun Zone", "Professors Panel", "Student Council Chat", "Game Night", "Cultural Event"];
      if(jQuery.inArray(value, pages) == -1){
        $("#youtubeModal .modal-body").html('<iframe  src="' + url + '?rel=0&controls=1&autoplay=1&loop=1&showinfo=0&modestbranding=0"  class="embed-responsive-item youtube-iframe"  title="YouTube video player" loading="lazy"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
        $("#youtubeModal .modal-title").html(value);
        $('#youtubeModal').modal("show");
      }
      else{
        window.open(url, '_blank');
      }
    });

  // changes the iframe src to prevent playback or stop the video playback in our case
    $("#youtubeModal .close").click(function() {
      $('.youtube-iframe').each(function(index) {
        $(this).attr('src', '');
        return false;
      });
      $('#youtubeModal').hide();
    });

  });

