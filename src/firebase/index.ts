'use client';

// هذا الملف يجمع كل خدمات Firebase لتسهيل استدعائها في المشروع
export * from './client';
export * from './provider';
export * from './hooks';
export * from './firestore/use-collection';
export * from './firestore/use-document';
export * from './firestore/use-memo-firebase';

// ملاحظة: تم استبعاد non-blocking-login لتجنب التعارض الدائري (Circular Dependency)
