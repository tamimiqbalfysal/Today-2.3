'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { generateHeadline } from '@/app/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Wand2 } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Generating...' : 'Generate Headline'}
      {!pending && <Wand2 className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export default function AiHeadlineTool() {
  const { toast } = useToast();
  const initialState = { headline: null, error: null };
  const [state, formAction] = useFormState(generateHeadline, initialState);

  useEffect(() => {
    if (state.error?._form) {
      toast({
        title: 'Error',
        description: state.error._form.join(', '),
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="ai-tool" className="container bg-secondary/50 py-20 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-headline font-bold">
            A/B Test Your Messaging
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Use our AI to generate compelling headlines based on your core
            business values.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <form action={formAction} className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="businessValues">Business Values</Label>
                <Textarea
                  id="businessValues"
                  name="businessValues"
                  placeholder="e.g., We provide fast, reliable, and secure cloud hosting for enterprise clients with 24/7 support."
                  required
                />
                {state.error?.businessValues && (
                  <p className="text-sm font-medium text-destructive">
                    {state.error.businessValues.join(', ')}
                  </p>
                )}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>

        {state.headline && (
          <Card className="mt-8 animate-fade-in">
            <CardHeader>
              <CardTitle>Suggested Headline:</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-medium">{state.headline}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
