import {Hero} from './hero';

export const HEROES: Hero[] = [
  'Mr. Nice',
  'Bitch',
  'Bombasto',
  'Celeritas',
  'Magneta',
  'RubberMan',
  'Dynama',
  'Dr IQ',
  'Magma',
  'Tornado'
].map((hero, idx) => {
  new Hero(idx + 11, hero);
});
