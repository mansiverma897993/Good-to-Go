'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { programService } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, ExternalLink } from 'lucide-react';

interface Program {
  _id: string;
  name: string;
  description: string;
  type: string;
  start_date: string;
  end_date: string;
  participants: number;
  image_url?: string;
  url: string;
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPrograms();
  }, []);

  const loadPrograms = async () => {
    try {
      setLoading(true);
      const data = await programService.getAll();
      setPrograms(data);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Failed to load programs');
      console.error('Error loading programs:', err);
    } finally {
      setLoading(false);
    }
  };

  const getProgramColor = (type: string) => {
    const colors: { [key: string]: string } = {
      GSOC: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      SWOC: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      Hacktoberfest:
        'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      GSSOC: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'Summer of Bitcoin':
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      Outreachy: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isActive = (start: string, end: string) => {
    const now = new Date();
    return new Date(start) <= now && now <= new Date(end);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <FadeIn>
          <section className="px-6 py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-4">Opportunity Programs</h1>
              <p className="text-xl text-foreground/60">
                Participate in major open source programs and internships
              </p>
            </div>
          </section>
        </FadeIn>

        <section className="px-6 py-12 max-w-6xl mx-auto">
          {error && (
            <FadeIn>
              <Card className="bg-red-50 border-red-200 dark:bg-red-950 dark:border-red-800">
                <CardContent className="pt-6">
                  <p className="text-red-700 dark:text-red-300">{error}</p>
                </CardContent>
              </Card>
            </FadeIn>
          )}

          {loading ? (
            <div className="text-center py-20">
              <p className="text-foreground/60">Loading programs...</p>
            </div>
          ) : programs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/60">No programs found</p>
            </div>
          ) : (
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {programs.map((program) => {
                  const active = isActive(program.start_date, program.end_date);
                  return (
                    <StaggerItem key={program._id}>
                      <Card className="hover:shadow-lg transition-shadow hover:border-primary/50 flex flex-col h-full relative overflow-hidden">
                        {active && (
                          <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
                            Active
                          </div>
                        )}

                        {program.image_url && (
                          <div className="w-full h-40 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                            <img
                              src={program.image_url}
                              alt={program.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                        )}

                        <CardHeader>
                          <CardTitle className="text-lg mb-2">
                            {program.name}
                          </CardTitle>
                          <Badge
                            className={getProgramColor(program.type)}
                            variant="outline"
                          >
                            {program.type}
                          </Badge>
                        </CardHeader>

                        <CardContent className="flex-1 flex flex-col">
                          <p className="text-foreground/60 text-sm mb-4 flex-1">
                            {program.description}
                          </p>

                          <div className="space-y-3 pt-4 border-t">
                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                              <Calendar className="w-4 h-4" />
                              <span>
                                {formatDate(program.start_date)} -{' '}
                                {formatDate(program.end_date)}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-foreground/60">
                              <Users className="w-4 h-4" />
                              <span>{program.participants?.toLocaleString()} participants</span>
                            </div>

                            <a
                              href={program.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="w-full mt-4" variant="default">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Learn More
                              </Button>
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
