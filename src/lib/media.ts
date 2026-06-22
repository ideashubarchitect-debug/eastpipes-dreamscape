/**
 * Real imagery published on eastpipes.com, referenced by URL.
 * For production, download these into src/assets to avoid depending on the
 * legacy host.
 */
const CDN = "https://www.eastpipes.com/wp-content/uploads";

export const EP_MEDIA = {
  // Leadership
  ceo: `${CDN}/2025/11/Darweesh-1.webp`,
  bodChairman: `${CDN}/2025/11/vipul.webp`,
  bodViceChairman: `${CDN}/2025/11/yazed.webp`,
  execVpOps: `${CDN}/2021/12/01-2Sanjay-Shrivastava-VP-Operations-1200x1200.jpg`,

  // Company / facility
  home: `${CDN}/2021/12/1000-scaled.jpg`,
  story1: `${CDN}/2021/12/0107-scaled.jpg`,
  story2: `${CDN}/2021/12/444DSC03209-scaled.jpg`,
  glance1: `${CDN}/2021/12/22255-scaled.jpg`,
  glance2: `${CDN}/2022/01/2Q2A9501-scaled.jpg`,

  // What we do
  whatWeDo1: `${CDN}/2022/01/wt85-scaled.jpg`,
  whatWeDo2: `${CDN}/2022/01/what85-scaled.jpg`,

  // Products & services
  hsaw: `${CDN}/2021/12/11113-scaled.jpg`,
  hsawAlt: `${CDN}/2022/01/113-scaled.jpg`,
  doubleJointing: `${CDN}/2022/01/199-scaled.jpg`,
  coating: `${CDN}/2022/01/238.jpg`,
  techSupport: `${CDN}/2022/01/technical-support-image.jpg`,
  costSavings: `${CDN}/2022/01/cost-savings-700x315-1.jpg`,
  ancillary: `${CDN}/2022/01/2Q2A0120-scaled.jpg`,

  // Sustainability
  sustainability: `${CDN}/2022/01/20-easy-ways-home-sustainable.jpg`,

  // Investors
  ipo: `${CDN}/2021/10/2.jpg`,
} as const;
