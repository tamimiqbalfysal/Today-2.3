import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface Testimonial {
  name: string;
  company: string;
  image: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    company: 'Innovate Inc.',
    image: 'https://placehold.co/100x100.png',
    testimonial:
      'ApexCloud has been a game-changer for our infrastructure. The scalability and performance are unmatched.',
  },
  {
    name: 'Jane Smith',
    company: 'Quantum Solutions',
    image: 'https://placehold.co/100x100.png',
    testimonial:
      "The reliability of ApexCloud's services gives us peace of mind. Their support team is also top-notch.",
  },
  {
    name: 'Sam Wilson',
    company: 'Global Logistics',
    image: 'https://placehold.co/100x100.png',
    testimonial:
      "Migrating to ApexCloud was seamless. We've seen significant cost savings and performance improvements.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container bg-background py-20 sm:py-32"
    >
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-headline font-bold">Trusted by Enterprises</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          See what our customers have to say about their experience with
          ApexCloud.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="flex flex-col justify-between">
            <CardHeader>
              <CardContent>
                <p className="text-lg">"{t.testimonial}"</p>
              </CardContent>
            </CardHeader>
            <div className="flex items-center gap-4 p-6 pt-0">
              <Image
                src={t.image}
                width={60}
                height={60}
                alt={`${t.name}'s portrait`}
                className="rounded-full"
                data-ai-hint="person portrait"
              />
              <div>
                <CardTitle className="text-base font-medium">{t.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{t.company}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
