"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Tutor {
  name: string;
  subject: string;
}

interface TutorsSectionProps {
  tutors: Tutor[];
}

export default function TutorsSection({ tutors }: TutorsSectionProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Find Your Perfect
          <span className="text-blue-600"> Tutor</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Browse our expert tutors and book sessions that fit your schedule
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutors.map((tutor: Tutor, index: number) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{tutor.name}</CardTitle>
              <CardDescription>Expert in {tutor.subject}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Available for sessions</span>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1">View Profile</Button>
                  <Button variant="outline" className="flex-1">Book Session</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {tutors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No tutors available at the moment.</p>
          <Button>Check back later</Button>
        </div>
      )}
    </div>
  );
}
