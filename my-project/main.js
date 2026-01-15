fetch('./menu.json')
    .then(response => response.json())
    .then(data => {
        const menuContent = document.getElementById('MenuContent')
        data.forEach(item => {
            const card = document.createElement('div')
            card.classList.add( 'card','h-max', 'w-64', 'bg-amber-50', 'rounded-xl', 'overflow-hidden', 'p-1.5', 'flex', 'flex-col', 'items-center', 'justify-start', 'gap-4', 'text-amber-950', 'shadow-lg' );
            card.innerHTML = `
                <img src="${item.image}" alt="${item.alt}" class="w-max h-max rounded-xl" loading="lazy" />
                <h3 class="font-bold text-[15px] uppercase">${item.name}</h3>
                <p class="text-center text-[15px] font-medium">${item.description}</p>
                <span class="font-bold">${item.price}</span>
        `
            menuContent.appendChild(card)
        })
    })
fetch('./client.json')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('Testimonials-container');

        data.forEach(info => {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            slide.innerHTML = `
        <div class="h-72 w-full bg-amber-700 flex flex-col items-center justify-between p-6 text-white rounded-xl shadow-lg">
        <img src="${info.photo}" alt="${info.alt}" class="w-28 h-28 rounded-full object-cover mt-2" loading="lazy">
        <p class="text-center text-sm">
            "${info.comment}"
        </p>
        <h3 class="font-bold text-lg">
            ${info.name}
        </h3>
        </div>
        `;

            container.appendChild(slide);
        });

        // Init Swiper AFTER content is loaded
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    });

const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const navUl = document.getElementById('Ul');

menuIcon.addEventListener('click',()=>{
    closeIcon.style.display='block';
    navUl.style.transform = 'translateX(0)';
})
closeIcon.addEventListener('click',()=>{
    navUl.style.transform = 'translateX(100%)';
})