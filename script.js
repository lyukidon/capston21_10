const data = {
    crest: 0.676,
    Hsea: 0.278,
    Hland: 0.258,
    Freeboard: 0.024,
    Sw: 0.036,
    Sh: 0.12,
    Sl: 10,
    Sd: 1.6,
    Bw: 0.4,
    bh: 0.4,
    bl: 0.4,
    s: 1.0,
    wD: 0.98,

}

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
    document.querySelector('th.slpLength').innerHTML = `밑변:${Math.round(10000 * 20*lr)/10000} 높이:${Math.round(10000 * 1*lr)/10000} 빗변:${Math.round(10000 * Math.sqrt(401)*lr)/10000}`;
    document.querySelector('th#buildlength').innerHTML = Math.round( 10000*(0.4 * lr + 0.8*lr*4) )/10000;
    document.querySelector('th#buildwidth').innerHTML = Math.round( 10000*(0.4 * lr + 1.0*lr * 3) )/10000;
    document.querySelector('th#emptySpace').innerHTML = Math.round( 10000*(1.6*lr) )/10000;
    document.querySelector('th#structurelength').innerHTML = Math.round( 10000*( 0.4 * lr + 0.8*lr * 4 + 20*lr + 1.6*lr) )/10000;
    document.querySelector('th#slp').innerHTML = Math.round( 10000*(20*lr) )/10000;
    document.querySelector('th#emptyspacelength').innerHTML = Math.round( 10000*(1.6*lr) )/10000;
    document.querySelector('th#ground').innerHTML = Math.round( 10000*(0.4 * lr + 0.8*lr*4) )/10000;
    document.querySelector('th#all').innerHTML = Math.round( 10000*(2 + Math.sqrt(401)*lr + 1.6*lr + 0.4 * lr + 0.8*lr*4 )) /10000;

    //canvas
    const canvas1 = document.querySelector('canvas#canvas1')
    const ctx=canvas1.getContext('2d');

    const wd = 1200
    const hi = 50
    ctx.clearRect(0,0,wd,hi)
    // 실험실
    ctx.beginPath()
    ctx.moveTo(0,0)
    ctx.lineTo(0,hi);
    ctx.lineTo(wd,hi);
    ctx.lineTo(wd,0)
    ctx.stroke()

    // 해저면
    ctx.font = '50px'
    ctx.fillText('2m', wd/6,hi)

    // 아크릴
    ctx.beginPath()
    ctx.strokeStyle='red';
    ctx.moveTo(wd/3, hi)
    ctx.lineTo(wd/3,0)
    ctx.stroke()
    ctx.strokeStyle='black'

    ctx.beginPath()
    ctx.moveTo(wd/3, hi)
    ctx.lineTo(wd/3 + 20*lr*200, hi-lr *200)
    ctx.lineTo(wd, hi-1*lr*200)
    ctx.stroke()

    ctx.fillText(20*lr, wd/3 + 20*lr*200/2, hi)

    ctx.beginPath();
    ctx.strokeStyle='red';
    ctx.moveTo(wd/3 + 20*lr*200,0);
    ctx.lineTo(wd/3 + 20*lr*200, hi)
    ctx.stroke()
    ctx.strokeStyle='black'
    
    ctx.fillText(4 - 20*lr,wd/3 + 20*lr*200,hi)
    // 물높이
    ctx.beginPath()
    ctx.strokeStyle='blue';
    ctx.moveTo(0, hi - 0.98 * lr * 200)
    ctx.lineTo(wd/3 + 20*lr*200 - 8, hi - 0.98 * lr * 200)
    ctx.stroke()
    ctx.strokeStyle='black';
    
    // 방파제
    ctx.beginPath()
    ctx.moveTo(wd/3 + 20*lr*200, hi-lr *200)
    ctx.lineTo(wd/3 + 20*lr*200, hi-lr *200 - 0.12 * lr * 200)
    ctx.lineTo(wd/3+20*lr*200+0.036*lr*200, hi-lr *200 - 0.12 * lr * 200)
    ctx.lineTo(wd/3+20*lr*200+0.036*lr*200, hi-lr *200)
    ctx.stroke()

    //건물
    for (let i=0 ; i < 5; i++){
        ctx.beginPath()
        ctx.moveTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, hi-lr*200)
        ctx.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, hi - lr*200 - 0.4 * lr*200)
        ctx.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200+0.4 * lr*200 + 0.4*lr*200*2*i, hi - lr*200 - 0.4 * lr*200)
        ctx.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200+0.4 * lr*200 + 0.4*lr*200*2*i, hi - lr*200)
        ctx.stroke()
    }

    const canvas2 = document.querySelector('canvas#canvas2')
    const ct2=canvas2.getContext('2d');
 
    ct2.clearRect(0,0,wd,hi)

    ct2.fillText('25cm', 0, hi/2)
    // ct2.rotate(90*Math.PI/180)

    ct2.beginPath()
    ct2.moveTo(0,0)
    ct2.lineTo(0,hi);
    ct2.lineTo(wd,hi);
    ct2.lineTo(wd,0)
    ct2.lineTo(0,0)
    ct2.stroke()

    //아크릴
    ct2.beginPath()
    ct2.moveTo(wd/3, hi)
    ct2.lineTo(wd/3,0)
    ct2.stroke()

    ct2.beginPath();
    ct2.moveTo(wd/3 + 20*lr*200,0);
    ct2.lineTo(wd/3 + 20*lr*200, hi)
    ct2.stroke()
    ct2.font = '15px Arial'
    ct2.fillText('SLOPE',wd/3 + 20*lr*200/2,hi/2)

    //건물
    for (let i=0 ; i < 5; i++){
        for (let j=0; j<4;j++){
            ct2.beginPath()
            ct2.moveTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0 + 1*lr*200 *j)
            ct2.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0.4 * lr*200+ 1*lr*200*j)
            ct2.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200+0.4 * lr*200 + 0.4*lr*200*2*i, 0.4 * lr*200+ 1*lr*200 *j)
            ct2.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200+0.4 * lr*200 + 0.4*lr*200*2*i, 0+ 1*lr*200 *j)
            ct2.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0+ 1*lr*200 *j)
            ct2.stroke()
        }
    }

    const canvas3 = document.querySelector('canvas#canvas3')
    const ct3=canvas3.getContext('2d');

    ct3.clearRect(0,0,wd,hi)

    ct3.fillText('25cm', 0, hi/2)
    // ct2.rotate(90*Math.PI/180)

    ct3.beginPath()
    ct3.moveTo(0,0)
    ct3.lineTo(0,hi);
    ct3.lineTo(wd,hi);
    ct3.lineTo(wd,0)
    ct3.lineTo(0,0)
    ct3.stroke()

    //아크릴
    ct3.beginPath()
    ct3.moveTo(wd/3, hi)
    ct3.lineTo(wd/3,0)
    ct3.stroke()

    ct3.beginPath();
    ct3.moveTo(wd/3 + 20*lr*200,0);
    ct3.lineTo(wd/3 + 20*lr*200, hi)
    ct3.stroke()
    ct3.font = '15px Arial'
    ct3.fillText('SLOPE',wd/3 + 20*lr*200/2,hi/2)

    //건물
    for (let i=0 ; i < 5; i++){
        for (let j=0; j<2;j++){
            ct3.beginPath()
            ct3.moveTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0 + 1*lr*200 *j)
            ct3.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0.4 * lr*200+ 1*lr*200*j)
            ct3.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200+0.4 * lr*200 + 0.4*lr*200*2*i, 0.4 * lr*200+ 1*lr*200 *j)
            ct3.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200+0.4 * lr*200 + 0.4*lr*200*2*i, 0+ 1*lr*200 *j)
            ct3.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0+ 1*lr*200 *j)
            ct3.stroke()
        }
    }

})
document.querySelector('button').click()
