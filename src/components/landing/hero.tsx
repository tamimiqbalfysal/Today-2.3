import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-headline font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Scalable
            </span>{' '}
            Cloud for the
          </h1>{' '}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Modern Enterprise
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          ApexCloud provides robust, secure, and scalable cloud infrastructure
          designed to power your most critical applications and workloads.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" asChild>
            <Link href="#contact">Request a Consultation</Link>
          </Button>
          <Button variant="outline" className="w-full md:w-1/3" asChild>
            <Link href="#products">Explore Products</Link>
          </Button>
        </div>
      </div>

      <div className="z-10">
        <Image
          src="https://placehold.co/600x400.png"
          width={600}
          height={400}
          alt="Cloud infrastructure illustration"
          className="rounded-lg shadow-lg"
          data-ai-hint="cloud infrastructure abstract"
        />
      </div>

      <div className="absolute inset-0 z-0 h-full w-full bg-background [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />
    </section>
  );
}
