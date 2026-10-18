/* Uruk Academy — Biology, 6th Preparatory (Scientific branch).
   Stage E: the complete book — FIVE chapters of the current ministry
   print (228 pages, the reduced print; structure verified from the
   book's own محتويات الكتاب and per-chapter contents in
   research/biology-structure.md: الوراثة الكمية deleted, the detailed
   amphioxus development deleted, Ch.3's deleted subsections excluded).
   Chapter files b1–b5 follow the exact standard of the Mathematics,
   Physics and Chemistry books (4 lessons + definition cards + mixed
   quiz + وزاري-style chapter exam each), and the capstone mirrors the
   real biology paper's verified frame (145 marks offered, ترك 45,
   180 minutes, numbered questions with branches). */

import type { Unit } from '../types';
import { bioChapter1 } from './b1';
import { bioChapter2 } from './b2';
import { bioChapter3 } from './b3';
import { bioChapter4 } from './b4';
import { bioChapter5 } from './b5';

export { bioCapstone as biologyCapstone } from './capstone';

export const biologyChapters: Unit[] = [bioChapter1, bioChapter2, bioChapter3, bioChapter4, bioChapter5];
