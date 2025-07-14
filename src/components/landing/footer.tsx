import { ApexCloudLogo } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between py-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <ApexCloudLogo className="h-6 w-6" />
          <span className="font-headline font-bold">ApexCloud</span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground sm:mt-0">
          &copy; {new Date().getFullYear()} ApexCloud. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
