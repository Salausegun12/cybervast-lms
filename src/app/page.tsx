import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Textarea } from '../components/Textarea/Textarea';
import { Badge } from '../components/Badge/Badge';

export default function Home() {
  return (
    <div className="p-12 max-w-2xl mx-auto flex flex-col gap-10 items-center bg-white min-h-screen">
      {/* Buttons Section */}
      <div className="flex flex-col gap-4 items-center w-full max-w-sm">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="primary" size="sm">Small Button</Button>
        <Button variant="primary" size="lg">Large Button</Button>
        <Button variant="primary" disabled>Disabled Button</Button>
        <Button variant="primary" icon={<span role="img" aria-label="rocket">🚀</span>}>Launch Course</Button>
        <Button variant="primary" icon={<span role="img" aria-label="arrow">➔</span>}>Next Lesson</Button>
        <Button variant="primary" loading>Loading...</Button>
      </div>

      {/* Inputs Section */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        <Input 
          label="Full Name" 
          placeholder="Enter your name..." 
          helperText="Please enter your full name" 
        />
        <Input 
          label="Email Address" 
          placeholder="Enter your email..." 
          error="Email is required" 
        />
        <Input 
          label="Disabled Input" 
          placeholder="Disabled field" 
          disabled 
        />
      </div>

      {/* Textareas Section */}
      <div className="flex flex-col gap-6 w-full max-w-md">
        <Textarea 
          label="Course Description" 
          placeholder="Write course description..." 
          helperText="Maximum 500 characters" 
        />
        <Textarea 
          label="Feedback" 
          placeholder="Write feedback..." 
          error="Feedback is required" 
        />
        <Textarea 
          label="Disabled Textarea" 
          placeholder="Disabled textarea" 
          disabled 
        />
      </div>

      {/* Badges Section */}
      <div className="flex flex-row gap-4 flex-wrap justify-center w-full max-w-md pb-12">
        <Badge variant="success">Published</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Failed</Badge>
        <Badge variant="info">In Progress</Badge>
        <Badge variant="neutral">Draft</Badge>
      </div>
    </div>
  );
}
