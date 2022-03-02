const tgt_input = new Vue({
    el: "#tgt_input",
    data: {
        tgt: ""
    }
});

const main = new Vue({
    el: "#tgt_vue",
    data: {
        tgt_vue_d: ""
    },
    computed:{
        tgt_vue:function(){
            return tgt_input.tgt
        }
    }
});