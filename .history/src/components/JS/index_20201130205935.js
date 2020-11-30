import Vue from 'vue';
import MessageBox from './MessageBox';

export default {//默认值
    title:'',
    content:'',
    cancel:'',
    ok:'',
    handleCancel:null,
    hnadleOk:null
},
return function(opts){//配置参数
    for(var attr in opts){
        defaults[attr] = opts[attr];
    }
    var MyComponent = Vue.extend(MessageBox);
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
                defaluts.handleCancel && defaluts.handleCancel.bind(this);
                document.body.removeChild(vm.$el);
            },
            hnadleOk(){
                defaults.hnadleOk && defaluts.hnadleOk.bind(this);
                document.body.e(vm.$el);
            }
        },
    });
    document.body.appendChild(vm.$el);
}