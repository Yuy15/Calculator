$(function(){
    $(document).on('input', '#tgt_input', function(e) {
        $('#preview').html(`preview:\\begin\{align\} ${$('#tgt_input').val()} \\end\{align\}`);
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,"quMain"]);
    });
});