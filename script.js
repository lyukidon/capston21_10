

document.querySelector('button').addEventListener('click',function(){
    const proto = document.querySelector('input#proto').value;
    const model = document.querySelector('input#model').value;
    const lr = model/proto
    document.querySelector('th#crest').innerHTML = 0.676 * lr
    document.querySelector('th#Hsea').innerHTML = 0.278 * lr
    document.querySelector('th#Hland').innerHTML = 0.258 * lr
    document.querySelector('th#Freeboard').innerHTML = `${0.024 * lr} / ${0.154 *lr} `
    document.querySelector('th#Sw').innerHTML = 0.036 * lr
    document.querySelector('th#Sh').innerHTML = 0.12 * lr
    document.querySelector('th#Sl').innerHTML = 10 * lr
    document.querySelector('th#Sd').innerHTML = 1.6 * lr
    document.querySelector('th#Bw').innerHTML = 0.4 * lr
    document.querySelector('th#bh').innerHTML = 0.4 * lr
    document.querySelector('th#bl').innerHTML = 0.4 * lr
    document.querySelector('th#s').innerHTML = `${1.0*lr} / ${9.8*lr}`
    document.querySelector('th#wD').innerHTML = 0.98 * lr
    document.querySelector('th#amp').innerHTML = 0.208 * lr
    document.querySelector('th#tS').innerHTML = 5.69 * (lr**(1/2))
    document.querySelector('th#exp').innerHTML = 41.7 * lr
    document.querySelector('th#slpLength').innerHTML = `밑변:${20*lr} 높이:${1*lr} 빗변:${Math.sqrt(401)*lr}`
})