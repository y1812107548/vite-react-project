import React, { useEffect, useRef,useState,useSyncExternalStore } from 'react';
import { FadeInAnimation } from '@/timer/animation';
 export const useEffectEvent = <T extends Event>(
  eventName: string,
  handler: (event: T) => void
) => {
  useEffect(() => {
    const eventListener = (event: Event) => {
      handler(event as T);
    };
    document.addEventListener(eventName, eventListener);

    return () => {
      document.removeEventListener(eventName, eventListener);
    };
  }, [eventName, handler]);
};


function subscribe(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  }
}

export const useOnlineStatus = ():boolean => {
  // const [isOnline,setIsOnline] = useState(true);

  // useEffect(()=>{
  //   function handleOnline(){
  //     setIsOnline(true);
  //   }
  //   function handleOffline(){
  //     setIsOnline(false);
  //   }
  //   window.addEventListener('online',handleOnline);
  //   window.addEventListener('offline',handleOffline);
  //   return ()=>{
  //     window.removeEventListener('online',handleOnline);
  //     window.removeEventListener('offline',handleOffline);
  //   }
  // },[])
  // return isOnline
  return useSyncExternalStore(subscribe,()=>navigator.onLine,()=>true)
}

export const useFormInput = (initialValue:string)=>{
  const [value,setValue] = useState(initialValue);
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setValue(e.target.value);
  }
  const inputProps = {
    value,
    onChange:handleChange
  }

  return inputProps
}

export const useFadeIn = (ref:React.MutableRefObject<HTMLHeadingElement>,duration:number)=>{
  useEffect(()=>{
    // const node = ref.current;

    // let startTime: number | null = performance.now();
    // let frameId: number | null = null;

    // function onFrame(now:number){
    //   console.log('onFrame',now);
    //   const timePassed = now - startTime!;
    //   const progress = Math.min(timePassed / duration!, 1);
    //   onProgress(progress);
    //   if(progress < 1){
    //     frameId = requestAnimationFrame(onFrame)
    //   }
    // }

    // function onProgress(progress:number){
    //     node.style.opacity = progress + ''
    // }

    // function start(){
    //   onProgress(0);
    //   startTime = performance.now();
    //   frameId = requestAnimationFrame(onFrame);
    // }

    // function stop(){
    //   cancelAnimationFrame(frameId as number);
    //   startTime = null;
    //   frameId = null;
    // }
    // start();
    // return ()=>stop();


    const animation = new FadeInAnimation(ref.current);
    animation.start(duration);
    return ()=>animation.stop();
  },[ref,duration])
}
