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

export const SITE_URL = 'https://hack-greendale-2022.vercel.app';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'JustZht';
export const BRAND_NAME = 'Hack Greendale 2022';
export const SITE_NAME_MULTILINE = ['Hack', 'Greendale', '2022'];
export const SITE_NAME = 'ACME Conf';
export const META_DESCRIPTION =
  'Hack greendale 2022 is a hackathon holding for celebration of @justzht\'s graduation from CMU. Let\'s have some fun.';
export const SITE_DESCRIPTION =
  'Let\'s build products, have some fun and celebrate @justzht\'s graduation!';
export const DATE = '16-17 April 2022';
export const SHORT_DATE = 'Apr 16 - 10:00am PST';
export const FULL_DATE = 'April 16th 10am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://foreseaz.notion.site/Hack-Greendale-Code-of-Conduct-c8e3d15f62724f269ee62faf5f7fd3c9';
export const REPO = 'https://github.com/foreseaz/hack-greendale-2022';
export const SAMPLE_TICKET_NUMBER = 1333;
export const NAVIGATION = [
  {
    name: 'Live Stage',
    route: '/stage/a'
  },
  // {
  //   name: 'Vercel Stage',
  //   route: '/stage/c'
  // },
  // {
  //   name: '100ms Stage',
  //   route: '/stage/m'
  // },
  {
    name: 'Schedule',
    route: '/schedule'
  },
  // {
  //   name: 'Speakers',
  //   route: '/speakers'
  // },
  // {
  //   name: 'Expo',
  //   route: '/expo'
  // },
  // {
  //   name: 'Jobs',
  //   route: '/jobs'
  // }
];

export type TicketGenerationState = 'default' | 'loading';
