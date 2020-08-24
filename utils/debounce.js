export function debounce(func,delay){
    let timer = null;
    return function(){
        clearTimeout(timer)
        let timer = setTimeout(()=>{
            func.apply(this)
        },delay)
    }
}