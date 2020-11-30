import Vue from 'vue';
import MessageBox from './MessageBox';

export var MessageBox
export default {//默认值
    title:'',
    content:'',
    cancel:'',
    ok:'',
    handleCancel:null,
    hnadleOk:null
};
var MyComponent = Vue.extend(MessageBox);
return function(opts){//配置参数
    for(var attr in opts){
        defaults[attr] = opts[attr];
    }

    var vm = new MyComponent({
        el:document.createElement('div'),
        data:{
            title:defaults.title,
            content:defaults.content,
            cancel:defaults.cancel,
            ok:defaults.ok,
        },
        methods: {
            handleCancel(){
                defaluts.handleCancel && defaluts.handleCancel.call(this);
                document.body.removeChild(vm.$el);
            },
            hnadleOk(){
                defaults.hnadleOk && defaluts.hnadleOk.call(this);
                document.body.removeChild(vm.$el);
            }
        },
    });
    document.body.appendChild(vm.$el);
};
})();