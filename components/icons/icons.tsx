import {createIcon} from '@gluestack-ui/themed';

import {Rect, Path, Circle, G, Polyline, Line} from 'react-native-svg';

export const GluestackIcon = createIcon({
  // createIcon function is imported from '@gluestack-ui/themed'
  viewBox: '0 0 32 32',
  path: (
    <>
      {/* Rect, Path is imported from 'react-native-svg' */}
      <Rect width="32" height="32" rx="2" fill="currentColor" />
      <Path
        d="M9.5 14.6642L15.9999 9.87633V12.1358L9.5 16.9236V14.6642Z"
        fill="white"
      />
      <Path
        d="M22.5 14.6642L16.0001 9.87639V12.1359L22.5 16.9237V14.6642Z"
        fill="white"
      />
      <Path
        d="M9.5 19.8641L15.9999 15.0763V17.3358L9.5 22.1236V19.8641Z"
        fill="white"
      />
      <Path
        d="M22.5 19.8642L16.0001 15.0764V17.3358L22.5 22.1237V19.8642Z"
        fill="white"
      />
    </>
  ),
});

export const InformationCircleIcon = createIcon({
  viewBox: '0 0 512 512',
  path: (
    <>
      <Path
        d="M248,64C146.39,64,64,146.39,64,248s82.39,184,184,184,184-82.39,184-184S349.61,64,248,64Z"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <Polyline
        points="220 220 252 220 252 336"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32px"
      />
      <Line
        x1="208"
        y1="340"
        x2="296"
        y2="340"
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32px"
      />
      <Path
        d="M248,130a26,26,0,1,0,26,26A26,26,0,0,0,248,130Z"
        fill="#000000"
      />
    </>
  ),
});

export const CameraIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Circle cx="12" cy="13" r="3" stroke="#1C274C" strokeWidth="1.5" />
      <Path
        d="M9.77778 21H14.2222C17.3433 21 18.9038 21 20.0248 20.2646C20.51 19.9462 20.9267 19.5371 21.251 19.0607C22 17.9601 22 16.4279 22 13.3636C22 10.2994 22 8.76721 21.251 7.6666C20.9267 7.19014 20.51 6.78104 20.0248 6.46268C19.3044 5.99013 18.4027 5.82123 17.022 5.76086C16.3631 5.76086 15.7959 5.27068 15.6667 4.63636C15.4728 3.68489 14.6219 3 13.6337 3H10.3663C9.37805 3 8.52715 3.68489 8.33333 4.63636C8.20412 5.27068 7.63685 5.76086 6.978 5.76086C5.59733 5.82123 4.69555 5.99013 3.97524 6.46268C3.48995 6.78104 3.07328 7.19014 2.74902 7.6666C2 8.76721 2 10.2994 2 13.3636C2 16.4279 2 17.9601 2.74902 19.0607C3.07328 19.5371 3.48995 19.9462 3.97524 20.2646C5.09624 21 6.65675 21 9.77778 21ZM12 9.27273C9.69881 9.27273 7.83333 11.1043 7.83333 13.3636C7.83333 15.623 9.69881 17.4545 12 17.4545C14.3012 17.4545 16.1667 15.623 16.1667 13.3636C16.1667 11.1043 14.3012 9.27273 12 9.27273ZM12 10.9091C10.6193 10.9091 9.5 12.008 9.5 13.3636C9.5 14.7192 10.6193 15.8182 12 15.8182C13.3807 15.8182 14.5 14.7192 14.5 13.3636C14.5 12.008 13.3807 10.9091 12 10.9091ZM16.7222 10.0909C16.7222 9.63904 17.0953 9.27273 17.5556 9.27273H18.6667C19.1269 9.27273 19.5 9.63904 19.5 10.0909C19.5 10.5428 19.1269 10.9091 18.6667 10.9091H17.5556C17.0953 10.9091 16.7222 10.5428 16.7222 10.0909Z"
        stroke="#1C274C"
        strokeWidth="1.5"
      />
      <Path
        d="M19 10H18"
        stroke="#1C274C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </>
  ),
});

export const TestTubeIcon = createIcon({
  viewBox: '0 0 32 32',
  path: (
    <>
      <Rect
        x="12"
        y="2"
        width="8"
        height="28"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <Path d="M12 10H20" stroke="currentColor" strokeWidth="2" />
      <Path d="M12 16H20" stroke="currentColor" strokeWidth="2" />
      <Path d="M12 22H20" stroke="currentColor" strokeWidth="2" />
    </>
  ),
});

export const ReportsIcon = createIcon({
  viewBox: '0 0 184.153 184.153',
  path: (
    <>
      <G>
        <G>
          <G>
            <Path
              d="M129.318,0H26.06c-1.919,0-3.475,1.554-3.475,3.475v177.203c0,1.92,1.556,3.475,3.475,3.475h132.034
              c1.919,0,3.475-1.554,3.475-3.475V34.131C161.568,22.011,140.771,0,129.318,0z M154.62,177.203H29.535V6.949h99.784
              c7.803,0,25.301,18.798,25.301,27.182V177.203z"
              fill="#000000"
            />
            <Path
              d="M71.23,76.441c15.327,0,27.797-12.47,27.797-27.797c0-15.327-12.47-27.797-27.797-27.797
              c-15.327,0-27.797,12.47-27.797,27.797C43.433,63.971,55.902,76.441,71.23,76.441z M71.229,27.797
              c11.497,0,20.848,9.351,20.848,20.847c0,0.888-0.074,1.758-0.183,2.617l-18.071-2.708L62.505,29.735
              C65.162,28.503,68.112,27.797,71.229,27.797z M56.761,33.668l11.951,19.869c0.534,0.889,1.437,1.49,2.462,1.646l18.669,2.799
              c-3.433,6.814-10.477,11.51-18.613,11.51c-11.496,0-20.847-9.351-20.847-20.847C50.381,42.767,52.836,37.461,56.761,33.668z"
              fill="#000000"
            />
            <Rect
              x="46.907"
              y="90.339"
              width="73.058"
              height="6.949"
              fill="#000000"
            />
            <Rect
              x="46.907"
              y="107.712"
              width="48.644"
              height="6.949"
              fill="#000000"
            />
            <Rect
              x="46.907"
              y="125.085"
              width="62.542"
              height="6.949"
              fill="#000000"
            />
          </G>
        </G>
      </G>
    </>
  ),
});
