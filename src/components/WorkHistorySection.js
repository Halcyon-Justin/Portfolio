// components/WorkHistorySection.js
import React from 'react';

function WorkHistorySection() {
  return (
    <div>
      <p className="text-xl flex justify-center alert bg-inherit border-none">History</p>
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
          </div>
          <div class="timeline-start md:text-end mb-10">
            <time class="font-mono italic">March 2020</time>
            <div class="text-lg font-black">Prime Therapeutics</div>
            <p className="font-mono italic text-accent">Sr. Software Engineer</p>
            Prime Therapeutics LLC is a pharmacy benefit management company. It is owned by 18 Blue Cross and Blue Shield Plans, subsidiaries or affiliates of those plans. It is headquartered in Eagan, Minnesota
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
          </div>
          <div class="timeline-end mb-10">
            <time class="font-mono italic">January 2017</time>
            <div class="text-lg font-black">Aston Technologies</div>
            <p className="font-mono italic text-accent">Full Stack Java Developer</p>
            Aston Technologies is an IT Consulting firm located in Saint Louis Park, MN. Aston specializes in IT Consulting, providing business Computer Support and Network Services in Minneapolis, Saint Paul, Edina, Richfield, Bloomington and Burnsville
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div class="timeline-middle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
          </div>
          <div class="timeline-start md:text-end mb-10">
            <time class="font-mono italic">December 2016</time>
            <div class="text-lg font-black">Minnesota State University Moorhead</div>
            <p className="font-mono italic text-accent">Bachelor's of Fine Art - Graphic Communiations</p>
            Minnesota State University Moorhead is a public university in Moorhead, Minnesota. The school has an enrollment of 5,193 students and 266 full-time faculty members. MSUM is a part of the Minnesota State Colleges and Universities system
          </div>
          <hr />
        </li>
      </ul>
      <div className="">
        <p className="text-xl flex justify-center alert bg-inherit border-none">Skills</p>
        <section>
          <div class="flex flex-col w-full lg:flex-row">
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              

            </div>
            <div class="divider lg:divider-horizontal"></div>
            <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default WorkHistorySection;
