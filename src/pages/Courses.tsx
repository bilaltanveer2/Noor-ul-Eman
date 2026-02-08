import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CoursesPage = () => {
  const courses = [
    {
      title: "Quran Recitation",
      description: "Learn recitation/Nazra with proper pronunciation in a calm and supportive learning environment."
    },
    {
      title: "Tajweed Rules",
      description: "Understand and apply Tajweed rules step by step to recite the Quran accurately and beautifully."
    },
    {
      title: "Hifz-ul-Quran",
      description: "Structured memorization program with regular revision, guidance, and individual attention."
    },
    {
      title: "Quran Translation & Tafsir",
      description: "Understand the meaning and explanation of Quranic verses for reflection and practical guidance in daily life."
    },
    {
      title: "Quranic Stories & Background of Surahs",
      description: "Explore Quranic stories and the background of Surahs to build understanding, connection, and love for the Quran."
    },
    {
      title: "Arabic Language (For Non-Native Speakers)",
      description: "Learn Arabic reading, speaking, and comprehension along with basic grammar in a simple and structured manner."
    }
  ];

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                  onClick={() => window.open("https://wa.me/923485094889", "_blank")}
                >
                  Book Free Demo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;