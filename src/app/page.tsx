'use client';
import React, { useState } from 'react';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Textarea } from '../components/Textarea/Textarea';
import { Badge } from '../components/Badge/Badge';
import { Avatar } from '../components/Avatar/Avatar';
import { Card, CardHeader, CardBody, CardFooter } from '../components/Card/Card';
import { Sidebar, NavItem } from '../components/Sidebar/Sidebar';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../components/Modal/Modal';
import { ProgressBar } from '../components/ProgressBar/ProgressBar';
import { Dropdown } from '../components/Dropdown/Dropdown';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>();
  const [multiValues, setMultiValues] = useState<string[]>([]);

  return (
    <div className="p-12 max-w-3xl mx-auto flex flex-col gap-10 items-center bg-gray-50 min-h-screen">
      {/* Sidebar Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Sidebar & NavItem</h2>
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          style={{ height: '500px' }}
        >
          <Sidebar>
            <NavItem
              label="Dashboard"
              active
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              }
            />
            <NavItem
              label="Courses"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              }
            />
            <NavItem
              label="Settings"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              }
            />
          </Sidebar>
        </div>
      </div>

      {/* Modal Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Modal / Dialog Component
        </h2>
        <div className="flex bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full justify-center">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalHeader>
              <h3 className="text-lg font-semibold text-gray-900">Delete Course</h3>
            </ModalHeader>
            <ModalBody>
              <p className="text-gray-600">
                Are you sure you want to delete this course? All of the data will be permanently
                removed. This action cannot be undone.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setIsModalOpen(false)}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
          Progress Bar Component
        </h2>
        <div className="flex flex-col gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full">
          <ProgressBar progress={25} />
          <ProgressBar progress={75} />
          <ProgressBar progress={100} showLabel={false} />
        </div>
      </div>

      {/* Dropdown Section */}
      <div className="flex flex-col gap-4 w-full pb-12">
        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Dropdown Component</h2>
        <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Single Select</label>
            <Dropdown
              options={[
                { value: 'react', label: 'React for Beginners' },
                { value: 'ui', label: 'Advanced UI Design' },
                { value: 'nextjs', label: 'Next.js Mastery' },
              ]}
              value={selectedValue}
              onChange={setSelectedValue}
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Multi Select</label>
            <Dropdown
              multiSelect
              options={[
                { value: 'frontend', label: 'Frontend' },
                { value: 'backend', label: 'Backend' },
                { value: 'design', label: 'Design' },
              ]}
              value={multiValues}
              onChange={setMultiValues}
              placeholder="Select multiple tags..."
            />
          </div>
        </div>
      </div>

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
                This course covers all the basic concepts of React 18, including components, state,
                props, and hooks.
              </p>
            </CardBody>
            <CardFooter>
              <Badge variant="success">Published</Badge>
              <Button variant="primary" size="sm">
                Start Course
              </Button>
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
              <Button variant="secondary" size="sm">
                Resume
              </Button>
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
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading>
            Loading...
          </Button>
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
