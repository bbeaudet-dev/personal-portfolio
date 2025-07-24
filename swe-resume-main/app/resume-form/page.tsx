"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumeForm() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("personal")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would save the form data
    // For now, just redirect to the resume page
    router.push("/")
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Create Your Resume</h1>

      <form onSubmit={handleSubmit}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Enter your basic information that will appear at the top of your resume.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input id="title" placeholder="Senior Software Engineer" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input id="github" placeholder="github.com/johndoe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input id="linkedin" placeholder="linkedin.com/in/johndoe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="San Francisco, CA" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea id="summary" placeholder="Experienced software engineer with expertise in..." rows={4} />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => router.push("/")}>
                  Cancel
                </Button>
                <Button onClick={() => setActiveTab("skills")}>Next: Skills</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>Add your technical skills and competencies.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="languages">Programming Languages</Label>
                  <Input id="languages" placeholder="JavaScript, TypeScript, Python, Go, SQL" />
                  <p className="text-sm text-muted-foreground mt-1">Separate skills with commas</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frameworks">Frameworks & Libraries</Label>
                  <Input id="frameworks" placeholder="React, Next.js, Node.js, Express, Redux" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tools">Tools & Platforms</Label>
                  <Input id="tools" placeholder="AWS, Docker, Kubernetes, Git, CI/CD" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="databases">Databases</Label>
                  <Input id="databases" placeholder="PostgreSQL, MongoDB, Redis, DynamoDB" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("personal")}>
                  Previous
                </Button>
                <Button onClick={() => setActiveTab("experience")}>Next: Experience</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="experience">
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Add your relevant work experience.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 p-4 border rounded-md">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle1">Job Title</Label>
                      <Input id="jobTitle1" placeholder="Senior Software Engineer" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company1">Company</Label>
                      <Input id="company1" placeholder="TechCorp Inc." />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate1">Start Date</Label>
                      <Input id="startDate1" placeholder="Jan 2021" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate1">End Date</Label>
                      <Input id="endDate1" placeholder="Present" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location1">Location</Label>
                    <Input id="location1" placeholder="San Francisco, CA" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="responsibilities1">Responsibilities & Achievements</Label>
                    <Textarea
                      id="responsibilities1"
                      placeholder="• Led the development of a microservices architecture
• Architected and implemented a React-based dashboard
• Mentored junior developers and conducted code reviews"
                      rows={4}
                    />
                    <p className="text-sm text-muted-foreground mt-1">Use bullet points (•) for each item</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  + Add Another Position
                </Button>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("skills")}>
                  Previous
                </Button>
                <Button onClick={() => setActiveTab("projects")}>Next: Projects</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Add your notable projects.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 p-4 border rounded-md">
                  <div className="space-y-2">
                    <Label htmlFor="projectTitle1">Project Title</Label>
                    <Input id="projectTitle1" placeholder="E-commerce Platform Redesign" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="technologies1">Technologies Used</Label>
                    <Input id="technologies1" placeholder="React, Node.js, MongoDB" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDesc1">Project Description</Label>
                    <Textarea
                      id="projectDesc1"
                      placeholder="Led a team of 5 developers to redesign an e-commerce platform serving 100K+ monthly users."
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="achievements1">Key Achievements</Label>
                    <Textarea
                      id="achievements1"
                      placeholder="• Implemented a microservices architecture
• Reduced page load time by 60%
• Integrated payment gateways"
                      rows={3}
                    />
                    <p className="text-sm text-muted-foreground mt-1">Use bullet points (•) for each item</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  + Add Another Project
                </Button>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("experience")}>
                  Previous
                </Button>
                <Button onClick={() => setActiveTab("education")}>Next: Education</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="education">
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Add your educational background.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4 p-4 border rounded-md">
                  <div className="space-y-2">
                    <Label htmlFor="degree1">Degree</Label>
                    <Input id="degree1" placeholder="Master of Science in Computer Science" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institution1">Institution</Label>
                    <Input id="institution1" placeholder="Stanford University" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="eduStartDate1">Start Year</Label>
                      <Input id="eduStartDate1" placeholder="2014" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eduEndDate1">End Year</Label>
                      <Input id="eduEndDate1" placeholder="2016" />
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  + Add Another Education
                </Button>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("projects")}>
                  Previous
                </Button>
                <Button type="submit">Generate Resume</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </form>
    </div>
  )
}
