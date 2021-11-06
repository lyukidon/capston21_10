// const data = {
//     crest: 0.676,
//     Hsea: 0.278,
//     Hland: 0.258,
//     Freeboard: 0.024,
//     Sw: 0.036,
//     Sh: 0.12,
//     Sl: 10,
//     Sd: 1.6,
//     Bw: 0.4,
//     bh: 0.4,
//     bl: 0.4,
//     s: 1.0,
//     wD: 0.98,

// }

document.querySelector('button').addEventListener('click',function(){
    const proto = document.querySelector('input#proto').value;
    const model = document.querySelector('input#model').value;
    const lr = model/proto ;
    document.querySelector('th#crest').innerHTML = Math.round(0.676 * lr * 10000) / 10000 ;
    document.querySelector('th#Hsea').innerHTML = Math.round(0.278 * lr * 10000) / 10000 ;
    document.querySelector('th#Hland').innerHTML = Math.round(0.258 * lr * 10000) / 10000 ;
    document.querySelector('th#Freeboard').innerHTML = `${Math.round(10000 * 0.024 * lr)/10000} / ${Math.round(10000 * 0.154 *lr)/10000}`
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                     1번   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

    // 수중방파제
    ctx.beginPath()
    ctx.moveTo(wd/3+13.56*lr*200,hi-0.678*lr*200)
    ctx.lineTo(wd/3+13.838*lr*200,hi-0.956*lr*200)
    ctx.lineTo(wd/3+14.514*lr*200,hi-0.956*lr*200)
    ctx.lineTo(wd/3+14.772*lr*200,hi-0.7386*lr*200)
    ctx.stroke()
    
    // 호안
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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                     2번   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const canvas2 = document.querySelector('canvas#canvas2')
    const ct2=canvas2.getContext('2d');
 
    ct2.clearRect(0,0,wd,hi+50)

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
    ct2.moveTo(wd/3, hi+50)
    ct2.lineTo(wd/3,0)
    ct2.stroke()

    ct2.beginPath();
    ct2.moveTo(wd/3 + 20*lr*200,0);
    ct2.lineTo(wd/3 + 20*lr*200, hi)
    ct2.stroke()
    ct2.font = '12px Arial'
    ct2.fillText('SLOPE',wd/3 + 20*lr*200/2,hi/2)

    //수중방파제
    ct2.beginPath()
    ct2.moveTo(wd/3+13.56*lr*200,0)
    ct2.lineTo(wd/3+13.56*lr*200,hi)
    ct2.stroke()
    ct2.beginPath()
    ct2.moveTo(wd/3+14.772*lr*200,0)
    ct2.lineTo(wd/3+14.772*lr*200,hi)
    ct2.stroke()
    ct2.fillStyle = 'rgba(0, 0, 255, 0.2)'
    ct2.fillRect(wd/3+13.56*lr*200,0,1.212*lr*200,hi)
    ct2.fillStyle =  'rgba(0, 0, 255, 0.5)'
    ct2.fillRect(wd/3+13.838*lr*200,0,0.676*lr*200,hi)
    ct2.fillStyle =  'rgba(0, 0, 0, 1)'

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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                     3번   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const canvas3 = document.querySelector('canvas#canvas3')
    const ct3=canvas3.getContext('2d');

    ct3.clearRect(0,0,wd,hi+50)

    ct3.fillText('25cm', 0, hi/2)

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
    ct3.font = '13px Arial'
    ct3.fillText('SLOPE',wd/3 + 20*lr*200/2,hi/2)

    //수중방파제
    ct3.beginPath()
    ct3.moveTo(wd/3+13.56*lr*200,0)
    ct3.lineTo(wd/3+13.56*lr*200,hi)
    ct3.stroke()
    ct3.beginPath()
    ct3.moveTo(wd/3+14.772*lr*200,0)
    ct3.lineTo(wd/3+14.772*lr*200,hi)
    ct3.stroke()
    ct3.fillStyle = 'rgba(0, 0, 255, 0.2)'
    ct3.fillRect(wd/3+13.56*lr*200,0,1.212*lr*200,hi)
    ct3.fillStyle =  'rgba(0, 0, 255, 0.5)'
    ct3.fillRect(wd/3+13.838*lr*200,0,0.676*lr*200,hi)
    ct3.fillStyle =  'rgba(0, 0, 0, 1)'

    //건물
    for (let i=0 ; i < 5; i++){
        for (let j=0; j<2;j++){
            ct3.beginPath()
            ct3.moveTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0 + 1*lr*200 *j + 0.6*lr*200 )
            ct3.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0.4 * lr*200+ 1*lr*200*j+ 0.6*lr*200)
            ct3.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200+0.4 * lr*200 + 0.4*lr*200*2*i, 0.4 * lr*200+ 1*lr*200 *j+ 0.6*lr*200)
            ct3.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200+0.4 * lr*200 + 0.4*lr*200*2*i, 0+ 1*lr*200 *j+ 0.6*lr*200)
            ct3.lineTo(wd/3 + 20*lr*200 + 1.6*lr*200 + 0.4*lr*200*2*i, 0+ 1*lr*200 *j+ 0.6*lr*200)
            ct3.stroke()
        }
    }

    let up = `${0.6*lr} m`
    let down = `${(50 - 0.4 * lr*200- lr*200 - 0.6*lr*200)/200} m`
    console.log(50 - 0.4 * lr*200- lr*200 - 0.6*lr*200)
    ct3.textBaseline='top'
    ct3.fillText(up, wd/3 + 20*lr*200 + 1.6*lr*200, 0)
    ct3.textBaseline='top'
    ct3.fillText(down, wd/3 + 20*lr*200 + 1.6*lr*200, lr*200 + 0.4*lr*200+ 0.6*lr*200)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                     4번   
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const canvas4 = document.querySelector('canvas#submerge');
    const ct4 = canvas4.getContext('2d');

    ct4.clearRect(0,0,350,300)

    ct4.beginPath()
    ct4.moveTo(100,0)
    ct4.lineTo(200,0)
    ct4.lineTo(295,170)
    ct4.lineTo(0,200)
    ct4.lineTo(100,0)
    ct4.stroke()

    ct4.textBaseline = 'top'
    ct4.fillText('CM',2,2)
    ct4.fillText(0.278 * lr*100, 20, 100) //Hsea
    ct4.fillText(0.258 * lr * 100, 200, 100) //Hland
    ct4.fillText(0.676*lr*100,100,2)
})
document.querySelector('button').click()