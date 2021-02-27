function random_number(first, last) {
    return Math.floor((Math.random() * (last - first + 1))) + first;
}

$(document).ready(function(){
    $('body').bootstrapMaterialDesign();

    $('#fab').click(function(){
        var enterDesignMode = ($('#fab button i').text() == "visibility");
        $('#fab button i').text(enterDesignMode ? "edit" : "visibility");
        document.designMode = enterDesignMode ? "on" : "off";
    });

    setUpGabAndParlerIconsForFontAwesome();

    // http://davidzchen.com/tech/2016/01/19/bootstrap-copy-to-clipboard.html
    // https://stackoverflow.com/a/39059771
    $('.btn-copy').tooltip();

    $('.btn-copy').bind('click', function() {
        var txtHtml = $(this).closest('.input-group').find('.txt-html');
        txtHtml.select();
        try {
            var success = document.execCommand('copy');
            if (success) {
                $(this).trigger('copied', ['Copied!']);
            } else {
                $(this).trigger('copied', ['Copy with Ctrl + C']);
            }
        } catch (err) {
            $(this).trigger('copied', ['Copy with Ctrl + C']);
        }
    });

    $('.btn-copy').bind('copied', function(event, message) {
        $(this).attr('title', message)
            .tooltip('_fixTitle')
            .tooltip('show')
            .attr('title', 'Copy')
            .tooltip('_fixTitle');
    });
});
