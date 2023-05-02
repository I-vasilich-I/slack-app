import { ToadScheduler, SimpleIntervalJob, AsyncTask, SimpleIntervalSchedule } from 'toad-scheduler'
import { sendBirthdaysInfo } from "./services";
import { AppType, ScheduleIds } from "./types";

const scheduler = new ToadScheduler();

const scheduleBirthdayMessagesJob = (app: AppType, interval: SimpleIntervalSchedule = { days: 1 }) => {
  const task = new AsyncTask(
    ScheduleIds.birthdays, 
    () => sendBirthdaysInfo(app),
    (err: Error) => { console.error(err) }
  );

  const job = new SimpleIntervalJob(interval, task);

  scheduler.addSimpleIntervalJob(job);
}

process.on('SIGINT', function () { 
  scheduler.stop();
  console.log('\nScheduled jobs stopped');
  process.exit(0);
});

export default scheduleBirthdayMessagesJob;