import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              We're here to help you get started on your Quran learning journey. Whether you have questions about our courses, want to book a free demo, or need guidance for your child's Islamic education, feel free to reach out to our friendly team.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-green-600" />
                <span>+92 348 5094889</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-600" />
                <span>info@nooruleman.com</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">WhatsApp</h3>
              <Button 
                variant="outline" 
                className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                onClick={() => window.open("https://wa.me/923485094889", "_blank")}
              >
                Message Us on WhatsApp
              </Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://wa.me/923485094889", "_blank");
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;