import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <Card className="bg-transparent border-none text-white">
            <CardHeader className="px-0">
              <CardTitle className="text-2xl font-bold mb-4">TutorHub</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-gray-300 mb-4">
                Connecting students with expert tutors for personalized learning experiences. 
                Achieve your academic goals with our comprehensive tutoring platform.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-transparent border-none text-white">
            <CardHeader className="px-0">
              <CardTitle className="text-lg font-semibold mb-4">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <ul className="space-y-2">
                <li>
                  <Link href="/tutors" className="text-gray-300 hover:text-white transition-colors">
                    Find Tutors
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-transparent border-none text-white">
            <CardHeader className="px-0">
              <CardTitle className="text-lg font-semibold mb-4">Support</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-300 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-transparent border-none text-white">
            <CardHeader className="px-0">
              <CardTitle className="text-lg font-semibold mb-4">Newsletter</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <p className="text-gray-300 mb-4">
                Subscribe to get updates on new tutors and features.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="text-center text-gray-300">
          <p>&copy; 2024 TutorHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
