import cron from "node-cron";
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js";
import { sendEmail } from "../utils/sendEmail.js";

export const newsLetterCron = () => {
  cron.schedule("*/1 * * * *", async () => {
   
    // ("Running Cron Automati //  console.log on");
    const jobs = await Job.find({ newsLettersSent: false });
    for (const job of jobs) {
      try {
        const filteredUsers = await User.find({
          $or: [
            { "niches.firstNiche": job.jobNiche },
            { "niches.secondNiche": job.jobNiche },
            { "niches.thirdNiche": job.jobNiche },
          ],
        });
        for (const user of filteredUsers) {
          const subject = ` Hot Job Alert: ${job.title} in ${job.jobNiche} — Apply Now!`;

          const message = `Hi ${user.name},

 Exciting Opportunity Just for You! 

A new job has just been posted in your niche and it looks like a great match for you!

Job Highlights:
-  Position: ${job.title}
-  Company: ${job.companyName}
-  Location: ${job.location}
-  Salary: ${job.salary}

This company is actively hiring, and roles like this fill up fast - so don’t wait!

    Apply now and take the next step in your career.

If you need help polishing your resume or have any questions, we’re here to support you.

Best of luck!

— The HireWire Team 💙`;

          sendEmail({
            email: user.email,
            subject,
            message,
          });
        }
        job.newsLettersSent = true;
        await job.save();
      } catch (error) {
        console.log("ERROR IN NODE CRON CATCH BLOCK");
        return next(console.error(error || "Some error in Cron."));
      }
    }
  });
};
