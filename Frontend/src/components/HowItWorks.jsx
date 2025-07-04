import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h3>How does it work?</h3>
      <div className="container">
        <div className="card">
          <div className="icon">
            <LuUserPlus />
          </div>
          <h4>Create an Account (It’s Free, Fast & Totally Worth It)</h4>
          <p>
            Job seeker or employer? Doesn’t matter we’ve got you. Set up your
            profile in minutes, flex your skills (or hiring goals), and let the
            right opportunities come to you. No fluff. Just your future,
            loading…
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <VscTasklist />
          </div>
          <h4>Post or Browse Jobs (Yes, It’s That Easy)</h4>
          <p>
            <strong>For Employers:</strong> Post your dream-candidate wishlist -
            no judgment here. Use our tools to attract top talent, filter with
            precision, and build your dream team without drowning in resumes.
          </p>

          <p>
            <strong>For Job Seekers:</strong> Browse jobs like you browse memes
            — endlessly and with ambition. Use smart filters to ditch the noise
            and find roles that *actually* match your vibe (and your resume).
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4>Hire or Get Hired (Like a Pro, But Cooler)</h4>
          <p>
            <strong>For Employers:</strong> Browse, shortlist, and hire your
            next rockstar minus the 50-step process. Build your dream team
            with less stress and more success.
          </p>

          <p>
            <strong>For Job Seekers:</strong> Get job offers that actually match
            your goals (and your sanity). Accept roles that excite you not
            just ones that pay the bills.
          </p>

         
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
