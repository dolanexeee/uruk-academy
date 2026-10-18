/* Uruk Academy — curriculum map.
   Phase 1 ships ONE live subject (English, 6th Preparatory) with Unit One
   complete. Everything not built is badged honestly and is non-navigable. */

import type { Subject } from './types';
import { unit1 } from './unit1';

export const subjects: Subject[] = [
  {
    id: 'en6',
    titleAr: 'اللغة الإنجليزية',
    titleEn: 'English for Iraq',
    grade: 'السادس الإعدادي',
    status: 'live',
    blurb: 'منهج «English for Iraq» للسادس الإعدادي: قراءة وقواعد ومفردات وامتحانات بأسلوب الوزاري. الوحدة الأولى كاملة الآن، وبقية الوحدات تُبنى تباعًا.',
    units: [
      { number: 1, titleAr: 'سأظلّ فخورةً بك دائمًا — الصحة والطوارئ', titleEn: "I'll always be proud of him", status: 'live' },
      { number: 2, titleAr: 'تكنولوجيا الأمن', titleEn: 'Security Technology', status: 'soon' },
      { number: 3, titleAr: 'المترجم الفوري في المؤتمرات', titleEn: 'Conference Interpreter', status: 'soon' },
      { number: 4, titleAr: 'وحدة مراجعة', titleEn: 'Revision', status: 'revision' },
      { number: 5, titleAr: 'لماذا العطلات مهمة جدًا؟', titleEn: 'Why are holidays so important?', status: 'soon' },
      { number: 6, titleAr: 'الوحدة السادسة', status: 'soon' },
      { number: 7, titleAr: 'الوحدة السابعة', status: 'soon' },
      { number: 8, titleAr: 'وحدة مراجعة', titleEn: 'Revision', status: 'revision' },
    ],
  },
  { id: 'math6', titleAr: 'الرياضيات', titleEn: 'Mathematics', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'phys6', titleAr: 'الفيزياء', titleEn: 'Physics', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'chem6', titleAr: 'الكيمياء', titleEn: 'Chemistry', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'bio6', titleAr: 'الأحياء', titleEn: 'Biology', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
  { id: 'ar6', titleAr: 'اللغة العربية', titleEn: 'Arabic', grade: 'السادس الإعدادي', status: 'soon', blurb: '', units: [] },
];

export const liveUnit = unit1;

export const ABOUT_SOURCES = `محتوى هذه الأكاديمية مُشتق من الكتاب المدرسي الرسمي «English for Iraq» للصف السادس الإعدادي، الصادر عن وزارة التربية في جمهورية العراق. أُعيدت صياغة الدروس والشروحات والملخصات بكلماتنا الخاصة كدروس تفاعلية أصلية، ولم تُنسخ نصوص الكتاب حرفيًا. أما أسلوب الأسئلة فيتبع نماذج الأسئلة المنشورة من الوزارة. أكاديمية أوروك مشروع تعليمي مفتوح المصدر لا يتبع لوزارة التربية.`;
