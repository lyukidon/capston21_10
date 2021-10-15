

document.querySelector('button').addEventListener('click',function(){
    const proto = document.querySelector('input#proto').value;
    const model = document.querySelector('input#model').value;
    const lr = model/proto ;
    document.querySelector('th#crest').innerHTML = Math.round(0.676 * lr * 10000) / 10000 ;
    document.querySelector('th#Hsea').innerHTML = Math.round(0.278 * lr * 10000) / 10000 ;
    document.querySelector('th#Hland').innerHTML = Math.round(0.258 * lr * 10000) / 10000 ;
    document.querySelector('th#Freeboard').innerHTML = `${Math.round(10000 * 0.024 * lr)/10000} / ${Math.round(10000 * 0.154 *lr)/10000} `
    document.querySelector('th#Sw').innerHTML = Math.round(0.036 * lr * 10000) / 10000 ;
    document.querySelector('th#Sh').innerHTML = Math.round(0.12 * lr * 10000) / 10000 ;
    document.querySelector('th#Sl').innerHTML = Math.round(10 * lr * 10000) / 10000 ;
    document.querySelector('th#Sd').innerHTML = Math.round(1.6 * lr * 10000) / 10000 ;
    document.querySelector('th#Bw').innerHTML = Math.round(0.4 * lr * 10000) / 10000 ;
    document.querySelector('th#bh').innerHTML = Math.round(0.4 * lr * 10000) / 10000 ;
    document.querySelector('th#bl').innerHTML = Math.round(0.4 * lr * 10000) / 10000 ;
    document.querySelector('th#s').innerHTML = `${Math.round(10000 * 1.0*lr)/10000} / ${Math.round(10000 * 0.8*lr)/10000}`
    document.querySelector('th#wD').innerHTML = Math.round(0.98 * lr * 10000) / 10000 ;
    document.querySelector('th#amp').innerHTML = Math.round(0.208 * lr * 10000) / 10000 ;
    document.querySelector('th#tS').innerHTML = Math.round(5.69 * (lr**(1/2)) * 10000) / 10000 ;
    document.querySelector('th#exp').innerHTML = Math.round(41.7 * lr * 10000) / 10000 ;
    document.querySelector('th#slpLength').innerHTML = `밑변:${Math.round(10000 * 20*lr)/10000} 높이:${Math.round(10000 * 1*lr)/10000} 빗변:${Math.round(10000 * Math.sqrt(401)*lr)/10000}`;
    document.querySelector('th#buildlength').innerHTML = Math.round( 10000*(0.4 * lr + 0.8*lr*4) )/10000;
    document.querySelector('th#buildlength').innerHTML = Math.round( 10000*(0.4 * lr + 1.0*lr * 3) )/10000;
    document.querySelector('th#structurelength').innerHTML = Math.round( 10000*( 0.4 * lr + 0.8*lr * 4 + 20*lr + 1.6*lr) )/10000;
})
