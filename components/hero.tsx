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

import Image from 'next/image'
import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';

import { BRAND_NAME, DATE } from '@lib/constants';

export default function Hero() {
  return (
    <div className={cn(
      styleUtils.appear,
      styleUtils['appear-third'],
      styles.heroImage
    )}>
      <div className={styles.heroImage}>
        <span className={styles.computer} >
        <Image
          alt={'computer'}
          title={'computer'}
          src={"/computer.png"}
          loading="lazy"
          width={'160px'}
          height={'160px'}
        />
        </span>
      </div>

      <h1 className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        Welcome to
        <br className={styleUtils['show-on-desktop']} /> {BRAND_NAME}
      </h1>
      <h3
        className={cn(
          styleUtils.appear,
          styleUtils['appear-fourth'],
          styles.descriptionDesktop
        )}
      >
        Let's build products, have some fun and celebrate
        <a href="https://justzht.com/" target="blank">@justzht</a>'s graduation!
      </h3>
      <div className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          Online & In-person
        </p>
      </div>
    </div>
  );
}
