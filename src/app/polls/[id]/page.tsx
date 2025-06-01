
"use client"; // Required for useState and onClick handlers

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Clock, User, CheckCircle, PieChart } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // Added useState and useEffect
import { useToast } from '@/hooks/use-toast'; // Added useToast

// Mock data - in a real app, this would come from a database or API
const samplePollData = {
  '1': {
    id: '1',
    title: 'Community Fund Allocation Q3 2024',
    description: 'This proposal outlines the allocation of the community treasury funds for the third quarter of 2024. The funds will be distributed across several key areas: 40% for marketing and community growth, 35% for core protocol development and security audits, 15% for ecosystem grants and bounties, and 10% for operational expenses and legal contingencies. We believe this allocation will foster sustainable growth and innovation within the VoteChain ecosystem. Community feedback is vital for this process.',
    options: [
      { id: 'opt1', text: 'Approve Allocation Plan' },
      { id: 'opt2', text: 'Reject Allocation Plan' },
      { id: 'opt3', text: 'Request Revisions to Plan' },
    ],
    endDate: '2024-08-15',
    proposer: 'VoteChain Core Team',
    status: 'Active',
    results: { opt1: 750, opt2: 150, opt3: 304 }, // Example results
    totalVotes: 1204,
  },
   '2': {
    id: '2',
    title: 'New Feature: Advanced Analytics Dashboard',
    description: 'Proposal to develop an advanced analytics dashboard. This feature would offer users detailed insights into voting trends, participation rates, and proposal success metrics. Key components would include customizable charts, data export functionality, and comparative analysis tools. The goal is to enhance transparency and empower users with data-driven decision-making capabilities.',
    options: [
      { id: 'optA', text: 'Strongly Support' },
      { id: 'optB', text: 'Support' },
      { id: 'optC', text: 'Neutral' },
      { id: 'optD', text: 'Oppose' },
    ],
    endDate: '2024-08-01',
    proposer: 'Community Member X',
    status: 'Active',
    results: { optA: 450, optB: 200, optC: 126, optD: 100 },
    totalVotes: 876,
  },
};

type PollOption = { id: string; text: string };
type PollDataType = {
  id: string;
  title: string;
  description: string;
  options: PollOption[];
  endDate: string;
  proposer: string;
  status: 'Active' | 'Closed' | 'Upcoming';
  results?: { [optionId: string]: number };
  totalVotes?: number;
};


export default function PollDetailPage({ params }: { params: { id: string } }) {
  const poll: PollDataType | undefined = samplePollData[params.id as keyof typeof samplePollData];
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (poll && poll.options.length > 0) {
      setSelectedOption(poll.options[0].id);
    }
  }, [poll]);


  if (!poll) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="font-headline text-3xl font-bold mb-4">Poll Not Found</h1>
        <p className="text-muted-foreground mb-6">The poll you are looking for does not exist or may have been removed.</p>
        <Button asChild>
          <Link href="/polls"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Polls</Link>
        </Button>
      </div>
    );
  }

  const handleVoteSubmit = () => {
    if (!selectedOption) {
      toast({
        title: "No Option Selected",
        description: "Please select an option before submitting your vote.",
        variant: "destructive",
      });
      return;
    }
    console.log(`Simulated vote submission for poll ID: ${poll.id}, Selected Option: ${selectedOption}`);
    toast({
      title: "Vote Submitted! (Simulated)",
      description: `Your vote for "${poll.options.find(o => o.id === selectedOption)?.text}" on poll "${poll.title}" has been recorded.`,
    });
    // In a real app, you would call your smart contract here.
  };

  const calculatePercentage = (votes: number) => {
    return poll.totalVotes && poll.totalVotes > 0 ? ((votes / poll.totalVotes) * 100).toFixed(1) : 0;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="outline" asChild className="mb-6">
        <Link href="/polls"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Polls</Link>
      </Button>

      <Card className="shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <CardTitle className="font-headline text-3xl md:text-4xl">{poll.title}</CardTitle>
            <Badge variant={poll.status === 'Active' ? 'default' : 'secondary'} className="text-sm px-3 py-1">{poll.status}</Badge>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mt-2">
            <div className="flex items-center"><User className="mr-2 h-4 w-4" /> Proposed by: {poll.proposer}</div>
            <div className="flex items-center"><Clock className="mr-2 h-4 w-4" /> Ends: {poll.endDate}</div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground/80 mb-8 whitespace-pre-line">{poll.description}</p>
          
          {poll.status === 'Active' && (
            <div className="mb-8 p-6 border rounded-lg bg-background">
              <h3 className="font-headline text-xl font-semibold mb-4">Cast Your Vote</h3>
              <RadioGroup 
                value={selectedOption} 
                onValueChange={setSelectedOption}
              >
                {poll.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted transition-colors">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="text-base flex-grow cursor-pointer">{option.text}</Label>
                  </div>
                ))}
              </RadioGroup>
              <Button 
                size="lg" 
                className="mt-6 w-full md:w-auto font-semibold"
                onClick={handleVoteSubmit}
                type="button" // Ensure it doesn't act as a form submit if wrapped in one
              >
                <CheckCircle className="mr-2 h-5 w-5" /> Submit Vote
              </Button>
            </div>
          )}

          {(poll.status === 'Closed' || poll.status === 'Active') && poll.results && poll.totalVotes && (
             <div className="p-6 border rounded-lg bg-background">
              <h3 className="font-headline text-xl font-semibold mb-6 flex items-center">
                <PieChart className="mr-2 h-5 w-5 text-primary" />
                Poll Results <span className="text-sm text-muted-foreground ml-2">({poll.totalVotes} total votes)</span>
              </h3>
              <div className="space-y-4">
                {poll.options.map((option) => (
                  <div key={option.id}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>{option.text}</span>
                      <span className="font-medium">{poll.results?.[option.id] || 0} votes ({calculatePercentage(poll.results?.[option.id] || 0)}%)</span>
                    </div>
                    <Progress value={parseFloat(calculatePercentage(poll.results?.[option.id] || 0))} className="h-3" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {poll.status === 'Upcoming' && (
            <div className="p-6 border rounded-lg bg-muted text-center">
                <h3 className="font-headline text-xl font-semibold mb-2">Voting Not Yet Started</h3>
                <p className="text-muted-foreground">This poll will become active on its start date. Check back soon!</p>
            </div>
          )}
        </CardContent>
        {poll.status === 'Active' && 
          <CardFooter>
            <p className="text-xs text-muted-foreground">Your vote is important. Please review your choice carefully before submitting.</p>
          </CardFooter>
        }
      </Card>
    </div>
  );
}
