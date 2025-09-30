'use client';

import { usePathname } from 'next/navigation';
import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Logo } from '@/components/logo';
import {
  LayoutDashboard,
  Users,
  GalleryHorizontal,
  MessageSquare,
  BookOpen,
  CalendarDays,
  DollarSign,
  HeartHandshake,
} from 'lucide-react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/clientes', label: 'Clientes', icon: Users },
  { href: '/experiencias', label: 'Experiencias', icon: HeartHandshake },
  { href: '/galeria', label: 'Galería', icon: GalleryHorizontal },
  { href: '/consultas', label: 'Consultas', icon: MessageSquare },
  { href: '/articulos', label: 'Artículos', icon: BookOpen },
  { href: '/eventos', 'label': 'Eventos', icon: CalendarDays },
  { href: '/precios', label: 'Precios', icon: DollarSign },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <Link href={link.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === link.href}
                  tooltip={link.label}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </>
  );
}
