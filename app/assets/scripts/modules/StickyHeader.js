import throttle from 'lodash/throttle';

class StickyHeader {


    constructor(){
        this.sideHeader = document.querySelector('.site-header');
        this.pageSections = document.querySelectorAll(".page-section");
        this.browserHeight = window.innerHeight;
        this.events();
    }

    events(){
        window.addEventListener('scroll', throttle(() => this.runOnScroll(), 200));
    }

    runOnScroll(){
        if(window.scrollY > 60){
            this.sideHeader.classList.add('site-header--dark');
            console.log('Added Dark');
        } else {
            this.sideHeader.classList.remove('site-header--dark');
            console.log('Removed Dark');
        }
        this.pageSections.forEach(el => this.calcSection(el));
    }
    calcSection(el){
        if(window.scrollY + window.innerHeight > el.offsetTop && window.scrollY < el.offsetTop+el.offsetHeight) {
            let scrollPercent = el.getBoundingClientRect().y/windows.innerHeight
        }
    }

}



export default StickyHeader;