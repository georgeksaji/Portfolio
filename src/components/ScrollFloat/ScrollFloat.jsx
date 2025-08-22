import { useEffect, useMemo, useRef, Children, isValidElement, cloneElement } from 'react';

// Recursively wrap only text nodes in .word spans, preserve elements like <a>
function wrapWords(node, keyPrefix = '') {
  if (typeof node === 'string') {
    return node.split(/(\s+)/).map((word, i) => (
      <span className="word" key={keyPrefix + i}>{word}</span>
    ));
  }
  if (Array.isArray(node)) {
    return node.map((child, i) => wrapWords(child, keyPrefix + i + '-'));
  }
  if (isValidElement(node)) {
    return cloneElement(
      node,
      { key: keyPrefix + (node.key || 'el') },
      wrapWords(node.props.children, keyPrefix + 'c-')
    );
  }
  return node;
}
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = 'none',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0
}) => {
  const containerRef = useRef(null);

  // Recursively wrap only text nodes in .word spans, preserve elements like <a>
  const splitText = useMemo(() => wrapWords(children), [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;


  const wordElements = el.querySelectorAll('.word');

    gsap.fromTo(
      wordElements,
      {
        willChange: 'opacity',
        opacity: 0
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>
        {splitText}
      </span>
    </h2>
  );
};

export default ScrollFloat;
