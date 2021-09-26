import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);
  }
  init() {

    let articleAnimation = anime({
      targets: '.article',
      easing: 'spring(1, 100, 10, 0)',
      duration: 300,
      translateX: 200,
      autoplay: false,
      direction: 'alternate'
    })
    
    // document.querySelector('.article').onclick = articleAnimation.play;
    
    document.querySelector('.article').addEventListener('click', articleAnimation.play)
  }
}
