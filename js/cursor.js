// 光标点击样式
const html = document.querySelector('html')
//路径
let path = location.href.split('/').at(-1)
if(path == 'index.html' || path == 'index.html#'){
    var strDown = "url('./image/cursor_img/2.png'),default"
    var strUp = "url('./image/cursor_img/1.png'),default"
}else{
    var strDown = "url('../image/cursor_img/2.png'),default"
    var strUp = "url('../image/cursor_img/1.png'),default"
}
document.addEventListener('mousedown',event => {
    html.style.cursor = strDown
})
document.addEventListener('mouseup',event => {
    html.style.cursor = strUp
}) 
// 点击星星特效
class Color{
    constructor(r,g,b){
        this.r = r
        this.g = g
        this.b = b
        this.getRgb = function (){
            return `rgb(${this.r},${this.g},${this.b})`
        }
    }
}
//星星颜色
const colors = [
    new Color(255, 100, 0),
    new Color(255, 0, 0),
    new Color(255, 255, 0),
    new Color(0, 255, 0),
    new Color(255, 255, 0),
    new Color(0, 0, 255),
    new Color(255, 0, 255),
    new Color(145, 0, 255),
    new Color(80, 255, 0),
    new Color(255, 0, 100),
    new Color(255, 200, 0),
    new Color(0, 255, 150),
    new Color(0, 150, 255),
    new Color(0, 255, 180),
    new Color(255, 50, 0),
    new Color(0, 100, 255),
    new Color(170, 0, 255),
    new Color(255, 0, 55),
    new Color(0, 255, 160),
    new Color(255, 170, 0),
    new Color(255, 255, 255),
    new Color(128, 128, 0),
    new Color(0, 128, 128),
    new Color(189,183,107),
    new Color(169,169,169),
    new Color(27,255,0),
    new Color(100,149,237),
    new Color(255,140,0),
    new Color(153,50,204),
    new Color(127,255,212),
    new Color(255,69,0),
    new Color(128,0,0),
    new Color(124,252,0),
    new Color(0,191,255),
    new Color(138,43,226),
    new Color(153,50,204),
    new Color(106,90,205),
    new Color(216,191,216),
    new Color(255,20,147),
    new Color(245,245,220),
    new Color(240,255,255),
    new Color(240,255,240),
    new Color(248,248,255),
    new Color(240,248,255),
    new Color(192,192,192),
    new Color(255,240,245),
]
//样式表，在样式表中添加样式
const sheet = document.styleSheets[0]
sheet.insertRule(`.rgb{
            pointer-events: none;
            position: fixed;
            font-size: 10px;
        }`)
//随机移动方向
function dir(){
    let d = Math.random()
    if(d>0.5){
        return Math.floor(Math.random()*61)
    }else{
        return -Math.floor(Math.random() * 61)
    }
}
//点击事件
html.addEventListener('mousedown',function(event){
    add(event.x,event.y)
})
// 创建变量防止有重复的div
var sum = 0
function add(x,y){
    for(let i=sum*10; i <sum*10+10; i++){
        //创建div
        let div = document.createElement('div')
        //添加class,图标字体
        div.classList.add('rgb')
        div.classList.add('iconfont')
        div.classList.add('icon-xingxing')
        //随机一种颜色
        div.style.color = colors[Math.floor(Math.random() * 46)].getRgb()
        //星星的初始位置
        let top = y - 10
        let left = x - 10
        div.style.top =  top + 'px'
        div.style.left = left + 'px'
        //样式表中添加动画
        let animation = `
            @keyframes name${i}{
                from{
                    font-size:10px;
                    opacity:1;
                }
                99%{
                    font-size:0.1px;
                    opacity:0.1;
                }
                to{
                    font-size:0.1px;
                    transform: translate(${dir()}px,${dir()}px);
                    opacity:0;
                }
            }`
        sheet.insertRule(animation)
        //样式表中添加class
        let animationClass = '.ac' + i + '{animation: name' + i + ' 1s ease-out;}'
        sheet.insertRule(animationClass)
        //添加动画class
        div.classList.add('ac' + i)
        //将div加入body中
        document.body.appendChild(div)
        //清除div
        setTimeout(function () {
            document.body.removeChild(div)
        }, 1000)
    }
    sum++
}