import { useEffect,useState } from "react";

export default function useIntersectionObserver(ref:React.RefObject<Element>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver((entries)=>{
      console.log(entries);
      const entry = entries[0];
      setIsIntersecting(entry.isIntersecting);
    },{
      threshold:1
    })
    div && observer.observe(div);
    return () => {
      observer.disconnect();
    }
  },[ref])
  return isIntersecting
}
