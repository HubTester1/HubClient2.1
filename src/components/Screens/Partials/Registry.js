/**
 * @name Partial Screen Registry
 * @component
 * @category Partial Screens
 * @description Registry (exports) of all partial screen components.
 * Screen component gets its partial screen content from this registry.
 * 
 * @todo Make into a service?
 */

export { default as TodayAndRecent } from './Home/TodayAndRecent';
export { default as Pinned } from './Home/Pinned';
export { default as Ux } from './Home/Ux';
export { default as Announcements } from './Messages/Announcements';
export { default as Classifieds } from './Messages/Classifieds';
