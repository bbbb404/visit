window.onload = () => {
    let header = document.querySelector('.header');
    let searchOpen = header.querySelector('.search__btn-open');
    let searchClose = header.querySelector('.search__btn-close');
    let searchBox = header.querySelector('.search__box');

    //헤더 스크롤
    window.addEventListener('scroll', () => {
        let scrollb = window.scrollY;
        
        console.log(scrollb);
        if (scrollb > 0){
            header.classList.add('active');
        } else{
            header.classList.remove('active');
        }
    });//스크롤

    //헤더 검색 박스
    searchOpen.addEventListener('click', () => {
        searchBox.style.display = 'block';
        searchOpen.style.display = 'none';
        searchClose.style.display = 'block';
    });
    searchClose.addEventListener('click', () => {
        searchBox.style.display = 'none';
        searchOpen.style.display = 'block';
        searchClose.style.display = 'none';
    });

    /* 메인비주얼 */
    let mainVisual = document.querySelector('.main_visual');
    let visualslide = mainVisual.querySelectorAll('.slide');
    let visualPrev = mainVisual.querySelector('.prev');
    let visualNext = mainVisual.querySelector('.next');

    let i = 0;

    visualNext.addEventListener('click', () => {
        i++;
        console.log(i);
        if(i >= visualslide.length){
            i = 0;
        }

        visualslide.forEach(item => {
            item.classList.remove('active')
        });
        visualslide[i].classList.add('active');
    });
    visualPrev.addEventListener('click', () => {
        i--;
        console.log(i);
        if(i < 0){
            i = visualslide.length-1;
        }

        visualslide.forEach(item => {
            item.classList.remove('active');
        });
        visualslide[i].classList.add('active');
    });

    setInterval(()=> {
        i++;
        if( i>= visualslide.length){
            i = 0;
        }
        visualslide.forEach(item => {
            item.classList.remove('active')
        });
        visualslide[i].classList.add('active');
    }, 2500);


    //이벤트 크리스마스
    let seasonEvent = document.querySelector('.season_event');
    let seasonItem = seasonEvent.querySelectorAll('.item_wrap');
    let seasonBtn = seasonEvent.querySelector('.more_btn');
    let seasonPage = seasonEvent.querySelector('.btn_page');

    seasonBtn.addEventListener('click', () => {
        i++;
        console.log(i);
        if(i >= seasonItem.length){
            i = 0;
        }
        seasonItem.forEach(items => {
            items.classList.remove('active');
        });
        seasonItem[i].classList.add('active');
        
    });

    /* 부산 */
    let busannow = document.querySelector('.busan_now');
    let Nowslide = busannow.querySelectorAll('.slide_wrap');
    let nowPrev = busannow.querySelector('.prev'); 
    let nowNext =busannow.querySelector('.next');

    nowNext.addEventListener('click', () => {
        i++;
        
        if(i >= Nowslide.length){
            i = 0;
        }Nowslide.forEach(item => {
            item.classList.remove('active');
        });
        Nowslide[i].classList.add('active');
        
    });
    nowPrev.addEventListener('click', () => {
        i--;
        if(i < 0){
            i = Nowslide.length-1;
        } Nowslide.forEach(item => {
            item.classList.remove('active');
        });
        Nowslide[i].classList.add('active');
    });


    /* 테마별 */
    let theme = document.querySelector('.theme');
    let themeMenu = theme.querySelectorAll('.section_menu li');
    let themeItem = theme.querySelectorAll('.item_wrap');

    for(let index = 0; index < themeMenu.length; index++){
        themeMenu[index].addEventListener('click', () => {
            themeMenu.forEach(item => {
                item.classList.remove('on');
            });
            themeMenu[index].classList.add('on');

            themeItem.forEach(item => {
                item.classList.remove('on');
            });
            themeItem[index].classList.add('on');
        });
    }
};/* script end */