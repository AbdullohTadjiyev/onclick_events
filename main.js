let img = document.querySelector("img")
let box = document.querySelector(".box")

let a = img.getAttribute('src')
let b = img.getAttribute('alt')

let one = 'https://itzine.ru/wp-content/uploads/2019/10/8994osgvv97a5nier54vnkcnxf9rm9z.jpg'
let two = 'https://d1nxzqpcg2bym0.cloudfront.net/itunes_connect/608972237/15039a08-c25a-11e5-8860-0da0cbff4124/128x128'
let three = 'https://w0.peakpx.com/wallpaper/494/773/HD-wallpaper-beauty-nature-mountain-river-storm-clouds-the-beauty-of-nature-thumbnail.jpg'
let four = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'
let five = 'https://c4.wallpaperflare.com/wallpaper/362/276/920/nature-4k-pc-full-hd-wallpaper-thumb.jpg'

box.onclick = () => {
    let rnd = Math.floor(Math.random() * 10)
    if (rnd == "1") {
        img.setAttribute("src", one)
    } else if (rnd == "2") {
        img.classList.add("word")
        img.setAttribute("src", two)
    } else if (rnd == "3") {
        img.classList.add("word1")
        img.setAttribute("src", three)
    } else if (rnd == "4") {
        img.classList.add("word2")
        img.setAttribute("src", four)
    } else if (rnd == "five") {
        img.setAttribute("src", five)
    }
}