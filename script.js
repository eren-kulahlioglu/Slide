var cars = [
    {
        name: 'Audio Q8',
        image: 'img/audio-Q8.jpg',
        link: 'https://www.edmunds.com/audi/q8/'
    },
    {
        name: 'Honda CR-V',
        image: 'img/honda-CR-V.jpg',
        link: 'https://www.edmunds.com/honda/cr-v/'
    },
    {
        name: 'Toyota rav-4',
        image: 'img/toyota-rav-4.jpg',
        link: 'https://www.edmunds.com/toyota/rav4/'
    },
    {
        name: 'Volvo XC90',
        image: 'img/Volvo-XC90.jpg',
        link: 'https://www.edmunds.com/volvo/xc90/'
    },
];

var index = 0;
var slaytCount = cars.length;
var interval;

var settings = {
    duration: '1000',
    random: false,
}

init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener
    ('click', function () {
        index--;
        showSlide(index);
        console.log(index);

    });

document.querySelector('.fa-arrow-circle-right').addEventListener
    ('click', function () {
        index++;
        showSlide(index);
        console.log(index);

    });

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
})


function init(settings) {
        var prev;

        interval = setInterval(function () {
            if (settings.random) {
                do {
                    index = Math.floor(Math.random() * slaytCount)

                } while (index == prev)
                prev = index;

            } else {
                if (slaytCount == index + 1) {
                    index = -1;

                }
                showSlide(index);
                console.log(index);
                index++;
            }
            showSlide(index);

        }, settings.duration)

    }

function showSlide(i) {
        index = i;

        if (i < 0) {
            index = slaytCount - 1
        }
        if (i >= slaytCount) {
            index = 0;
        }

        document.querySelector('.card-title').textContent = cars[index].name

        document.querySelector('.card-img-top').setAttribute('src', cars[index].image);

        document.querySelector('.card-link').setAttribute('href', cars[index].link);

    }



