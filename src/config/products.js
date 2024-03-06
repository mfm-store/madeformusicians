import variantKalimba from "./kalimba";
import variantCapos from "./capos";
import CATEGORIES from './categories';
import variantStraps from './straps'

const products = [
  {
    id: 123,
    name: 'Guitar Capo Heavy duty (Metal) with Pin Remover',
    price: '329',
    description: `
    <li><strong>This Capo is one of the Most Popular QUICK- CHANGE CAPO DESIGNS.</strong> Not only Quickly Change Between Frets; but also can Pull Out the String Nail More Easily</li>
          <li><strong>Guitar Capo Quick Change Acoustic Guitar Accessories</strong> With free 5pcs Guitar Picks</li>
          <li><strong>Capo works on acoustic guitar, electric guitar, mandolin, banjo, ukulele, folk Guitars and mandolin</strong></li>
          <li><strong>CAN IT BE USED for YOUR INSTRUMENT</strong> - Obviously; this Capo Work Perfectly with Your Instrument.Guitar Capo is Suitable for ACOUSTIC or ELECTRIC GUITARS; UKULELE; BANJO; MANDOLIN</li>`,
    imageUrl: '/products/capo/silver.jpeg',
    secondaryImageUrls: ['/products/capo/black.jpeg', '/products/capo/grey.jpeg', '/products/capo/gold.jpeg'],
    instagramUrl: 'https://www.instagram.com/direct/t/101734417898343/',
    rank: 1,
    productGroudId: 'capo-123',
    category: CATEGORIES.CAPOS,
    variants: variantCapos,
    defaultVariant: 'silver'
  },
  {
    id: 456,
    name: 'Kalimba',
    price: '849',
    description: `<li>Kalimba Thumb Piano 17 Keys Finger Piano</li>
    <li>Beautiful polishing natural wood grain piano paint luster smooth feel beautiful sound</li>
    <li>Engraved Notes Hand-rest Curve Design Bending Keys</li>
    <li>Compact and Professional Kalimba Size Study Instruction</li>
    <li>Warm and deep sound International Standard C Tone</li>`,
    imageUrl: '/products/kalimba/deerkalimba/1.jpeg',
    secondaryImageUrls: ['/products/kalimba/deerkalimba/2.jpeg', '/products/kalimba/deerkalimba/3.jpeg', '/products/kalimba/deerkalimba/4.jpeg', '/products/kalimba/deerkalimba/5.jpeg'],
    instagramUrl: 'https://www.instagram.com/direct/t/101734417898343/',
    rank: 2,
    category: CATEGORIES.TUNERS,
    variants: variantKalimba,
    defaultVariant: 'deer'
  },
  {
    id: 123213,
    name: 'Adjustable Woven Guitar Strap Retro Style / Electric Guitar Strap / Electric Guitar Strap / Guitar Player Gift / Bass Guitar Strap',
    price: '999',
    description: `Size: 5*149cm
    <p>
    Brand new and high quality.
    Shoulder straps designed for folk or classical guitars.
    Woven cotton shoulder straps are sturdy and durable.
    The length is adjustable, suitable for different people.
    Comes with 2 colors for your choice.
    </p>
    <p>
    Adjustable guitar strap for an electric, acoustic, or bass guitar.
    Durable, thick construction with leather ends, fine stitching, and a vintage tweed design
    creates a lighter feel; comfortable, stay-in-place design won’t slide off or dig into shoulder.
    Suitable for most users; accommodates both kids and adults; choice of stylish color
    </p>
    <p>
    <h2 class='font-bold'>Features:</h2>
    Embroided cotton woven strap with wider and thicker design, provides maximum comfort when using.
    Embroidery patterns of different shapes, makes the guitar strap more beautiful and gorgeous.
    With slopped fastener, the strap length can be adjusted easily and quickly, prevent slippery and wear resisting.
    High quality blended leather ends wiht fine sewing and reasonable hole position, not easy to fall off while playing.
    Perfect guitar accessories, well compatible with acoustic guitar, electric guitar and bass guitars; fit for both adults and children.</p>`,
    imageUrl: '/products/straps/red/1.jpeg',
    secondaryImageUrls: ['/products/straps/red/2.jpeg', '/products/straps/red/3.jpeg', '/products/straps/red/4.jpeg', '/products/straps/red/5.jpeg', '/products/straps/red/6.jpeg', '/products/straps/red/7.jpeg'],
    instagramUrl: 'https://www.instagram.com/direct/t/101734417898343/',
    rank: 3,
    category: CATEGORIES.PICKS,
    defaultVariant: 'red',
    variants: variantStraps,
  },
  {
    id: 234234,
    name: 'String Cutter Winder',
    price: '249',
    description: 'String Cutter Winder',
    imageUrl: '/products/cutterWinder/1.jpeg',
    secondaryImageUrls: [],
    instagramUrl: 'https://www.instagram.com/direct/t/101734417898343/',
    rank: 4,
    category: CATEGORIES.STRING_WINDER_CUTTER,
  },
  {
    id: 43534534,
    name: 'Guitar Tuners',
    price: '299',
    description: `<li>Screen: LCD display.</li>
    <li>Tuning type: Guitar, Chromatic, Bass, Violin, Ukulele.</li>
    <li>A4 range: 430Hz--450Hz.</li>
    <li>Tuning accuracy: ±0.5cent</li>`,
    imageUrl: '/products/tuners/1.jpeg',
    secondaryImageUrls: ['/products/tuners/2.jpeg', '/products/tuners/3.jpeg'],
    instagramUrl: 'https://www.instagram.com/direct/t/101734417898343/',
    rank: 5,
    category: CATEGORIES.TUNERS,
  },
  {
    id: 234555,
    name: 'Guitar Strings',
    price: '299',
    description: `<li>Acoustic Guitar Strings- Made With Highest Quality Phosphor Bronze Wound</li>
    <li>It Owns The Deep & Steady Bass, Clear & Melodious Trebie.</li>
    <li>This Series Have 4 Tensions Which Can Satisfy Defferent Playing Requirements.</li>
    <li>The String Durability Is 4 To 5 Times Longer Than Normal String</li>`,
    imageUrl: '/products/strings/1.jpeg',
    secondaryImageUrls: ['/products/strings/2.jpeg'],
    instagramUrl: 'https://www.instagram.com/direct/t/101734417898343/',
    rank: 6,
    category: CATEGORIES.STRINGS,
  }
];

export default products;