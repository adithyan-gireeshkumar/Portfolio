import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import "./css/Cta39.css";
import githubIcon from "../assets/social/github.png";
import instagramIcon from "../assets/social/instagram.png";
import linkedinIcon from "../assets/social/linkedin.png";
import xIcon from "../assets/social/x.png";

const PROXIMITY_RADIUS = 500;
const PUSH_FORCE = 0.35;
const TILT_AMOUNT = 0.1;
const SPRING_STIFFNESS = 0.07;
const BOUNCE_FRICTION = 0.9;
const CURSOR_SMOOTHING = 0.75;

const layout = {
    rotation: [5, -5, 7.5, -10],
    x: [-275, -100, 100, 275],
    y: [10, -10, 25, -10],
};

const initialCursor = { x: 0, y: 0, vx: 0, vy: 0 };

function useCardAnimation(spotlightRef) {
  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return undefined;

    const cursor = { ...initialCursor };
    let previousCursor = { x: 0, y: 0 };
    const cards = [...spotlight.querySelectorAll(".card")];
    const spread = Math.min(275, Math.max(100, spotlight.clientWidth / 2 - 48));
    const xPositions = [-spread, -spread / 3, spread / 3, spread];
    const cardPhysics = cards.map((el, index) => {
      const card = {
        el,
        restX: xPositions[index] ?? 0,
        restY: layout.y[index] ?? 0,
        restR: layout.rotation[index] ?? 0,
        x: layout.x[index] ?? 0,
        y: layout.y[index] ?? 0,
        r: layout.rotation[index] ?? 0,
        vx: 0,
        vy: 0,
        vr: 0,
      };
      gsap.set(el, {
        x: card.x,
        y: card.y,
        rotation: card.r,
        xPercent: -50,
        yPercent: -50,
        zIndex: index,
      });
      return card;
    });

    const onMove = (event) => {
      cursor.vx = cursor.vx * CURSOR_SMOOTHING + (event.clientX - previousCursor.x) * (1 - CURSOR_SMOOTHING);
      cursor.vy = cursor.vy * CURSOR_SMOOTHING + (event.clientY - previousCursor.y) * (1 - CURSOR_SMOOTHING);
      cursor.x = event.clientX;
      cursor.y = event.clientY;
      previousCursor = { x: event.clientX, y: event.clientY };
    };
    const onLeave = () => {
      cursor.vx = 0;
      cursor.vy = 0;
    };
    const tick = () => {
      const rect = spotlight.getBoundingClientRect();
      cardPhysics.forEach((card) => {
        const distance = Math.hypot(
          cursor.x - (rect.left + rect.width / 2 + card.restX),
          cursor.y - (rect.top + rect.height / 2 + card.restY),
        );
        const weight = distance > PROXIMITY_RADIUS ? 0 : 1 - distance / PROXIMITY_RADIUS;
        card.vx = (card.vx + (card.restX + cursor.vx * weight * PUSH_FORCE - card.x) * SPRING_STIFFNESS) * BOUNCE_FRICTION;
        card.vy = (card.vy + (card.restY + cursor.vy * weight * PUSH_FORCE - card.y) * SPRING_STIFFNESS) * BOUNCE_FRICTION;
        card.x += card.vx;
        card.y += card.vy;
        card.r += ((card.restR + cursor.vx * weight * TILT_AMOUNT) - card.r) * SPRING_STIFFNESS;
        gsap.set(card.el, { x: card.x, y: card.y, rotation: card.r });
      });
    };

    spotlight.addEventListener("mousemove", onMove);
    spotlight.addEventListener("mouseleave", onLeave);
    gsap.ticker.add(tick);
    return () => {
      spotlight.removeEventListener("mousemove", onMove);
      spotlight.removeEventListener("mouseleave", onLeave);
      gsap.ticker.remove(tick);
    };
  }, [spotlightRef]);
}
const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-4 w-4"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.49 11.49 0 0 1 12 5.844c1.02 0 2.047.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.653.242 2.873.118 3.176.77.838 1.235 1.91 1.235 3.22 0 4.61-2.807 5.623-5.48 5.922.43.37.815 1.104.815 2.226 0 1.606-.015 2.898-.015 3.293 0 .32.217.693.825.575C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
);


const defaultProps = {
  heading: "Let’s Connect",
  buttons: {
    primary: {
      text: "My Projects",
      url: "#projects",
    },
    secondary: {
      text: "GitHub",
      url: "https://github.com/adithyan-gireeshkumar/",
      icon: true,
    },
  },
};

const Cta39 = (props) => {
  const spotlightRef = useRef(null);
  useCardAnimation(spotlightRef);

  const {
    heading,
    buttons,
    className,
    onPrimaryClick,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section
      className={cn("w-full py-32", className)}
      style={{
        background: "linear-gradient(162deg, #ffffff 4%, #060909 18%, #d5d5d5 27%, #353737 84%, #1e2020 92%, #9c9c9c 96%)",
      }}
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto rounded-xl border border-dashed p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center gap-4 text-center lg:gap-6">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {heading}
            </h2>
            <section ref={spotlightRef} className="spotlight">
        <div className="cards">
            <a className="card" href="https://www.instagram.com/adithyan_gireeshkumar/" target="_blank" rel="noopener noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
            <a className="card" href="https://www.linkedin.com/in/adithyan-gireeshkumar-0b4015412/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a className="card" href="https://x.com/Aadi_NG" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="X" /></a>
            <a className="card" href="https://github.com/adithyan-gireeshkumar" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" /></a>

        </div>
    </section>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              {buttons?.primary && (
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-black/90"
                  onClick={onPrimaryClick}
                >
                  {buttons.primary.text}
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white bg-white text-black hover:bg-white/90"
                  render={
                    <a
                      href={buttons.secondary.url}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  <GitHubIcon />
                  {buttons.secondary.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta39 };
