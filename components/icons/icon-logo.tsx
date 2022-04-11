/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default function IconLogo({
  backgroundColor = 'transparent',
  foregroundColor = 'var(--accents-1)',
  ...props
}) {
  return (
    // <svg
    //   width="100%"
    //   height="100%"
    //   viewBox="0 0 32 32"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <rect width="100%" height="100%" rx="16" fill={backgroundColor} />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
    //     fill={foregroundColor}
    //   />
    // </svg>

<svg width="133px" height="133px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg">
<title>Group</title>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="A4" transform="translate(-254.000000, -267.000000)" fill={foregroundColor} fill-rule="nonzero">
        <g id="computer" transform="translate(288.148467, 388.149209) rotate(-8.000000) translate(-288.148467, -388.149209) translate(124.377366, 209.592974)">
            <g id="f79efbf0135485f75e62842b327d0f6d" transform="translate(203.118846, 128.969259) rotate(10.000000) translate(-203.118846, -128.969259) translate(152.655802, 78.506215)">
                <g id="Group" transform="translate(50.463044, 50.463044) scale(-1, 1) rotate(-180.000000) translate(-50.463044, -50.463044) translate(0.000000, 0.000000)">
                    <path d="M70.043083,100.751861 C57.551944,99.3171329 47.6169109,89.7799875 45.6900479,77.4329096 C44.5747125,70.3003195 40.4995672,63.8132544 34.3554387,59.4690452 C31.517152,57.4277903 27.1165719,55.5897372 23.9528503,55.1043106 C17.6470342,54.1344836 12.4153592,51.5482782 8.07554062,47.2235682 C3.85827506,43.0404837 1.18167599,37.7664721 0.228028152,31.7658599 C-0.15713847,29.3407793 -0.0356153114,24.2484178 0.451507182,22.0665636 C1.64820134,16.7720266 3.93963379,12.4483428 7.54825369,8.66960947 C11.7047577,4.32540026 17.0579558,1.45594386 22.7767533,0.445065983 C29.590289,-0.747462034 39.1205883,0.485090589 48.7312164,3.79892275 C73.448821,12.2861919 92.6515398,33.0989872 98.9985503,58.2354663 C102.6082,72.6022475 101.189057,82.826995 94.3950882,90.9899622 C88.5557974,98.0435294 79.1480512,101.802764 70.043083,100.751861 Z M55.4231196,74.0920608 C56.1479637,73.3343163 56.1479637,72.6181489 55.4435665,69.8969209 C52.2221505,57.3509994 43.7274677,48.2445522 31.287547,44.0286237 C28.4290643,43.0453228 23.9808316,42.08385 23.2559875,42.2678291 C22.5106964,42.4518082 21.7265561,43.4756469 21.7265561,44.2531406 C21.7265561,45.0306343 22.3501879,46.1563371 22.8736296,46.2997785 C23.075032,46.3611049 24.0615971,46.5658726 25.0471398,46.7498517 C38.5145193,49.2268137 48.3576781,58.3540495 51.5177533,71.2679292 C52.2630444,74.2562908 52.5646368,74.6855754 54.0337497,74.6855754 C54.6982754,74.6855754 54.9804432,74.5629226 55.4231196,74.0920608 Z" id="Shape"></path>
                </g>
            </g>
        </g>
    </g>
</g>
</svg>
  );
}
