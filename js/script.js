let canvas_ids = ['portuguese', 'english',
    'html', 'javascript', 'python', 'java', 'kotlin',
    'unity', 'android_studio', 'photoshop', 'illustrator'];
let canvas_list = [];

function init() {
    for (let i = 0; i < canvas_ids.length; i++) {
        canvas_list.push(new ProgressCircle(document.getElementById(canvas_ids[i])));
        canvas_list[i].drawProgressCircle(true);
    }
    setCarouselData(0);
}

function resizeUpdate() {
    // canv_pt.drawProgressCircle(false);
}

function setCarouselData(idx) {
    document.getElementById('title').innerHTML = title[idx];
    document.getElementById('desc').innerHTML = desc[idx];
    document.getElementById('tech').innerHTML = tech[idx];
}