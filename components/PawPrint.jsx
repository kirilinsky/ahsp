// Toe authored around its base at (0,0), growing upward: straight flanks so
// the toe stays thick along its length, then an abrupt claw at the tip.
const TOE_MID =
  "M-13 6v-56c0-4.5 1.1-8 3.4-11.3l8-11.6c0.8-1.2 2.4-1.2 3.2 0l8 11.6C11.9-58 13-54.5 13-50V6z";
const TOE_SIDE =
  "M-12 6v-46c0-4.2 1-7.4 3.1-10.4l7.4-10.7c0.7-1.1 2.2-1.1 2.9 0l7.4 10.7C11-47.4 12-44.2 12-40V6z";

/**
 * Tridactyl theropod print: three clawed toes fanning off one heel pad.
 * Authored pointing up; the trail rotates it to face the walking direction.
 */
export default function PawPrint({ className, ...rest }) {
  return (
    <svg
      viewBox="0 0 120 130"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <g fill="currentColor">
        <ellipse cx="60" cy="98" rx="28" ry="21" />
        <g transform="translate(60 96) rotate(-41)">
          <path d={TOE_SIDE} />
        </g>
        <path d={TOE_MID} transform="translate(60 96)" />
        <g transform="translate(60 96) rotate(41)">
          <path d={TOE_SIDE} />
        </g>
      </g>
    </svg>
  );
}
