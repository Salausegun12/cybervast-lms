import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Textarea } from '../components/Textarea/Textarea';
import { Badge } from '../components/Badge/Badge';
import { Avatar } from '../components/Avatar/Avatar';
import { Card, CardHeader, CardBody, CardFooter } from '../components/Card/Card';

export default function Home() {
  return (
    <div className="p-12 max-w-3xl mx-auto flex flex-col gap-10 items-center bg-gray-50 min-h-screen">
      
      {/* Avatars Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Avatar Component</h2>
        <div className="flex flex-row gap-6 flex-wrap items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <Avatar size="xs" initials="CV" />
          <Avatar size="sm" initials="OS" />
          <Avatar size="md" initials="JD" />
          <Avatar size="lg" initials="AL" />
          {/* Avatar with an image placeholder */}
          <Avatar size="lg" src="https://i.pravatar.cc/150?img=68" alt="Profile Picture" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Card Component</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <Card>
            <CardHeader>
              <h3 className="font-semibold text-lg text-gray-900">React for Beginners</h3>
              <p className="text-sm text-gray-500">Learn the fundamentals of React</p>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 text-sm">
                This course covers all the basic concepts of React 18, including components, state, props, and hooks.
              </p>
            </CardBody>
            <CardFooter>
              <Badge variant="success">Published</Badge>
              <Button variant="primary" size="sm">Start Course</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="font-semibold text-lg text-gray-900">Advanced UI Design</h3>
              <p className="text-sm text-gray-500">Master modern interface design</p>
            </CardHeader>
            <CardBody>
              <div className="flex items-center gap-3 mb-3">
                <Avatar size="sm" src="https://i.pravatar.cc/150?img=32" />
                <span className="text-sm text-gray-600 font-medium">Jane Doe</span>
              </div>
              <p className="text-gray-700 text-sm">
                Dive deep into design systems, accessible components, and beautiful typography.
              </p>
            </CardBody>
            <CardFooter>
              <Badge variant="warning">In Progress</Badge>
              <Button variant="secondary" size="sm">Resume</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Existing Sections below */}
      
      {/* Buttons Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Button Component</h2>
        <div className="flex flex-row gap-4 flex-wrap items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
          <Button variant="primary" loading>Loading...</Button>
        </div>
      </div>

      {/* Inputs Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Input Component</h2>
        <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full">
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
        </div>
      </div>

      {/* Textareas Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Textarea Component</h2>
        <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full">
          <Textarea 
            label="Course Description" 
            placeholder="Write course description..." 
            helperText="Maximum 500 characters" 
          />
        </div>
      </div>

      {/* Badges Section */}
      <div className="flex flex-col gap-4 w-full pb-12">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Badge Component</h2>
        <div className="flex flex-row gap-4 flex-wrap items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <Badge variant="success">Published</Badge>
          <Badge variant="warning">Pending</Badge>
          <Badge variant="error">Failed</Badge>
          <Badge variant="info">In Progress</Badge>
          <Badge variant="neutral">Draft</Badge>
        </div>
      </div>

    </div>
  );
}
