import { useState, useRef } from "react";
import { useOnlineStatus } from '@/hook/index'
import { useFadeIn } from "@/hook/index";

export default function Timer() {
  const [duration, setDuration] = useState(1000);
  const [show, setShow] = useState(false);
  const isOnline = useOnlineStatus()
  return (
    <section>
      <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
      <SaveButton></SaveButton>
      <label>
        <input
          type="range"
          min={100}
          max={3000}
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
        />
        <br />
        淡入 interval：{duration}
      </label>
      <button onClick={() => setShow(!show)}>{show?'移除' : '显示'}</button>
      <hr />
      {show && <Welcome duration={duration}></Welcome> }
    </section>
  );
}

function Welcome({duration}:{duration:number}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  useFadeIn(ref as React.MutableRefObject<HTMLHeadingElement>, duration);
  // useEffect(()=>{
  //   if(ref.current){
  //     const animation = new FadeInAnimation(ref.current);
  //     animation.start(duration);
  //     return () => {
  //       animation.stop();
  //     }
  //   }
  // },[duration])

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: "white",
        padding: 50,
        textAlign: "center",
        fontSize: 50,
        backgroundImage:
          "linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)",
      }}
    >
      Welcome
    </h1>
  );
}


function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}
