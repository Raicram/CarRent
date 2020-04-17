import React, {useEffect, useRef} from "react";
import {ReactComponent as Car} from './img/car.svg'
import gsap from 'gsap';
import { ScrollObserver,ScrollScene } from 'scrollscene';
import './style.scss';

function Animation(){
    const wrapper = useRef(null);
    const trigger = useRef(null);

    useEffect(() =>{
        const [elements] = wrapper.current.children;
        const {current: triggerElement} = trigger;

        const background = elements.getElementById('Ground');
        const hearth = elements.getElementById('hearth');
        const plant = elements.getElementById('plant');
        const man = elements.getElementById('man');
        const car = elements.getElementById('car');
        const tree1 = elements.getElementById('Tree1');
        const tree2 = elements.getElementById('tree2');

        gsap.set([background,hearth,plant,man,car,tree1,tree2],{autoAlpha: 0});

        const tl = gsap.timeline({paused:true,defaults: {ease: 'power3.inOut'}});

        tl.fromTo(background,{x: '-200'},{x:0,duration:.5,autoAlpha: 1})
            .fromTo(car,{x: '-200'},{x:0,duration:1,autoAlpha: 1},.8)
            .fromTo(man,{x: '-200'},{x:0,duration:1,autoAlpha: 1})
            .fromTo(plant,{x: '-200'},{x:0,duration:.5,autoAlpha: 1},.2)
            .fromTo(tree1,{x: '-200'},{x:0,duration:.5,autoAlpha: 1},.2)
            .fromTo(tree2,{x: '-200'},{x:0,duration:.5,autoAlpha: 1},.2)
            .fromTo(hearth,{x: '-200'},{x:0,duration:1,autoAlpha: 1});

        const scrollScene = new ScrollScene({
            triggerElement,
            gsap: {
                timeline: tl,
                reverse: false,
            },
            offset: '80px',
            triggerHook: 0.7,
        });
        return () => {
            scrollScene.destroy()
        }

    },[]);

    return(
        <div className='animation' ref={trigger}>
            <div ref={wrapper}>
                <Car />
            </div>
        </div>
    )
}

function Text(){

    const textRef = useRef(null);
    const textScndRef = useRef(null);
    const textThirdRef = useRef(null);
    const someRef = useRef(null);

    useEffect(()=>{
        const element = textRef.current;
        const element2 = textScndRef.current;
        const element3 = textThirdRef.current;
        const {current: triggerElement} = someRef;

        gsap.set([element,element2,element3],{autoAlpha: 0});

        const tl = gsap.timeline({paused:true,defaults: {ease: 'power3.inOut'}});
        const tl2 = gsap.timeline({paused:true,defaults: {ease: 'power3.inOut'}});
        const tl3 = gsap.timeline({paused:true,defaults: {ease: 'power3.inOut'}});

        tl.fromTo(element,{y:'-200'},{y: 0,duration:1.1 ,autoAlpha: 1});
        tl2.fromTo(element2,{y:'-200'},{y: 0,duration:1.1 ,autoAlpha: 1});
        tl3.fromTo(element3,{y:'-200'},{y: 0,duration:1.1 ,autoAlpha: 1});

        const scrollObserver = new ScrollObserver({
                triggerElement,
                gsap: {
                    timeline: tl,
                },
                whenVisible: '60%',
        });
        const scrollObserver2 = new ScrollObserver({
            triggerElement,
            gsap: {
                timeline: tl2,
            },
            whenVisible: '70%',
        });
        const scrollObserver3 = new ScrollObserver({
            triggerElement,
            gsap: {
                timeline: tl3,
            },
            whenVisible: '80%',
        });

        return () => {
            scrollObserver.destroy();
            scrollObserver2.destroy();
            scrollObserver3.destroy()
        }

    },[]);


    return(
        <div ref={someRef} >
        <div className='text'>
            <div className='first-text' ref={textRef}>
                We love cars as much as you do so we put all our hearth to let you rent best!
            </div>
            <div className='second-text' ref={textScndRef}>
                We love cars as much as you do so we put all our hearth to let you rent best!
            </div>
            <div className='third-text' ref={textThirdRef}>
                We love cars as much as you do so we put all our hearth to let you rent best!
            </div>
        </div>
        </div>
    )
}

export default function Reasons() {
    return(
        <div className='reasons'>
            <Animation/>
            <Text/>
        </div>
    )
}