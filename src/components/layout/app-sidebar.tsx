'use client';

import {
  BookOpenCheck,
  LayoutDashboard,
  BookCopy,
  MessageSquare,
  Settings,
  GraduationCap
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';

// تحديث الروابط لتشير إلى المسارات الفعلية (تأكدي من وجود هذه المجلدات في app)
const menuItems = [
  { href: '/dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
  { href: '/courses', label: 'كل الدورات', icon: BookCopy },
  { href: '/kids', label: 'مملكة الأطفال', icon: GraduationCap }, // أضفت هذا الرابط لأنه أساسي في مشروعك
  { href: '/messages', label: 'الرسائل', icon: MessageSquare },
  { href: '/settings', label: 'الإعدادات', icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          {/* تغيير الشعار ليكون متوافقاً مع الهوية الملكية للأكاديمية */}
          <BookOpenCheck className="size-6 text-yellow-500" />
          <span className="text-lg font-bold font-headline text-[#0d284e]">يلا مصري</span>
        </div>
      </SidebarHeader>

      <div className="flex-1 overflow-y-auto">
        <SidebarMenu className="p-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>

      <SidebarFooter>
        <Separator className="my-2" />
        <p className="text-[10px] text-sidebar-foreground/60 p-2 group-data-[collapsible=icon]:hidden font-sans">
          © 2025 Yalla Masry Academy
        </p>
      </SidebarFooter>
    </>
  );
}
