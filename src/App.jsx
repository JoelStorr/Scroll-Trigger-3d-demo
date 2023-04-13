import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);

function App() {
  const [count, setCount] = useState(0)


 const camera = useThree((state) => state.camera);

 /* Single Scroll aanimation */
/*   const tl = gsap.timeline({
    scrollTrigger:{
      trigger:".box1",
      markers: true,
      start : "top 80%",
      end: "top 30%",
      scrub: 1,
    }
  })

   
     tl.from(camera.position, { x: -1.5, y: 2.5, z: -2.5 }, 0)
     
     tl.to(camera.position, { x: 2.63, y: 1, z: 0.01 })

 */


  /* MultiScroll Animation */
  const tl1 = gsap.timeline({
    scrollTrigger:{
      trigger:".box1",
      markers: true,
      start : "top 80%",
      end: "top 30%",
      scrub: false,
      toggleActions:"play none reverse none",
    }
  });

   
/*   tl1.from(camera.position, { x: -1.5, y: 2.5, z: -2.5 }); */
     
  tl1.to(camera.position, { duration: 4, x: 2.63, y: 1, z: 0.01 });
    
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box2",
      markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: false,
      toggleActions: "play none reverse none",
    },
  });

  tl2.to(camera.position, { duration: 4, x: 4, y: 1, z: 0.01 });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".box3",
      markers: true,
      start: "top 80%",
      end: "top 30%",
      scrub: false,
      toggleActions: "play none reverse none",
    },
  });
  

    tl3.to(camera.position, { duration: 4, x: -1, y: 0.5, z: 4 });



  return (

      
        <mesh scale={3} position={[1, -2, -3]}>
          <boxGeometry  scale={3}/>
        </mesh>



  )
}

export default App

