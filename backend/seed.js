import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './src/models/Project.js';
import Issue from './src/models/Issue.js';
import Guide from './src/models/Guide.js';
import Program from './src/models/Program.js';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/gtg-database';
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const seedDatabase = async () => {
  try {
    // Clear existing data
    await Project.deleteMany({});
    await Issue.deleteMany({});
    await Guide.deleteMany({});
    await Program.deleteMany({});

    console.log('Cleared existing data');

    // Seed Programs
    const programs = await Program.insertMany([
      {
        name: 'Google Summer of Code 2024',
        description: 'The largest open source internship program',
        type: 'GSOC',
        start_date: new Date('2024-05-01'),
        end_date: new Date('2024-08-26'),
        participants: 50000,
        url: 'https://summerofcode.withgoogle.com/',
      },
      {
        name: 'Hacktoberfest 2024',
        description: 'Celebrate open source every October',
        type: 'Hacktoberfest',
        start_date: new Date('2024-10-01'),
        end_date: new Date('2024-10-31'),
        participants: 100000,
        url: 'https://hacktoberfest.com/',
      },
    ]);

    console.log(`Created ${programs.length} programs`);

    // Seed Projects
    const projects = await Project.insertMany([
      {
        name: 'React',
        description: 'A JavaScript library for building user interfaces with JSX',
        url: 'https://github.com/facebook/react',
        github_url: 'https://github.com/facebook/react',
        language: ['JavaScript', 'TypeScript'],
        stars: 200000,
        forks: 40000,
        contributors: 1500,
        difficulty_level: 'Advanced',
        category: 'Frontend',
        is_featured: true,
        program_id: programs[0]._id,
      },
      {
        name: 'Next.js',
        description: 'The React Framework for Production',
        url: 'https://github.com/vercel/next.js',
        github_url: 'https://github.com/vercel/next.js',
        language: ['TypeScript', 'JavaScript'],
        stars: 120000,
        forks: 25000,
        contributors: 800,
        difficulty_level: 'Intermediate',
        category: 'Frontend',
        is_featured: true,
      },
      {
        name: 'Vue.js',
        description: 'Progressive JavaScript framework',
        url: 'https://github.com/vuejs/vue',
        github_url: 'https://github.com/vuejs/vue',
        language: ['TypeScript', 'JavaScript'],
        stars: 200000,
        forks: 30000,
        contributors: 400,
        difficulty_level: 'Intermediate',
        category: 'Frontend',
        is_featured: false,
      },
      {
        name: 'Node.js',
        description: 'JavaScript runtime built on Chromes V8 engine',
        url: 'https://github.com/nodejs/node',
        github_url: 'https://github.com/nodejs/node',
        language: ['C++', 'JavaScript'],
        stars: 100000,
        forks: 25000,
        contributors: 2000,
        difficulty_level: 'Advanced',
        category: 'Backend',
        is_featured: true,
      },
    ]);

    console.log(`Created ${projects.length} projects`);

    // Seed Issues
    const issues = await Issue.insertMany([
      {
        project_id: projects[0]._id,
        title: 'Add TypeScript support for React hooks',
        description: 'Improve type safety for React hooks API',
        difficulty: 'Good First Issue',
        status: 'Open',
        labels: ['enhancement', 'typescript', 'hooks'],
        required_skills: ['TypeScript', 'React'],
        comments_count: 5,
        reactions_count: 10,
      },
      {
        project_id: projects[0]._id,
        title: 'Fix memory leak in component cleanup',
        description: 'There seems to be a memory leak when components unmount',
        difficulty: 'Bug',
        status: 'Open',
        labels: ['bug', 'memory', 'critical'],
        required_skills: ['JavaScript', 'React', 'Performance'],
        comments_count: 8,
        reactions_count: 15,
      },
      {
        project_id: projects[1]._id,
        title: 'Improve Next.js documentation for App Router',
        description: 'Add more examples and clarify migration path',
        difficulty: 'Good First Issue',
        status: 'Open',
        labels: ['documentation', 'app-router'],
        required_skills: ['Writing', 'Next.js'],
        comments_count: 3,
        reactions_count: 5,
      },
      {
        project_id: projects[1]._id,
        title: 'Add support for dynamic imports in middleware',
        description: 'Enable dynamic imports in Next.js middleware',
        difficulty: 'Feature',
        status: 'In Progress',
        labels: ['feature', 'middleware', 'enhancement'],
        required_skills: ['TypeScript', 'Node.js'],
        comments_count: 10,
        reactions_count: 20,
      },
      {
        project_id: projects[2]._id,
        title: 'Improve error messages for template parsing',
        description: 'Make error messages more helpful and descriptive',
        difficulty: 'Help Wanted',
        status: 'Open',
        labels: ['error-handling', 'parser'],
        required_skills: ['JavaScript'],
        comments_count: 2,
        reactions_count: 5,
      },
    ]);

    console.log(`Created ${issues.length} issues`);

    // Seed Guides
    const guides = await Guide.insertMany([
      {
        title: 'Getting Started with Open Source',
        content: `# Getting Started with Open Source

Open source contribution is a great way to improve your skills and contribute to the community.

## Steps to Get Started:
1. Find a project you love
2. Read the contributing guidelines
3. Set up the development environment
4. Make your first contribution
5. Submit a pull request

## Tips:
- Start with "Good First Issue" labels
- Read existing issues and discussions
- Ask for help if needed
- Be respectful and follow the code of conduct`,
        category: 'Getting Started',
        difficulty: 'Beginner',
        author: 'Community',
        read_time: 5,
      },
      {
        title: 'Git & GitHub Workflow',
        content: `# Git & GitHub Workflow

## Essential Git Commands:
- \`git clone\` - Clone a repository
- \`git branch\` - Create a new branch
- \`git add\` - Stage changes
- \`git commit\` - Commit changes
- \`git push\` - Push to remote

## Pull Request Process:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Commit with clear messages
5. Push to your fork
6. Create a pull request`,
        category: 'Git & GitHub',
        difficulty: 'Beginner',
        author: 'Community',
        read_time: 8,
      },
      {
        title: 'Code Review Best Practices',
        content: `# Code Review Best Practices

## For Reviewers:
- Be respectful and constructive
- Ask questions instead of demanding changes
- Acknowledge good work
- Keep feedback focused

## For Contributors:
- Respond to feedback gracefully
- Ask for clarification
- Make requested changes
- Thank reviewers`,
        category: 'Best Practices',
        difficulty: 'Intermediate',
        author: 'Community',
        read_time: 6,
      },
      {
        title: 'Setting Up Development Environment',
        content: `# Setting Up Development Environment

## Prerequisites:
- Git
- Node.js
- npm or yarn
- Your preferred code editor

## Steps:
1. Fork the project
2. Clone your fork
3. Install dependencies
4. Create a feature branch
5. Make changes
6. Run tests
7. Submit PR`,
        category: 'Getting Started',
        difficulty: 'Beginner',
        author: 'Community',
        read_time: 7,
      },
    ]);

    console.log(`Created ${guides.length} guides`);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

connectDB().then(seedDatabase);
