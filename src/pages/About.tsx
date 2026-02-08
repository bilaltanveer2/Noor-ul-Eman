import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About Noor-ul-Eman</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Noor-ul-Eman is an online Quran learning platform dedicated to helping students build a strong connection with the Quran through correct recitation, understanding, and Islamic character building. Our classes are designed for children, women, and adults in a calm and supportive online environment.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to provide quality Islamic education to Muslims worldwide, making Quran learning accessible and enjoyable for all ages and backgrounds. We strive to create a nurturing environment where students can develop a deep understanding and love for the Quran.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Approach</h2>
          <p className="mb-6">
            At Noor-ul-Eman, we use a gentle and supportive teaching style with qualified female teachers who specialize in working with students of all ages. Our online classes offer flexible timing with one-to-one and small group options to ensure personalized attention.
          </p>
          
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              className="border-green-500 text-green-600 hover:bg-green-500 hover:text-white px-8 py-6 text-lg"
              onClick={() => window.open("https://wa.me/923485094889", "_blank")}
            >
              Book Free Demo
            </Button>
            <p className="text-sm text-muted-foreground mt-3">
              One Free Trial Class Available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;