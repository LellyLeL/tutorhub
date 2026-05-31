"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type Props = {
  title: string;
  subtitle: string;
  onSelect: (role: "student" | "tutor") => void;
};

export function RolePicker({ title, subtitle, onSelect }: Props) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
        <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card
          className="min-h-[200px] cursor-pointer bg-white shadow-sm transition-all hover:border-blue-600 hover:shadow-md"
          onClick={() => onSelect("student")}
        >
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <CardTitle className="text-2xl text-gray-900">Student</CardTitle>
            <CardDescription className="text-gray-600">
              Find tutors and book sessions
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="min-h-[200px] cursor-pointer bg-white shadow-sm transition-all hover:border-blue-600 hover:shadow-md"
          onClick={() => onSelect("tutor")}
        >
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <CardTitle className="text-2xl text-gray-900">Tutor</CardTitle>
            <CardDescription className="text-gray-600">
              Manage your profile and sessions
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}