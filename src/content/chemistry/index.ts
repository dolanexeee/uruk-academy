/* Uruk Academy — Chemistry, 6th Preparatory (Scientific branch).
   Stage D: the complete book — EIGHT chapters of the current ministry
   print (10th edition 2024; structure verified in
   research/chemistry-structure.md: مقدمة «ثمانية فصول», no print merger
   between the 2023 and 2024 prints). Chapter files k1–k8 follow the
   exact standard of the Mathematics and Physics books (4 lessons +
   law/definition cards + mixed quiz + وزاري-style chapter exam each),
   and the capstone mirrors the real chemistry paper's verified frame
   (145 marks offered, ترك 45, 180 minutes, questions with branches).
   Chemical equations render via KaTeX's mhchem extension as \ce{...}. */

import type { Unit } from '../types';
import { chemChapter1 } from './k1';
import { chemChapter2 } from './k2';
import { chemChapter3 } from './k3';
import { chemChapter4 } from './k4';
import { chemChapter5 } from './k5';
import { chemChapter6 } from './k6';
import { chemChapter7 } from './k7';
import { chemChapter8 } from './k8';

export { chemCapstone as chemistryCapstone } from './capstone';

export const chemistryChapters: Unit[] = [chemChapter1, chemChapter2, chemChapter3, chemChapter4, chemChapter5, chemChapter6, chemChapter7, chemChapter8];
