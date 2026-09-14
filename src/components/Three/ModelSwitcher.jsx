import { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import MacbookModel14 from "../models/Macbook-14.jsx";
import MacbookModel16 from "../models/Macbook-16.jsx";

const ANIMATION_DURATION=1;
const OFFSET_DISTANCE=5;


const fadeMeshes=(group,opacity)=>{
    if(!group) return;

    group.traverse((child)=> {
        if(child.isMesh){
            child.material.transparent=true;
            gsap.to(child.material,{opacity,duration:ANIMATION_DURATION});
        }
    })
}


const moveGroup=(group,x)=>{
    if(!group) return;

    gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION
});
}
const ModelSwitcher=({scale,isMobile}) => {
    const smallMacbookRef =useRef();
    const LargeMacbookRef =useRef();
    
    const showLargeMacbook = scale===0.08 || scale ===0.05;
    const showSmallMacbook = scale===0.06 || scale ===0.03;


    useGSAP(()=>{
       if(showLargeMacbook){
        moveGroup(smallMacbookRef.current,-OFFSET_DISTANCE);
        moveGroup(LargeMacbookRef.current,0);

        fadeMeshes(smallMacbookRef.current,0);
        fadeMeshes(LargeMacbookRef.current,1);
       }else{
        if(showSmallMacbook){
        moveGroup(smallMacbookRef.current,0);
        moveGroup(LargeMacbookRef.current,-OFFSET_DISTANCE);

        fadeMeshes(smallMacbookRef.current,1);
        fadeMeshes(LargeMacbookRef.current,0);
       }
        }
    },[scale])

    const controlConfig={
        snap:true,
        speed:1,
        zoom:1,
        azimuth:[-Infinity,Infinity]
    }
    return(
        <>
            <PresentationControls {...controlConfig}>
                <group ref={LargeMacbookRef}>
                    <MacbookModel16 scale={isMobile ? 0.05 : 0.08}/>
                </group>
            </PresentationControls>

            <PresentationControls>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>
                </group>
            </PresentationControls>
        </>
    )
}
export default ModelSwitcher