'use client';

import {
  BookOpenCheck,
  LayoutDashboard,
  BookCopy,
  MessageSquare,
  Settings,
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

const menuItems = [
  { href: '/', label: 'لوحة التحكم', icon: LayoutDashboard },
  { href: '#', label: 'جميع الدورات', icon: BookCopy },
  { href: '#', label: 'الرسائل', icon: MessageSquare },
  { href: '#', label: 'الإعدادات', icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <BookOpenCheck className="size-6 text-sidebar-primary" />
          <span className="text-lg font-semibold font-headline text-gold-accent">Yalla Masry</span>
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
                  <span className="font-cairo">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </div>

      <SidebarFooter>
        <Separator className="my-2 opacity-20" />
        <p className="text-xs text-sidebar-foreground/60 p-2 group-data-[collapsible=icon]:hidden font-cairo">
          © 2025 Yalla Masry Academy
        </p>
      </SidebarFooter>
    </>
  );
}
