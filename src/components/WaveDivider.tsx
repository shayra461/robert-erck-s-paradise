interface WaveDividerProps {
  flip?: boolean;
  color?: string;
}

const WaveDivider = ({ flip = false, color = 'hsl(155, 45%, 12%)' }: WaveDividerProps) => (
  <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}>
    <svg
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      className="w-full h-[40px] md:h-[60px]"
    >
      <path
        d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"
        fill={color}
        opacity="0.5"
      />
      <path
        d="M0,40 C300,55 500,15 700,40 C900,55 1100,20 1200,40 L1200,60 L0,60 Z"
        fill={color}
        opacity="0.3"
      />
    </svg>
  </div>
);

export default WaveDivider;
