import { Button } from "@/components/ui/button";

const DemoPage = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Book Your Free Demo</h1>
        
        <div className="prose prose-lg max-w-none bg-white p-8 rounded-lg shadow-md">
          <p className="text-lg mb-6">
            Ready to begin your Quran learning journey with Noor-ul-Eman? Book a free demo class and experience our supportive teaching environment firsthand. Discover how our qualified teachers can help you or your child connect with the Quran through proper recitation, understanding, and Islamic character building.
          </p>
          
          <div className="my-8 p-6 bg-green-50 rounded-lg border border-green-200">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Benefits of Our Demo Class</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Experience our teaching methodology firsthand</li>
              <li>Meet our qualified and experienced teachers</li>
              <li>Assess the perfect fit for your learning needs</li>
              <li>Ask questions and clarify doubts</li>
              <li>Experience our gentle and supportive teaching style</li>
            </ul>
          </div>
          
          <div className="text-center my-12">
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-6 text-lg"
              onClick={() => window.open("https://wa.me/923485094889", "_blank")}
            >
              Book Free Demo Now
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              One Free Trial Class Available. No commitment required.
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">What to Expect in Your Demo Class</h2>
          <p className="mb-4">
            During your free demo class, you'll experience a personalized session tailored to your current level and learning goals. Our teacher will assess your current skills, introduce our teaching methodology, and show you how our structured approach helps students of all ages connect with the Quran.
          </p>
          
          <p>
            Whether you're a beginner looking to learn basic recitation or an intermediate student wanting to improve your Tajweed skills, our demo class will give you a clear understanding of how Noor-ul-Eman can support your Quran learning journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;