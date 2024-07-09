import General from '@/components/Cards/General';
import RadialBar from '@/components/charts/RadialBar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { radialBarData } from '@/lib/chartData';

export default function Home() {
  return (
    <div className='grid gap-8'>
      <div className='grid grid-cols-2 gap-8'>
        <General />
        <div className='grid gap-8'>
          <Card>Hello Worlds</Card>
          <Card>Hello Worlds</Card>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        <Card className='h-[300px]'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Product Sales</CardTitle>
              <CardDescription>
                These are the results of the sales from different platforms
              </CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4 h-[300px]'>
              <RadialBar data={radialBarData} />
            </CardContent>
          </Card>
        </Card>

        <Card className='h-[300px]'>No Content Found</Card>
        <Card className='h-[300px]'></Card>
      </div>
    </div>
  );
}
