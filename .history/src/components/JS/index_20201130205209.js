import Vue from 'vue';
import MessageBox from './MessageBox';

export default {
    title:'',
    content:'',
    cancel:'',
    ok:'',
    handleCancel:null,
    hnadleOk:null
},
return function(opts){
    for(var attr in opts){
        default[attr] = opts[attr];
    }
}