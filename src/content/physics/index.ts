/* Uruk Academy — Physics, 6th Preparatory (Scientific branch).
   Stage C: the complete book — NINE chapters of the revised (2025)
   ministry print, in which modern physics and special relativity are
   merged into one chapter (research/physics-structure.md). Chapter
   files ph1–ph9 follow the exact standard of the Mathematics book
   (4 lessons + law cards + mixed quiz + وزاري-style chapter exam each),
   and the capstone mirrors the real physics paper (145 marks offered,
   ترك 45, 180 minutes). */

import type { Unit } from '../types';
import { chapter1 } from './ph1';
import { chapter2 } from './ph2';
import { chapter3 } from './ph3';
import { chapter4 } from './ph4';
import { chapter5 } from './ph5';
import { chapter6 } from './ph6';
import { chapter7 } from './ph7';
import { chapter8 } from './ph8';
import { chapter9 } from './ph9';

export { physicsCapstone } from './capstone';

export const physicsChapters: Unit[] = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter9];
