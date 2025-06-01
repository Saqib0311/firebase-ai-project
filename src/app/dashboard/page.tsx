import { StatCard } from '@/components/stat-card';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Archive, CheckSquare, ClipboardList, Settings, Bell, History, LogOut, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const userStats = [
  {
    icon: Archive,
    title: 'Active Polls',
    value: 5,
    description: 'Polls you can currently vote on.',
  },
  {
    icon: CheckSquare,
    title: 'Votes Cast',
    value: 23,
    description: 'Total votes you have submitted.',
  },
  {
    icon: ClipboardList,
    title: 'Proposals Submitted',
    value: 2,
    description: 'Proposals you initiated.',
  },
];

const recentActivities = [
  { id: 1, action: "Voted on 'Community Fund Allocation'", type: "vote", date: '2024-07-20', status: 'Completed' },
  { id: 2, action: "Submitted 'New Feature Proposal'", type: "proposal", date: '2024-07-18', status: 'Active' },
  { id: 3, action: "Voted on 'Marketing Strategy Q3'", type: "vote", date: '2024-07-15', status: 'Completed' },
  { id: 4, action: "Commented on 'Platform Upgrade Discussion'", type: "comment", date: '2024-07-12', status: 'View Discussion' },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-headline text-3xl md:text-4xl font-bold">Your Dashboard</h1>
        <p className="text-muted-foreground">Overview of your voting activities and platform statistics.</p>
      </div>

      {/* Stats Section */}
      <section className="mb-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {userStats.map((stat) => (
            <StatCard
              key={stat.title}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity Section */}
        <section className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Recent Voting Activity</CardTitle>
              <CardDescription>A log of your latest actions on the platform.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Status/Link</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentActivities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell className="font-medium">{activity.action}</TableCell>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell className="text-right">
                        {activity.status === 'Active' || activity.status === 'Completed' ? (
                           <Badge variant={activity.status === 'Active' ? 'default' : 'secondary'}>{activity.status}</Badge>
                        ) : (
                          <Button variant="link" size="sm" asChild>
                            <Link href="#">{activity.status} <ExternalLink className="ml-1 h-3 w-3" /></Link>
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions / Profile Links Section */}
        <aside>
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Profile & Settings</CardTitle>
                    <CardDescription>Manage your account and preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                        <Settings className="mr-2 h-4 w-4" /> Profile Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <Bell className="mr-2 h-4 w-4" /> Notification Settings
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                        <History className="mr-2 h-4 w-4" /> Full Activity History
                    </Button>
                     <Button variant="outline" className="w-full justify-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4 lucide lucide-wallet"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>
                        Wallet Management
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                        <LogOut className="mr-2 h-4 w-4" /> Logout
                    </Button>
                </CardContent>
            </Card>
        </aside>
      </div>
    </div>
  );
}
