import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ArrowRight } from 'lucide-react';

export interface Poll {
  id: string;
  title: string;
  description: string;
  endDate: string;
  status: 'Active' | 'Closed' | 'Upcoming';
  participants?: number; // Optional: Number of participants or votes
}

interface PollCardProps {
  poll: Poll;
}

export function PollCard({ poll }: PollCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="font-headline text-xl leading-tight">{poll.title}</CardTitle>
          <Badge variant={poll.status === 'Active' ? 'default' : poll.status === 'Upcoming' ? 'outline' : 'secondary'}>
            {poll.status}
          </Badge>
        </div>
        <CardDescription className="line-clamp-3 text-sm">{poll.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>Ends: {poll.endDate}</span>
          </div>
          {poll.participants !== undefined && (
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              <span>{poll.participants} Participants</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full font-semibold">
          <Link href={`/polls/${poll.id}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
