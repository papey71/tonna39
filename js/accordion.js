document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        if (parent.classList.contains('accordion-item--active')) {
            parent.classList.remove('accordion-item--active');
        } else {
            document
                .querySelectorAll('.accordion-item')
                .forEach((child) => child.classList.remove('accordion-item--active'))
            parent.classList.add('accordion-item--active', 5)
        }
    })
)

//  Снизу ебаное говно

var btn1 = document.getElementById('myButton1');
var btn2 = document.getElementById('myButton2');
var btn3 = document.getElementById('myButton3');
var btn4 = document.getElementById('myButton4');
var btn5 = document.getElementById('myButton5');
var btn6 = document.getElementById('myButton6');
var btn7 = document.getElementById('myButton7');
var btn8 = document.getElementById('myButton8');
var btn9 = document.getElementById('myButton9');
var btn10 = document.getElementById('myButton10');
var sand1 = document.getElementById('sand-1');
var sand2 = document.getElementById('sand-2');
var sand3 = document.getElementById('sand-3');
var sand4 = document.getElementById('sand-4');
var sand5 = document.getElementById('sand-5');
var sand6 = document.getElementById('sand-6');
var sand7 = document.getElementById('sand-7');
var sand8 = document.getElementById('sand-8');
var crushstone1 = document.getElementById('crush-stone-1');
var crushstone2 = document.getElementById('crush-stone-2');
var crushstone3 = document.getElementById('crush-stone-3');
var gravel1 = document.getElementById('gravel-1');
var gravel2 = document.getElementById('gravel-2');
var gravel3 = document.getElementById('gravel-3');
var gravel4 = document.getElementById('gravel-4');
var ground1 = document.getElementById('ground-1');
var ground2 = document.getElementById('ground-2');
var ground3 = document.getElementById('ground-3');
var brick = document.getElementById('brick');
var asphaltcrumbs = document.getElementById('asphalt-crumbs');
var input = document.getElementById('myInput');
var defaultText = input.value;

btn1.addEventListener('click', function () {
    input.value = defaultText + 'Уборка участка';
});
btn2.addEventListener('click', function () {
    input.value = defaultText + 'Услуги эксковатора';
});
btn3.addEventListener('click', function () {
    input.value = defaultText + 'Демонтаж забора';
});
btn4.addEventListener('click', function () {
    input.value = defaultText + 'Демонтаж здания';
});
btn5.addEventListener('click', function () {
    input.value = defaultText + 'Грузоперевозки';
});
btn6.addEventListener('click', function () {
    input.value = defaultText + 'Отсыпка поднятие участка';
});
btn7.addEventListener('click', function () {
    input.value = defaultText + 'Корчевание';
});
btn8.addEventListener('click', function () {
    input.value = defaultText + 'Выравнивание и планирование участка';
});
btn9.addEventListener('click', function () {
    input.value = defaultText + 'Разработка и копка котлов';
});
btn10.addEventListener('click', function () {
    input.value = defaultText + 'Вывоз мусора';
});
sand1.addEventListener('click', function () {
    input.value = defaultText + 'Песок мытый 02';
});
sand2.addEventListener('click', function () {
    input.value = defaultText + 'Песок мытый 03';
});
sand3.addEventListener('click', function () {
    input.value = defaultText + 'Песок мытый 04';
});
sand4.addEventListener('click', function () {
    input.value = defaultText + 'Песок мытый 05';
});
sand5.addEventListener('click', function () {
    input.value = defaultText + 'Песок мытый 1.5';
});
sand6.addEventListener('click', function () {
    input.value = defaultText + 'Песок не мытый';
});
sand7.addEventListener('click', function () {
    input.value = defaultText + 'Песок не мытый крупный';
});
sand8.addEventListener('click', function () {
    input.value = defaultText + 'Песчано-гравийная смесь';
});
crushstone1.addEventListener('click', function () {
    input.value = defaultText + 'Щебень гравийный 0-45';
});
crushstone2.addEventListener('click', function () {
    input.value = defaultText + 'Щебень гравийный 40-70';
});
crushstone3.addEventListener('click', function () {
    input.value = defaultText + 'Щебень гравийный 40-80';
});
gravel1.addEventListener('click', function () {
    input.value = defaultText + 'Гравий 3-20';
});
gravel2.addEventListener('click', function () {
    input.value = defaultText + 'Гравий 20-40';
});
gravel3.addEventListener('click', function () {
    input.value = defaultText + 'Гравий 40-70';
});
gravel4.addEventListener('click', function () {
    input.value = defaultText + 'Гравий 40-80';
});
ground1.addEventListener('click', function () {
    input.value = defaultText + 'Грунт плодородный торфянистый';
});
ground2.addEventListener('click', function () {
    input.value = defaultText + 'Грунт котлованный';
});
ground3.addEventListener('click', function () {
    input.value = defaultText + 'Грунт плодородный полевой';
});
brick.addEventListener('click', function () {
    input.value = defaultText + 'Кирпичный бой';
});
asphaltcrumbs.addEventListener('click', function () {
    input.value = defaultText + 'Асфальтная крошка';
});