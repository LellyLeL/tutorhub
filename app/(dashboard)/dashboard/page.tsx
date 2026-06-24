'use client';

import { verifyAuth } from './protected'; // Note: Ensure this utility works client-side or adapt as a server component wrapper if needed
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Search, 
  Calendar, 
  UserCircle, 
  Users, 
  LogOut,
  GraduationCap,
  ChevronRight,
  History
} from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Mock user session context for UI rendering - hook this back to your actual auth session provider
  const user = {
    role: 'student', // Toggle to 'tutor' to test the sidebar layout switcher
    email: 'student@tutorhub.in'
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-900 selection:bg-blue-500/10 selection:text-blue-600">
      
      {/* 1. TOP NAVBAR (Locked) */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            
            {/* Platform Branding */}
            <Link href="/dashboard" className="flex items-center gap-2.5 group">
              <div className="bg-blue-600 p-2 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-200 group-hover:scale-105">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">TutorHub</span>
            </Link>

            {/* Profile Status & Action */}
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end text-right">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md mb-0.5">
                  {user.role}
                </span>
                <span className="text-sm font-medium text-slate-500">{user.email}</span>
              </div>
              <div className="h-8 w-px bg-slate-200/60 mx-1" />
              <Link
                href="/api/auth/logout" 
                className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
                title="Log Out"
              >
                <LogOut className="w-5 h-5" />
              </Link>
            </div>
            
          </div>
        </div>
      </nav>

      {/* 2. BODY LAYOUT WRAPPER */}
      <div className="flex flex-1 max-w-[1600px] mx-auto w-full px-6">
        
        {/* LEFT SIDEBAR (Locked Panel) */}
        <aside className="w-64 hidden lg:block py-8 border-r border-slate-200/50 pr-6 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.15em] mb-4 px-3">
              Navigation
            </p>
            
            {/* Core Overview */}
            <SidebarItem 
              href="/dashboard" 
              icon={LayoutDashboard} 
              label="Overview" 
              active={pathname === '/dashboard'} 
            />

            {/* TUTOR SIDEBAR TABS */}
            {user.role === 'tutor' && (
              <>
                <SidebarItem 
                  href="/dashboard/tutor-profile" 
                  icon={UserCircle} 
                  label="Tutor Profile" 
                  active={pathname === '/dashboard/tutor-profile'}
                />
                <SidebarItem 
                  href="/dashboard/tutor/students" 
                  icon={Users} 
                  label="My Students" 
                  active={pathname === '/dashboard/tutor/students'}
                />
              </>
            )}

            {/* STUDENT SIDEBAR TABS (Matches your Uber/Rapido vision) */}
            {user.role === 'student' && (
              <>
                <SidebarItem 
                  href="/dashboard/student/live-search" 
                  icon={Search} 
                  label="Find Tutors Live" 
                  active={pathname === '/dashboard/student/live-search'}
                />
                <SidebarItem 
                  href="/dashboard/student/sessions" 
                  icon={Calendar} 
                  label="Class Schedule" 
                  active={pathname === '/dashboard/student/sessions'}
                />
                <SidebarItem 
                  href="/dashboard/student/history" 
                  icon={History} 
                  label="Lesson History" 
                  active={pathname === '/dashboard/student/history'}
                />
                <SidebarItem 
                  href="/dashboard/student/profile" 
                  icon={UserCircle} 
                  label="My Profile" 
                  active={pathname === '/dashboard/student/profile'}
                />
              </>
            )}
          </div>
        </aside>

        {/* 3. DYNAMIC CONTENT AREA (Swaps component layout according to tabs) */}
        <main className="flex-1 py-8 lg:pl-10 min-w-0">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}

{/* Sub-component for individual Navigation items */}
function SidebarItem({ 
  href, 
  icon: Icon, 
  label, 
  active 
}: { 
  href: string; 
  icon: any; 
  label: string; 
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-200 border
        ${active 
          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10 border-blue-600 translate-x-1' 
          : 'bg-transparent text-slate-600 hover:bg-white hover:shadow-sm hover:shadow-slate-100 border-transparent hover:border-slate-100 hover:translate-x-0.5'
        }`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg transition-all duration-300
          ${active 
            ? 'bg-blue-700 text-white' 
            : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'
          }`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <span className={`text-sm font-semibold transition-colors
          ${active ? 'text-white' : 'text-slate-600 group-hover:text-slate-900'}`}
        >
          {label}
        </span>
      </div>
      <ChevronRight className={`w-3.5 h-3.5 transition-all duration-200
        ${active 
          ? 'text-white/80 opacity-100' 
          : 'text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
        }`} 
      />
    </Link>
  );
}