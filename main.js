let popcornBucket = document.querySelector('#popcorn-svg');
let corns = document.querySelectorAll('#popcorn-svg use');
let masterTl = new TimelineMax()
.add(showUp(), 'start')
.add(popCorn(), 'start+=0.5')
.add(wiggle(), 'start+=1.5');

function wiggle() {
  return TweenMax.to(popcornBucket, 1, { transformOrigin: '50% 100%', scaleX: 1.02, scaleY: 0.98, y: 1, rotation: 0.5, yoyo: true, repeat: 12, ease: CustomWiggle.create('wiggle', {type: 'easeOut', wiggles:7})});
  
}
function showUp(){
  let tl = new TimelineMax()
  .set(popcornBucket, {transformOrigin: '100% 100%', y: -window.innerHeight, autoAlpha: 1, rotation: 30})
  .to(popcornBucket, 1.5, {y: 0, rotation: 0, ease: Bounce.easeOut})
  return tl;
}
function popCorn() {
  let tl = new TimelineMax();
  for (let corn of corns) {
     tl.to(corn, random(1,15), {onStartParams: ['{self}'], onStart:function(el){$(el.target).appendTo('svg')}, scale: random(0.1,15), physics2D:{velocity:random(100, 300), angle:random(230, 290), gravity:random(1000, 1200)}}, Math.random() * random(1,15));
  }
  return tl;
}

function random(min, max) { return min + (Math.random() * (max - min)) };