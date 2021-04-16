import { ROUTE } from './Route';
import { COLOR } from './Color';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from './Layout';

// Temporary mock data
export const LIST_COMPETITIONS = [
  {
    title: 'Radovljica',
    compType: 'Boulder',
    startDate: new Date(),
    location: 'Kranjska cesta 27, 4240 Radovljica',
  },
  {
    title: 'Kamnik',
    compType: 'Lead',
    startDate: new Date(),
    location: 'Kamniska ulica 42, Kamnik',
  },
  {
    title: 'Jesenice',
    compType: 'Speed',
    startDate: new Date(),
    location: 'Testna ulica, Jesenice',
  },
  {
    title: 'Kranj',
    compType: 'Lead',
    startDate: new Date(),
    location: 'Cesta svobode 1, Kranj',
  },
];

export { ROUTE, COLOR, FOOTER_HEIGHT, HEADER_HEIGHT };
