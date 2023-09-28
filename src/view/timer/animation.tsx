export class FadeInAnimation {
  node: HTMLElement | null = null;
  duration: number = 0;
  startTime: number | null = null;
  frameId: number | null = null;

  constructor(node: HTMLElement) {
    this.node = node;
  }
  start(duration:number) {
    this.duration = duration;
    if(this.duration === 0){
      this.onProgress(1);
    }else{
      this.onProgress(0);
      this.startTime = performance.now();
      this.frameId = requestAnimationFrame(()=>this.onFrame())
    }
  }
  onFrame(){
    const timePassed = performance.now() - this.startTime!;
    const progress = Math.min(timePassed / this.duration!, 1);
    this.onProgress(progress);
    if(progress < 1){
      this.frameId = requestAnimationFrame(()=>this.onFrame())
    }
  }
  onProgress(progress:number) {
    if(this.node){
      this.node.style.opacity = progress + ''
    }
  }
  stop(){
    if(this.frameId){
      cancelAnimationFrame(this.frameId);
      this.startTime = null;
      this.frameId = null;
      this.duration = 0
    }
  }
}
