import React from "react";

function ContactSection() {
    return(
        <div class="rounded-lg bg-cyan-900 shadow-sm mx-auto max-w-xl space-y-8" data-v0-t="card">
  <div class="flex flex-col space-y-1.5 p-6">
    <h3 class="tracking-tight text-2xl font-bold">Contact Me</h3>
    <p class="text-sm text-muted-foreground">
      Interested in working together? Fill out the form or connect with me on LinkedIn or GitHub.
    </p>
  </div>
  <div class="p-6">
    <div class="space-y-4">
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="name"
        >
          Name
        </label>
        <input
          class="flex h-10 w-full rounded-md px-3 py-2 text-sm file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          id="name"
          placeholder="Enter your name"
          required=""
        />
      </div>
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="email"
        >
          Email
        </label>
        <input
          class="flex h-10 w-full rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
          id="email"
          placeholder="Enter your email"
          required=""
          type="email"
        />
      </div>
      <div class="space-y-2">
        <label
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          for="message"
        >
          Message
        </label>
        <textarea
          class="flex w-full rounded-md px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
          id="message"
          placeholder="Enter your message"
          required=""
        ></textarea>
      </div>
      <div class="flex justify-between sm:justify-start sm:space-x-4">
        <button
          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto"
          type="submit"
        >
          Submit
        </button>
        <div class="flex space-x-4 mt-3 sm:mt-0">
          <a
            class="w-10 h-10 flex items-center justify-center"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/justin-clem-b39940287/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            class="w-10 h-10 flex items-center justify-center"
            aria-label="GitHub"
            href="https://github.com/Halcyon-Justin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-5 h-5"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}

export default ContactSection;