interface MetaInfo {
  title: string;
  author: string;
  description: string;
  image: { url: string; alt: string };
  pubDate: string;
  slug: string;
  tags: string[];
}

const meta: MetaInfo[] = [
  {
    author: "Ismael Amezcua",
    pubDate: "10/22/2022",
    slug: "first-post",
    title: "This is the first post.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada egestas risus quis varius. Mauris malesuada finibus laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    tags: ["Programming"],
    image: {
      url: "https://picsum.photos/300/400/",
      alt: "Image description of the first post",
    },
  },
  {
    author: "Ismael Amezcua",
    pubDate: "December 21, 2022",
    slug: "second-post",
    title: "This is the second post",
    description:
      "Nulla euismod massa et velit laoreet, in porta velit imperdiet. Proin id bibendum erat. Fusce iaculis accumsan est, et viverra nisi consequat vel.",
    tags: ["Programming"],
    image: {
      url: "https://picsum.photos/300/400/",
      alt: "Year in computer Science",
    },
  },
  {
    author: "Ismael Amezcua",
    pubDate: "December 21, 2022",
    slug: "third-post",
    title: "This is the third post",
    description:
      "Suspendisse fermentum aliquet sem, sed convallis nibh tincidunt in. Sed in nisi dui. Integer quam sem, egestas vitae orci ut, feugiat hendrerit arcu. Donec dignissim ante non lacinia lobortis. Morbi auctor, metus in volutpat rutrum, orci nibh pulvinar nisi, eu consequat nibh purus sit amet neque.",
    tags: ["Programming"],
    image: { url: "https://picsum.photos/300/400/", alt: "Human Values" },
  },
];

export default meta;
