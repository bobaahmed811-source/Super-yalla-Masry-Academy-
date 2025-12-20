'use client';

import {
  Auth,
  signOut,
  updateProfile,
  User,
  UserInfo,
} from 'firebase/auth';

/**
 * تحديث بيانات الملف الشخصي دون تعطيل واجهة المستخدم.
 */
export function updateProfileNonBlocking(
  user: User,
  profile: Partial<UserInfo>,
  callback: (result: { success: boolean; error?: Error }) => void
): void {
  updateProfile(user, profile)
    .then(() => {
      callback({ success: true });
    })
    .catch((error) => {
      callback({ success: false, error });
    });
}

/**
 * تسجيل الخروج الفوري وتحديث الواجهة دون انتظار.
 */
export function initiateSignOut(
  auth: Auth,
  callback: () => void
): void {
  signOut(auth);
  // يتم استدعاء الـ callback فوراً لتحديث الحالة في المتصفح
  callback();
}
