var tgt_latex

$(function(){
    $(document).on('input', '#tgt_input', function(e) {
        tgt_latex = `preview:\\begin\{align\} ${$('#tgt_input').val()} \\end\{align\}`
        $('#preview').html(tgt_latex);
        MathJax.Hub.Queue(["Typeset",MathJax.Hub,"quMain"]);
    });
});