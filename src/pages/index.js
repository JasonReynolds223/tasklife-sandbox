import Head from 'next/head';
import { subDays, subHours } from 'date-fns';
import { Box, Container, Unstable_Grid2 as Grid, TextField } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewTotalWorkloads } from 'src/sections/overview/overview-total-workloads';
import { OverviewLatestTasks } from 'src/sections/overview/overview-latest-tasks';
import { OverviewLatestProjects } from 'src/sections/overview/overview-latest-projects';
import { OverviewMonthlyTaskAmount } from 'src/sections/overview/overview-monthly-task-amount';
import { OverviewTasksProgress } from 'src/sections/overview/overview-tasks-progress';
import { OverviewTotalTasks } from 'src/sections/overview/overview-daily-total-tasks';
import { OverviewAverageStress } from 'src/sections/overview/overview-average-stress';
import { OverviewTraffic } from 'src/sections/overview/overview-traffic';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Overview | Tasklife.AI
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalWorkloads
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="300"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTotalTasks
              difference={16}
              positive={true}
              sx={{ height: '100%' }}
              value="15"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewTasksProgress
              sx={{ height: '100%' }}
              value={75.5}
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewAverageStress
              sx={{ 
                color: 'red',
                height: '100%' }}
              value="High"
            />
          </Grid>
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewMonthlyTaskAmount
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[63, 15, 22]}
              labels={['Office', 'Meeting', 'Phone']}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewLatestProjects
              products={[
                {
                  id: '5ece2c077e39da27658aa8a9',
                  image: '/assets/products/project-1.jpg',
                  name: '',
                  updatedAt: subHours(now, 6).getTime()
                },
                {
                  id: '5ece2c0d16f70bff2cf86cd8',
                  image: '/assets/products/project-2.jpg',
                  name: '',
                  updatedAt: subDays(subHours(now, 8), 2).getTime()
                },
                {
                  id: 'b393ce1b09c1254c3a92c827',
                  image: '/assets/products/project-3.jpg',
                  name: '',
                  updatedAt: subDays(subHours(now, 1), 1).getTime()
                },
                {
                  id: 'a6ede15670da63f49f752c89',
                  image: '/assets/products/project-4.jpg',
                  name: '',
                  updatedAt: subDays(subHours(now, 3), 3).getTime()
                },
                {
                  id: 'bcad5524fe3a2f8f8620ceda',
                  image: '/assets/products/project-5.jpg',
                  name: '',
                  updatedAt: subDays(subHours(now, 5), 6).getTime()
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={8}
          >
            <OverviewLatestTasks
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'DEV1049',
                  amount: 30.5,
                  task: {
                    title: 'Project Completion and Delivery'
                  },
                  createdAt: 1678780800000,
                  status: 'pending'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  task: {
                    title: 'Creating the VM Management Functionality'
                  },
                  createdAt: 1678784400000,
                  status: 'completed'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'DEV1047',
                  amount: 10.99,
                  task: {
                    title: 'Adding Third-Party API Integrations'
                  },
                  createdAt: 1678788000000,
                  status: 'delivered'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'DEV1046',
                  amount: 96.43,
                  task: {
                    title: 'Integrating Two-Factor Authentication'
                  },
                  createdAt: 1678802400000,
                  status: 'completed'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'DEV1045',
                  amount: 32.54,
                  task: {
                    title: 'Setting up the Development Environment'
                  },
                  createdAt: 1678813200000,
                  status: 'completed'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'DEV1044',
                  amount: 16.76,
                  task: {
                    title: 'Requirements Gathering and Analysis'
                  },
                  createdAt: 1678816800000,
                  status: 'completed'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
