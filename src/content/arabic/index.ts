/* Uruk Academy — Arabic, 6th Preparatory (both branches share the book).
   Stage F: the complete book — the ministry's integrative print
   (الطبعة الرابعة 2025م, two parts, ten وحدات) reorganized by strand
   into FIFTEEN chapters, per research/arabic-structure.md: ten
   grammar chapters (الأساليب in the book's own order), four أدب
   chapters grouped as the book groups its texts, and one guided
   الإنشاء chapter. Deliberately OUT (documented in the dossier): no
   بلاغة part exists in this print or in the علمي paper; الاختصاص,
   أسلوب الشرط and الاستثناء belong to earlier grades / were deleted.
   Chapter files a1–a15 follow the exact standard of the Mathematics,
   Physics, Chemistry and Biology books (4 lessons + cards + mixed
   quiz + وزاري-style chapter exam each), and the capstone mirrors
   the verified Arabic paper frame (145 marks offered, ترك 45,
   210 minutes, قواعد/أدب/إنشاء split). */

import type { Unit } from '../types';
import { arabChapter1 } from './a1';
import { arabChapter2 } from './a2';
import { arabChapter3 } from './a3';
import { arabChapter4 } from './a4';
import { arabChapter5 } from './a5';
import { arabChapter6 } from './a6';
import { arabChapter7 } from './a7';
import { arabChapter8 } from './a8';
import { arabChapter9 } from './a9';
import { arabChapter10 } from './a10';
import { arabChapter11 } from './a11';
import { arabChapter12 } from './a12';
import { arabChapter13 } from './a13';
import { arabChapter14 } from './a14';
import { arabChapter15 } from './a15';

export { arabCapstone as arabicCapstone } from './capstone';

export const arabicChapters: Unit[] = [
  arabChapter1, arabChapter2, arabChapter3, arabChapter4, arabChapter5,
  arabChapter6, arabChapter7, arabChapter8, arabChapter9, arabChapter10,
  arabChapter11, arabChapter12, arabChapter13, arabChapter14, arabChapter15,
];
