'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { bumpChartData } from '@/lib/chartData';
import BumpChart from '../charts/BumpChart';

const General = () => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>This week</CardTitle>
        <CardDescription>These are the results of this week.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4 h-[300px] w-fit'>
        <BumpChart data={bumpChartData} />
      </CardContent>
    </Card>
  );
};

export default General;
