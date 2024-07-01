document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const targetNumber = 94;  // Set your target number here
    let currentNumber = 0;
    let countingStarted = false;

    const incrementCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber++;
            counterElement.textContent = currentNumber+"%";
            requestAnimationFrame(incrementCounter);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countingStarted) {
                countingStarted = true;
                incrementCounter();
            }
        });
    });

    observer.observe(counterElement);
});

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter1');
    const targetNumber = 70;  // Set your target number here
    let currentNumber = 0;
    let countingStarted = false;

    const incrementCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber++;
            counterElement.textContent = currentNumber+"M";
            requestAnimationFrame(incrementCounter);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countingStarted) {
                countingStarted = true;
                incrementCounter();
            }
        });
    });

    observer.observe(counterElement);
});

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter3');
    const targetNumber = 10;  // Set your target number here
    let currentNumber = 0;
    let countingStarted = false;

    const incrementCounter = () => {
        if (currentNumber < targetNumber) {
            currentNumber++;
            counterElement.textContent = currentNumber+"K+";
            requestAnimationFrame(incrementCounter);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countingStarted) {
                countingStarted = true;
                incrementCounter();
            }
        });
    });

    observer.observe(counterElement);
});


//scroll
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 50) { // Change 50 to the number of pixels you want before the color changes
        header.classList.add('scrolled');
        header.classList.remove('default');
    } else {
        header.classList.add('default');
        header.classList.remove('scrolled');
    }
});

document.getElementById("hamburger").onclick = function() {
    var menu = document.querySelector(".menu-items");
    menu.classList.toggle("active");
}
