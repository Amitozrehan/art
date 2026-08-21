export const INSTAGRAM_CONFIG = {
  USERNAME: '@arsh_dhiman_art',
  HANDLE: 'arsh_dhiman_art',
  PROFILE_URL: 'https://www.instagram.com/arsh_dhiman_art/',
};

export interface InstagramPostCard {
  id: number;
  title: string;
  category: string;
  image: string;
  caption: string;
  likes: string;
  postUrl: string;
}

// 6 Curated Instagram Gallery Items matching luxury live wedding artwork
export const INSTAGRAM_GALLERY_ITEMS: InstagramPostCard[] = [
  {
    id: 1,
    title: 'Floral Backdrop Couple Canvas',
    category: 'Live Wedding Painting',
    image: '/assets/gallery_1.jpg',
    caption: 'Capturing the golden glow & romance of the celebration live in real time. 🎨✨',
    likes: '1,420 likes',
    postUrl: 'https://www.instagram.com/arsh_dhiman_art/',
  },
  {
    id: 2,
    title: 'Royal Mandap Arch Ceremony',
    category: 'Bride & Groom Portrait',
    image: '/assets/gallery_2.jpg',
    caption: 'Acrylic canvas study of traditional royal attire, fine details, and timeless love. 💍🌹',
    likes: '2,150 likes',
    postUrl: 'https://www.instagram.com/arsh_dhiman_art/',
  },
  {
    id: 3,
    title: 'Anand Karaj Holy Ceremony',
    category: 'Artist Live in Action',
    image: '/assets/gallery_3.jpg',
    caption: 'In the element — bringing sacred wedding vows to life live on easel. 🖌️✨',
    likes: '1,890 likes',
    postUrl: 'https://www.instagram.com/arsh_dhiman_art/',
  },
  {
    id: 4,
    title: 'Grand Floral Archway Artwork',
    category: 'Finished Wedding Artwork',
    image: '/assets/gallery_4.jpg',
    caption: 'Vibrant acrylic layers, impasto flowers, and hand-painted details. 🖼️🏆',
    likes: '3,040 likes',
    postUrl: 'https://www.instagram.com/arsh_dhiman_art/',
  },
  {
    id: 5,
    title: 'Bespoke Milestone Portrait',
    category: 'Milestone Celebration',
    image: '/assets/gallery_5.jpg',
    caption: 'Handcrafted 1st birthday portrait with archway & floral detailing. 🎈✨',
    likes: '1,760 likes',
    postUrl: 'https://www.instagram.com/arsh_dhiman_art/',
  },
  {
    id: 6,
    title: 'Lead Artist Live in Action',
    category: 'Artist & Artwork',
    image: '/assets/artist.png',
    caption: 'Arsh Dhiman beside his completed live wedding painting at a luxury venue. 🌟🎨',
    likes: '2,810 likes',
    postUrl: 'https://www.instagram.com/arsh_dhiman_art/',
  },
];

/**
 * Safely opens Instagram profile or specific post URL in a new browser tab.
 * @param url Specific Instagram post or profile URL (defaults to official profile)
 */
export const openInstagram = (url: string = INSTAGRAM_CONFIG.PROFILE_URL): void => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
