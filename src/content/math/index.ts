/* Uruk Academy — Mathematics, 6th Preparatory (Scientific branch).
   Stage A: the complete book. Chapter files m1–m6 follow the exact
   standard of the English units (4 lessons + law cards + mixed quiz +
   وزاري-style chapter exam each), authored from the verified official
   structure documented in CONTENT.md and research/math-structure.md.
   The capstone mirrors the real ministry paper (see capstone.ts). */

import type { Unit } from '../types';
import { chapter1 } from './m1';
import { chapter2 } from './m2';
import { chapter3 } from './m3';
import { chapter4 } from './m4';
import { chapter5 } from './m5';
import { chapter6 } from './m6';

export { mathCapstone } from './capstone';

export const mathChapters: Unit[] = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6];
