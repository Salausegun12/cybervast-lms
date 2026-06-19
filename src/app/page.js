// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.js file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

import Button from '@/components/ui/Button';

import Input from '@/components/ui/Input';

import Textarea from '@/components/ui/Textarea';

import Badge from '@/components/ui/Badge';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <Button>Primary Button</Button>

      <Button variant="secondary">Secondary Button</Button>

      <Button variant="ghost">Ghost Button</Button>

      <Button variant="danger">Danger Button</Button>

      <Button size="sm">Small Button</Button>

      <Button size="lg">Large Button</Button>

      <Button disabled>Disabled Button</Button>

      <Button leftIcon="🚀">Launch Course</Button>

      <Button rightIcon="→">Next Lesson</Button>

      <Button loading>Loading Button</Button>

      {/*---------- Input-------- */}
      <div className="w-full max-w-md space-y-5">
        <Input
          id="name"
          label="Full Name"
          placeholder="Enter your name"
          helperText="Please enter your full name"
        />

        <Input
          id="email"
          label="Email Address"
          placeholder="Enter your email"
          error="Email is required"
        />
        <Input
          id="disabled"
          label="Disabled Input"
          placeholder="Disabled field"
          disabled
        />
      </div>

      {/*---------------- Textarea ---------- */}
      <div className="w-full max-w-md space-y-4">
        <Textarea
          id="description"
          label="Course Description"
          placeholder="Write course description..."
          helperText="Maximum 500 characters"
        />

        <Textarea
          id="feedback"
          label="Feedback"
          placeholder="Write feedback..."
          error="Feedback is required"
        />

        <Textarea
          id="disabled-textarea"
          label="Disabled Textarea"
          placeholder="Disabled textarea"
          disabled
        />
      </div>
      {/*------- Badge Component ----  */}
      <div className="flex flex-wrap gap-3">
        <Badge variant="success">Published</Badge>

        <Badge variant="warning">Pending</Badge>

        <Badge variant="error">Failed</Badge>

        <Badge variant="info">In Progress</Badge>
        <Badge variant="neutral">Draft</Badge>
      </div>
    </main>
  );
}
