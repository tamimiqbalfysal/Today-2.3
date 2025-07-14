import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Cloud, Database, Server } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  icon: JSX.Element;
  price: string;
}

const products: Product[] = [
  {
    title: 'Elastic Compute',
    description:
      'Dynamically scale your computing resources to meet demand. Pay only for what you use.',
    icon: <Cloud className="h-8 w-8 text-accent" />,
    price: 'Starting at $0.05/hr',
  },
  {
    title: 'Managed Databases',
    description:
      'Fully managed SQL and NoSQL databases with automated backups, scaling, and security.',
    icon: <Database className="h-8 w-8 text-accent" />,
    price: 'Starting at $15/mo',
  },
  {
    title: 'Global CDN',
    description:
      'Deliver your content faster to users worldwide with our low-latency content delivery network.',
    icon: <Server className="h-8 w-8 text-accent" />,
    price: 'Starting at $0.08/GB',
  },
];

export default function Products() {
  return (
    <section id="products" className="container py-20 sm:py-32">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-headline font-bold">Top Products</h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Explore our suite of cloud services designed for performance and
          reliability.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product.title} className="flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">
                {product.title}
              </CardTitle>
              {product.icon}
            </CardHeader>
            <CardContent className="flex flex-1 flex-col justify-between">
              <p className="text-muted-foreground">{product.description}</p>
              <div className="mt-4">
                <Badge variant="outline">{product.price}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
