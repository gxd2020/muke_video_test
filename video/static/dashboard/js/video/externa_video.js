var VideoEreaStatic = false;
var VideoEditArea = $('#video-edit-area');

$('#open-add-video-btn').click(function(){
    if (!VideoEreaStatic) {
        VideoEditArea.show();
        VideoEreaStatic = true;
    } else {
        VideoEditArea.hide();
        VideoEreaStatic = false;
    }
})

