export default {
    setItem(key, value){
        if(!key) return false;
        if( value && typeof value === 'object'){
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value)
    },
    getItem(key){
        if(!key) return null;
        let value = localStorage.getItem(key);
        if(typeof value === 'string' && value.indexOf('{') !== -1){
            value = JSON.parse(value)
        }
        return value;
    }
}