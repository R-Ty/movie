const state ={
    nm:window.localStorage.getItem('nowNm')||'北京',
    id:window.localStorage.getItem('nowId')||1
};
const actions = {
    CITY_INFO(state,payload){
        state.nm
    }
}