import React from 'react';
import styled from '@emotion/styled';

const SocialBody = styled('div')`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  width: 25%;

  a.icon:hover {
    transform: translateY(-5px);
  }

  .icon svg {
    height: 24px;
  }
`;

export class Social extends React.Component {
  render() {
    return (
      <SocialBody>
        <a
          className="icon"
          href="mailto:ralexandrastoica@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <svg width="40px" height="29px" viewBox="0 0 40 29">
            <title>Email</title>
            <desc>ralexandrastoica@gmail.com</desc>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g
                transform="translate(0.000000, -0.250000)"
                fill="#253237"
                fillRule="nonzero"
              >
                <path d="M39.2421875,9.82327586 C39.546875,9.58943966 40,9.80818966 40,10.1778017 L40,25.6034483 C40,27.6023707 38.3203125,29.2241379 36.25,29.2241379 L3.75,29.2241379 C1.6796875,29.2241379 0,27.6023707 0,25.6034483 L0,10.1853448 C0,9.80818966 0.4453125,9.59698276 0.7578125,9.83081897 C2.5078125,11.143319 4.828125,12.8103448 12.796875,18.3997845 C14.4453125,19.5614224 17.2265625,22.0053879 20,21.9903017 C22.7890625,22.012931 25.625,19.5161638 27.2109375,18.3997845 C35.1796875,12.8103448 37.4921875,11.1357759 39.2421875,9.82327586 Z M20,19.5689655 C21.8125,19.5991379 24.421875,17.3663793 25.734375,16.4461207 C36.1015625,9.18211207 36.890625,8.54849138 39.28125,6.73814655 C39.734375,6.3987069 40,5.87068966 40,5.3125 L40,3.87931034 C40,1.88038793 38.3203125,0.25862069 36.25,0.25862069 L3.75,0.25862069 C1.6796875,0.25862069 0,1.88038793 0,3.87931034 L0,5.3125 C0,5.87068966 0.265625,6.39116379 0.71875,6.73814655 C3.109375,8.54094828 3.8984375,9.18211207 14.265625,16.4461207 C15.578125,17.3663793 18.1875,19.5991379 20,19.5689655 Z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          className="icon"
          href="https://uk.linkedin.com/in/alexandrastoica"
          rel="noreferrer"
          target="_blank"
        >
          <svg width="30px" height="30px" viewBox="0 0 30 30">
            <title>Linkedin</title>
            <desc>Alexandra Stoica on Linkedin</desc>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fill="#253237" fillRule="nonzero">
                <path d="M6.71517857,30 L0.495535714,30 L0.495535714,9.97098214 L6.71517857,9.97098214 L6.71517857,30 Z M3.60200893,7.23883929 C1.61316964,7.23883929 0,5.59151786 0,3.60267857 C0,1.61334399 1.61267435,0.000669696531 3.60200893,0.000669696531 C5.59134351,0.000669696531 7.20401786,1.61334399 7.20401786,3.60267857 C7.20401786,5.59151786 5.59017857,7.23883929 3.60200893,7.23883929 Z M29.9933036,30 L23.7870536,30 L23.7870536,20.25 C23.7870536,17.9263393 23.7401786,14.9464286 20.5533482,14.9464286 C17.3196429,14.9464286 16.8241071,17.4709821 16.8241071,20.0825893 L16.8241071,30 L10.6111607,30 L10.6111607,9.97098214 L16.5763393,9.97098214 L16.5763393,12.703125 L16.6633929,12.703125 C17.49375,11.1294643 19.5220982,9.46875 22.5482143,9.46875 C28.8428571,9.46875 30,13.6138393 30,18.9977679 L30,30 L29.9933036,30 Z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          className="icon"
          href="https://github.com/alexandrastoica"
          rel="noreferrer"
          target="_blank"
        >
          <svg width="38px" height="30px" viewBox="0 0 38 30">
            <title>Github</title>
            <desc>Alexandra Stoica on Github</desc>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fill="#253237" fillRule="nonzero">
                <path d="M14.5012987,20.625974 C14.5012987,22.2545455 13.6519481,24.9194805 11.6415584,24.9194805 C9.63116883,24.9194805 8.78181818,22.2545455 8.78181818,20.625974 C8.78181818,18.9974026 9.63116883,16.3324675 11.6415584,16.3324675 C13.6519481,16.3324675 14.5012987,18.9974026 14.5012987,20.625974 L14.5012987,20.625974 Z M37.4025974,16.6909091 C37.4025974,19.1766234 37.1532468,21.8103896 36.038961,24.0935065 C33.0857143,30.0623377 24.9662338,29.9220779 19.1532468,29.9220779 C13.2467532,29.9220779 4.64415584,30.1324675 1.57402597,24.0935065 C0.436363636,21.8337662 1.77635684e-14,19.1766234 1.77635684e-14,16.6909091 C1.77635684e-14,13.425974 1.08311688,10.3402597 3.23376623,7.83896104 C2.82857143,6.60779221 2.63376623,5.31428571 2.63376623,4.03636364 C2.63376623,2.36103896 3.01558442,1.51948052 3.77142857,0 C7.3012987,0 9.56103896,0.701298701 12.2493506,2.80519481 C14.5090909,2.26753247 16.8311688,2.02597403 19.161039,2.02597403 C21.2649351,2.02597403 23.3844156,2.25194805 25.425974,2.74285714 C28.0753247,0.662337662 30.3350649,0 33.825974,0 C34.5896104,1.51948052 34.9636364,2.36103896 34.9636364,4.03636364 C34.9636364,5.31428571 34.761039,6.58441558 34.3636364,7.79220779 C36.5064935,10.3168831 37.4025974,13.425974 37.4025974,16.6909091 L37.4025974,16.6909091 Z M32.3922078,20.625974 C32.3922078,17.2051948 30.3116883,14.1896104 26.6649351,14.1896104 C25.1922078,14.1896104 23.7818182,14.4545455 22.3012987,14.6571429 C21.1402597,14.8363636 19.9792208,14.9064935 18.787013,14.9064935 C17.6025974,14.9064935 16.4415584,14.8363636 15.2727273,14.6571429 C13.8155844,14.4545455 12.3896104,14.1896104 10.9090909,14.1896104 C7.26233766,14.1896104 5.18181818,17.2051948 5.18181818,20.625974 C5.18181818,27.4675325 11.4467532,28.5194805 16.9012987,28.5194805 L20.6571429,28.5194805 C26.1350649,28.5194805 32.3922078,27.4753247 32.3922078,20.625974 Z M25.9558442,16.3324675 C23.9454545,16.3324675 23.0961039,18.9974026 23.0961039,20.625974 C23.0961039,22.2545455 23.9454545,24.9194805 25.9558442,24.9194805 C27.9662338,24.9194805 28.8155844,22.2545455 28.8155844,20.625974 C28.8155844,18.9974026 27.9662338,16.3324675 25.9558442,16.3324675 Z"></path>
              </g>
            </g>
          </svg>
        </a>
        <a
          className="icon"
          href="https://twitter.com/alexandrasto_"
          rel="noreferrer"
          target="_blank"
        >
          <svg width="37px" height="30px" viewBox="0 0 37 30">
            <title>Twitter</title>
            <desc>Alexandra Stoica on Twitter</desc>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fill="#253237" fillRule="nonzero">
                <path d="M33.1276442,7.47951923 C33.1510817,7.8075 33.1510817,8.13555288 33.1510817,8.46353365 C33.1510817,18.4673798 25.5369231,29.9941587 11.6204567,29.9941587 C7.33305288,29.9941587 3.35026442,28.7524038 0,26.5970913 C0.609158654,26.6673317 1.19480769,26.6907692 1.82740385,26.6907692 C5.36502404,26.6907692 8.62161058,25.4959615 11.2221635,23.4576923 C7.89533654,23.3873798 5.10735577,21.2085577 4.14677885,18.2097115 C4.61538462,18.2799519 5.08391827,18.3268269 5.57596154,18.3268269 C6.25536058,18.3268269 6.93483173,18.2330769 7.56735577,18.0691587 C4.09997596,17.36625 1.49935096,14.320601 1.49935096,10.6423558 L1.49935096,10.5486779 C2.50673077,11.1109615 3.67824519,11.4623798 4.91985577,11.5091827 C2.88158654,10.1503125 1.54622596,7.8309375 1.54622596,5.20694712 C1.54622596,3.80127404 1.92100962,2.51271635 2.57704327,1.38814904 C6.30216346,5.98009615 11.9015625,8.97887019 18.1802885,9.30692308 C18.0631731,8.74463942 17.9928606,8.15899038 17.9928606,7.57326923 C17.9928606,3.40298077 21.3665625,0.00591346154 25.5602163,0.00591346154 C27.7390385,0.00591346154 29.7069952,0.919615385 31.0893029,2.39560096 C32.7995192,2.06762019 34.4394952,1.43502404 35.8921154,0.568197115 C35.3297596,2.32536058 34.1349519,3.80134615 32.5652885,4.73841346 C34.088149,4.57449519 35.5641346,4.15269231 36.9229327,3.56704327 C35.8922596,5.06639423 34.6036298,6.40175481 33.1276442,7.47951923 Z"></path>
              </g>
            </g>
          </svg>
        </a>
      </SocialBody>
    );
  }
}
