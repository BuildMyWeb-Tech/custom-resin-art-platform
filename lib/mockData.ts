export type OrderStatus =
  | 'Order Received'
  | 'Materials Received'
  | 'In Progress'
  | 'Completed'
  | 'Shipped';

export interface MockOrder {
  id: string;
  customerName: string;
  whatsapp: string;
  email: string;
  product: string;
  size: string;
  colorTheme: string;
  nameEngraving: string;
  specialDate: string;
  message: string;
  specialInstructions: string;
  deliveryDate: string;
  price: number;
  status: OrderStatus;
  placedOn: string;
  referenceImage: string | null;
  memoryImage: string | null;
}

export const MOCK_ORDERS: MockOrder[] = [
  {
    id: 'RESIN-1001',
    customerName: 'Priya Sharma',
    whatsapp: '9876543210',
    email: 'priya.sharma@gmail.com',
    product: 'Wedding Flower Preservation Frame',
    size: 'Medium',
    colorTheme: 'Gold',
    nameEngraving: 'Priya & Arjun',
    specialDate: '2024-02-14',
    message: '"Together is our favourite place to be"',
    specialInstructions: 'Please preserve the red roses from the bridal bouquet along with the white orchids.',
    deliveryDate: '2024-08-15',
    price: 4300,
    status: 'In Progress',
    placedOn: '2024-07-01',
    referenceImage: null,
    memoryImage: null,
  },
  {
    id: 'RESIN-1002',
    customerName: 'Meera Nair',
    whatsapp: '9123456780',
    email: 'meera.nair@outlook.com',
    product: 'Baby Memory Resin Frame',
    size: 'Small',
    colorTheme: 'Pastel',
    nameEngraving: 'Baby Aryan',
    specialDate: '2024-05-20',
    message: '"Tiny hands, forever in our hearts"',
    specialInstructions: 'Include the hospital ID band and first shoes in the resin.',
    deliveryDate: '2024-08-20',
    price: 3300,
    status: 'Materials Received',
    placedOn: '2024-07-05',
    referenceImage: null,
    memoryImage: null,
  },
  {
    id: 'RESIN-1003',
    customerName: 'Ananya Reddy',
    whatsapp: '9988776655',
    email: 'ananya.r@yahoo.com',
    product: 'Custom Resin Name Board',
    size: 'Large',
    colorTheme: 'White',
    nameEngraving: 'The Reddys',
    specialDate: '',
    message: '',
    specialInstructions: 'Modern minimalist style, matte finish preferred.',
    deliveryDate: '2024-09-01',
    price: 5000,
    status: 'Order Received',
    placedOn: '2024-07-10',
    referenceImage: null,
    memoryImage: null,
  },
  {
    id: 'RESIN-1004',
    customerName: 'Shalini Menon',
    whatsapp: '9876501234',
    email: 'shalini.m@gmail.com',
    product: 'Wedding Flower Preservation Frame',
    size: 'Large',
    colorTheme: 'Gold',
    nameEngraving: 'Shalini & Kiran',
    specialDate: '2023-12-10',
    message: '"A love story worth preserving"',
    specialInstructions: 'Please include the dried petals from our wedding garlands.',
    deliveryDate: '2024-07-25',
    price: 5300,
    status: 'Shipped',
    placedOn: '2024-06-15',
    referenceImage: null,
    memoryImage: null,
  },
  {
    id: 'RESIN-1005',
    customerName: 'Divya Krishnan',
    whatsapp: '9345678901',
    email: 'divya.k@gmail.com',
    product: 'Baby Memory Resin Frame',
    size: 'Medium',
    colorTheme: 'Pastel',
    nameEngraving: 'Baby Kiara',
    specialDate: '2024-04-12',
    message: '"Our greatest adventure began"',
    specialInstructions: 'Include the ultrasound photo and name tag from the hospital.',
    deliveryDate: '2024-08-10',
    price: 4300,
    status: 'Completed',
    placedOn: '2024-06-28',
    referenceImage: null,
    memoryImage: null,
  },
  {
    id: 'RESIN-1006',
    customerName: 'Kavitha Sundar',
    whatsapp: '9654321098',
    email: 'kavitha.s@hotmail.com',
    product: 'Custom Resin Name Board',
    size: 'Small',
    colorTheme: 'Custom',
    nameEngraving: 'Kavitha',
    specialDate: '',
    message: '',
    specialInstructions: 'Dusty rose and gold theme. For home entrance.',
    deliveryDate: '2024-09-15',
    price: 3300,
    status: 'Order Received',
    placedOn: '2024-07-12',
    referenceImage: null,
    memoryImage: null,
  },
];

export const STATUS_STEPS: OrderStatus[] = [
  'Order Received',
  'Materials Received',
  'In Progress',
  'Completed',
  'Shipped',
];

export const STATUS_COLORS: Record<OrderStatus, { bg: string; text: string; border: string }> = {
  'Order Received': { bg: '#EDF5FF', text: '#2563EB', border: '#BFDBFE' },
  'Materials Received': { bg: '#FFF7ED', text: '#C2610C', border: '#FED7AA' },
  'In Progress': { bg: '#FFF9EC', text: '#B45309', border: '#FDE68A' },
  'Completed': { bg: '#ECFDF5', text: '#059669', border: '#A7F3D0' },
  'Shipped': { bg: '#F5F3FF', text: '#7C3AED', border: '#DDD6FE' },
};

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Wedding Bridal Bouquet Preservation',
    category: 'Wedding',
    beforeEmoji: '💐',
    afterEmoji: '🖼️',
    beforeLabel: 'Fresh Bridal Flowers',
    afterLabel: 'Gold Resin Frame',
    colorAccent: '#C9A84C',
    gradientBefore: 'linear-gradient(135deg, #FFF0F5 0%, #FFD6E7 100%)',
    gradientAfter: 'linear-gradient(135deg, #F5EFE0 0%, #E8D5B0 100%)',
    description: 'White roses and orchids from a Kerala wedding, preserved in a 8×10 gold resin frame.',
    turnaround: '12–15 days',
    price: '₹4,300',
  },
  {
    id: 2,
    title: 'Newborn Baby Memory Frame',
    category: 'Baby',
    beforeEmoji: '👶',
    afterEmoji: '💎',
    beforeLabel: 'Hospital Keepsakes',
    afterLabel: 'Pastel Memory Frame',
    colorAccent: '#C084D4',
    gradientBefore: 'linear-gradient(135deg, #F0F0FF 0%, #E0D6F0 100%)',
    gradientAfter: 'linear-gradient(135deg, #F8F0FF 0%, #E8D0F8 100%)',
    description: 'Hospital ID band, first shoes, and an ultrasound photo preserved in pastel resin.',
    turnaround: '10–12 days',
    price: '₹3,300',
  },
  {
    id: 3,
    title: 'Gold Thali Chain Preservation',
    category: 'Wedding',
    beforeEmoji: '📿',
    afterEmoji: '✨',
    beforeLabel: 'Traditional Thali',
    afterLabel: 'Resin Preservation',
    colorAccent: '#D4A050',
    gradientBefore: 'linear-gradient(135deg, #FFF8E0 0%, #FFE8A0 100%)',
    gradientAfter: 'linear-gradient(135deg, #FAF5E0 0%, #EDE0B0 100%)',
    description: 'A sacred thali chain from a Tamil wedding preserved in 24K gold-tinted resin.',
    turnaround: '14–18 days',
    price: '₹5,000',
  },
  {
    id: 4,
    title: 'Custom Name Board — Home Décor',
    category: 'Name Board',
    beforeEmoji: '✏️',
    afterEmoji: '🏡',
    beforeLabel: 'Custom Design',
    afterLabel: 'Finished Name Board',
    colorAccent: '#5BA88A',
    gradientBefore: 'linear-gradient(135deg, #EFF8F4 0%, #C8E8D8 100%)',
    gradientAfter: 'linear-gradient(135deg, #EDF5F0 0%, #C0D8C8 100%)',
    description: 'Elegant "The Reddys" name board in white and teal resin, handcrafted for home entrance.',
    turnaround: '7–10 days',
    price: '₹3,000',
  },
  {
    id: 5,
    title: 'Anniversary Flower Frame',
    category: 'Special Occasion',
    beforeEmoji: '🌹',
    afterEmoji: '💝',
    beforeLabel: 'Anniversary Roses',
    afterLabel: 'Resin Heart Frame',
    colorAccent: '#D45A5A',
    gradientBefore: 'linear-gradient(135deg, #FFF0F0 0%, #FFD0D0 100%)',
    gradientAfter: 'linear-gradient(135deg, #FFF5F5 0%, #FFE0E0 100%)',
    description: 'Red roses from a 25th anniversary celebration preserved in a heart-shaped resin frame.',
    turnaround: '10–12 days',
    price: '₹4,000',
  },
  {
    id: 6,
    title: 'Baby Footprint Keepsake',
    category: 'Baby',
    beforeEmoji: '👣',
    afterEmoji: '🌟',
    beforeLabel: 'Newborn Footprint',
    afterLabel: 'Gold Keepsake Frame',
    colorAccent: '#C9A84C',
    gradientBefore: 'linear-gradient(135deg, #FFF9F0 0%, #FFE8C8 100%)',
    gradientAfter: 'linear-gradient(135deg, #FFF5E8 0%, #F0E0B8 100%)',
    description: 'Tiny newborn footprint cast preserved alongside the first lock of hair in gold resin.',
    turnaround: '8–10 days',
    price: '₹3,600',
  },
];
