'use client';

import { useEffect, useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations';
import { guideService } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GuideDetailModal } from '@/components/guide-detail-modal';
import { ChevronRight } from 'lucide-react';

interface Guide {
  _id: string;
  title: string;
  content: string;
  category: string;
  difficulty: string;
  author: string;
  read_time: number;
  createdAt: string;
}

export default function GuidesPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    'Getting Started',
    'Git & GitHub',
    'Contributing',
    'Best Practices',
  ];

  useEffect(() => {
    loadGuides();
  }, [selectedCategory]);

  const loadGuides = async () => {
    try {
      setLoading(true);
      const filters = selectedCategory ? { category: selectedCategory } : {};
      const data = await guideService.getAll(filters);
      setGuides(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err: any) {
      // Load sample guides on error
      setSampleGuides();
    } finally {
      setLoading(false);
    }
  };

  const setSampleGuides = () => {
    const sampleData: Guide[] = [
      {
        _id: '1',
        title: 'Getting Started with Git',
        content: 'Git is a distributed version control system that tracks changes in your code. Learn how to initialize a repository, stage changes, commit, and push to remote servers. Master the fundamental git workflows that every developer needs to know.',
        category: 'Git & GitHub',
        difficulty: 'Beginner',
        author: 'Tech Team',
        read_time: 8,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '2',
        title: 'Understanding Git Branching',
        content: 'Branches allow you to work on features independently. Learn how to create branches, switch between them, merge branches, and resolve conflicts. Understand branching strategies like Git Flow and GitHub Flow for professional development.',
        category: 'Git & GitHub',
        difficulty: 'Intermediate',
        author: 'Tech Team',
        read_time: 10,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '3',
        title: 'Fork, Clone, and Pull Request Guide',
        content: 'The complete workflow for contributing to open source projects. Learn how to fork a repository on GitHub, clone it to your local machine, make changes on a new branch, commit with meaningful messages, and submit a pull request for review.',
        category: 'Git & GitHub',
        difficulty: 'Beginner',
        author: 'Community Experts',
        read_time: 12,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '4',
        title: 'How to Make Your First Open Source Contribution',
        content: 'Step-by-step guide to your first open source contribution. Find beginner-friendly projects, understand the contribution guidelines, set up the development environment, make meaningful changes, and submit your first pull request.',
        category: 'Getting Started',
        difficulty: 'Beginner',
        author: 'OSS Mentors',
        read_time: 15,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '5',
        title: 'Git Commits: Writing Better Messages',
        content: 'Learn how to write clear, meaningful commit messages that help other developers understand your changes. Understand the conventional commits format, best practices for commit messages, and how good commits make code review easier.',
        category: 'Best Practices',
        difficulty: 'Beginner',
        author: 'Code Quality Team',
        read_time: 6,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '6',
        title: 'Code Review: Giving and Receiving Feedback',
        content: 'Master the art of constructive code reviews. Learn how to review pull requests effectively, provide helpful feedback, suggest improvements gracefully, and respond to reviews professionally as a contributor.',
        category: 'Contributing',
        difficulty: 'Intermediate',
        author: 'Senior Developers',
        read_time: 10,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '7',
        title: 'Understanding Pull Requests',
        content: 'Pull requests are the heart of collaborative development. Learn how to create a pull request, write a good PR description, handle feedback, make requested changes, and merge your code into the main branch.',
        category: 'Git & GitHub',
        difficulty: 'Intermediate',
        author: 'Dev Community',
        read_time: 9,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '8',
        title: 'Setting Up Your Development Environment',
        content: 'Get your development environment ready for open source contributions. Learn how to install Git, configure your GitHub account, set up your IDE, and configure git with your user information for proper attribution.',
        category: 'Getting Started',
        difficulty: 'Beginner',
        author: 'Setup Guides',
        read_time: 7,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '9',
        title: 'Git Rebase vs Merge: When to Use Each',
        content: 'Understanding the differences between rebasing and merging. Learn when to use rebase for a clean history and when to use merge for preserving the complete history. Master advanced git workflows for professional teams.',
        category: 'Best Practices',
        difficulty: 'Advanced',
        author: 'Git Experts',
        read_time: 11,
        createdAt: new Date().toISOString(),
      },
      {
        _id: '10',
        title: 'Contributing to Large Open Source Projects',
        content: 'Guidelines for contributing to established open source projects. Learn how to navigate complex codebases, follow project conventions, handle dependencies, run tests, and work within large community-driven projects.',
        category: 'Contributing',
        difficulty: 'Advanced',
        author: 'OSS Veterans',
        read_time: 14,
        createdAt: new Date().toISOString(),
      },
    ];
    
    const filtered = selectedCategory 
      ? sampleData.filter(g => g.category === selectedCategory)
      : sampleData;
    setGuides(filtered);
  }

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <FadeIn>
          <section className="px-6 py-20 bg-gradient-to-b from-primary/5 to-background">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-5xl font-bold mb-4">Learning Guides</h1>
              <p className="text-xl text-foreground/60">
                Learn everything you need to know about open source contribution
              </p>
            </div>
          </section>
        </FadeIn>

        <section className="px-6 py-12 max-w-6xl mx-auto">
          {/* Category Filter */}
          <FadeIn delay={0.2}>
            <div className="mb-8 flex gap-2 flex-wrap">
              <Button
                variant={selectedCategory === '' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('')}
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </FadeIn>
                </Button>
              ))}
            </div>
          </FadeIn>

          {loading ? (
            <div className="text-center py-20">
              <p className="text-foreground/60">Loading guides...</p>
            </div>
          ) : guides.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-foreground/60">No guides found in this category. Try selecting a different category.</p>
            </div>
          ) : (
            <StaggerContainer staggerDelay={0.1}>
              <div className="grid gap-6 md:grid-cols-2">
                {guides.map((guide) => (
                  <StaggerItem key={guide._id}>
                    <Card className="hover:shadow-lg transition-shadow hover:border-primary/50 flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-xl mb-2">
                              {guide.title}
                            </CardTitle>
                            <div className="flex gap-2 flex-wrap">
                              <Badge variant="outline">{guide.category}</Badge>
                              <Badge className={getDifficultyColor(guide.difficulty)}>
                                {guide.difficulty}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col">
                        <p className="text-foreground/60 text-sm mb-4 line-clamp-3">
                          {guide.content.substring(0, 150)}...
                        </p>

                        <div className="mt-auto pt-4 border-t flex items-center justify-between">
                          <div className="text-xs text-foreground/60 space-y-1">
                            <p>By {guide.author}</p>
                            <p>📖 {guide.read_time} min read</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary/80"
                            onClick={() => {
                              setSelectedGuide(guide);
                              setIsModalOpen(true);
                            }}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          )}
        </section>
      </main>

      <GuideDetailModal 
        guide={selectedGuide} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
    </div>
  );
}
