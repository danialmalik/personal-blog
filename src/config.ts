export const SITE = {
  website: "https://danialmalik.me/",
  author: "Danial Malik",
  profile: "https://danialmalik.me/",
  desc: "Danial Malik's personal blog — thoughts on software engineering, AWS, and building things.",
  title: "Danial",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Asia/Karachi",
} as const;
