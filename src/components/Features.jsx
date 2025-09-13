import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isComingSoon,
  videoPosition = "object-center",
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className={`absolute left-0 top-0 size-full object-cover ${videoPosition}`}
      />
      <div className="group relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 bg-black/30 hover:bg-transparent duration-200">
        <div>
          <h1 className="bento-title special-font group-hover:hidden">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base group-hover:hidden">
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-[155px] cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-yellow-300 px-5 py-2 text-xs uppercase text-black transition-all duration-300 ease-in-out group-hover:w-full"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #fcd707, #00000000)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">discover more</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-blue-400 pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Features That Take Your Surf to the Next Level
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          WaveLab offers powerful tools to help you analyze, learn, and improve
          like a pro. From detailed breakdowns to actionable insights, our
          features are designed to make every wave a learning opportunity.
        </p>
      </div>

      <BentoTilt className="bento-tilt_1 border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              2024 Vi<b>v</b>o Rio Pro
            </>
          }
          description="Frame-by-frame analysis of the final, Italo Ferreira x Yago Dora, highlighting key maneuvers and strategies for surfers to learn from the pros."
          isComingSoon
          videoPosition="object-bottom"
        />
      </BentoTilt>

      <div className="grid h-[115vh] w-full grid-cols-2 grid-rows-2 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="videos/feature-2.mp4"
            title={
              <>
                Mastering the Wa<b>v</b>es: Kelly Sl<b>a</b>ter’s Technique
              </>
            }
            description="Analyzed Slater’s fluid maneuvers, wave selection, and tactical decisions, highlighting what makes him the greatest surfer of all time."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="videos/feature-3.mp4"
            title={
              <>
                2024 Olympics S<b>u</b>rf Analysis
              </>
            }
            description="Studied wave conditions, ocean patterns, and athlete performance to extract actionable insights for improving surf strategy and technique."
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                Filipe T<b>o</b>ledo: 2x World Ch<b>a</b>mpion
              </>
            }
            description="Analyzed Toledo’s precision, speed, and innovative maneuvers, highlighting the skills that set him apart as a two-time world champion."
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
