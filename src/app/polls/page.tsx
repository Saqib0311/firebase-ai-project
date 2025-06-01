import { PollCard, type Poll } from '@/components/poll-card';
import { Input } from '@/components/ui/input';
import { Search, ListFilter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const samplePolls: Poll[] = [
  {
    id: '1',
    title: 'Community Fund Allocation Q3 2024',
    description: 'Proposal for allocating the community treasury funds for the third quarter of 2024. Includes marketing, development, and event budgets.',
    endDate: '2024-08-15',
    status: 'Active',
    participants: 1204,
  },
  {
    id: '2',
    title: 'New Feature: Advanced Analytics Dashboard',
    description: 'Should we prioritize development of an advanced analytics dashboard for users? This feature would provide deeper insights into voting patterns and platform engagement.',
    endDate: '2024-08-01',
    status: 'Active',
    participants: 876,
  },
  {
    id: '3',
    title: 'Platform UI Refresh Proposal',
    description: 'A proposal to modernize the VoteChain user interface for better user experience and accessibility. Includes mockups and design specifications.',
    endDate: '2024-07-25',
    status: 'Closed',
    participants: 1532,
  },
  {
    id: '4',
    title: 'Partnership with EcoDefi Alliance',
    description: 'Proposal to form a strategic partnership with the EcoDefi Alliance to promote sustainable blockchain initiatives.',
    endDate: '2024-09-01',
    status: 'Upcoming',
    participants: 0,
  },
];

export default function PollsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="font-headline text-3xl md:text-4xl font-bold">Polls Overview</h1>
          <p className="text-muted-foreground">Browse active, upcoming, and completed polls.</p>
        </div>
        <Button asChild>
          <Link href="/polls/create">Create New Poll</Link>
        </Button>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Search polls..." className="pl-10 w-full" />
        </div>
        <Button variant="outline">
          <ListFilter className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePolls.map((poll) => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>

      {samplePolls.length === 0 && (
         <div className="text-center py-12">
            <h2 className="font-headline text-2xl mb-2">No Polls Found</h2>
            <p className="text-muted-foreground">There are currently no polls matching your criteria. Why not create one?</p>
         </div>
      )}
    </div>
  );
}
