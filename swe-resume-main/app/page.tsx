import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PrintButton } from "@/components/print-button"

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">
      <Card className="mx-auto max-w-4xl shadow-lg print:shadow-none">
        <CardContent className="p-8 print:p-4">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold">Benjamin Beaudet</h1>
              <h2 className="text-xl text-muted-foreground">Software & Mechanical Engineer</h2>
            </div>
            <PrintButton />
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap gap-4 mb-6 text-sm">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:bbeaudet0@gmail.com" className="hover:underline">
                bbeaudet0@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <a href="tel:+12489776340" className="hover:underline">
                (248) 977-6340
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <a
                href="https://github.com/bbeaudet-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github (bbeaudet-dev)
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://linkedin.com/in/ben-beaudet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Linkedin (ben-beaudet)
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Columbus, OH</span>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Summary</h3>
            <p className="text-muted-foreground">
              Full-stack software engineer with expertise in React, Next.js, and Node.js ecosystem. Proven track record
              of building scalable web applications, automating complex workflows, and delivering high-impact technical
              solutions. Experience spans from frontend development with React/TypeScript to backend systems with
              PostgreSQL and cloud deployment. Strong background in automation, having developed 5,000+ lines of code
              that saved thousands of engineering hours.
            </p>
          </section>

          <Separator className="my-6" />

          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Professional Experience</h3>

            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Firmware & Mechanical Engineer</h4>
                <span className="text-muted-foreground text-sm">July 2025 - Present</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">BATS-TOI</h5>
                  <Badge className="bg-gray-200 text-black hover:bg-gray-300">Contract</Badge>
                </div>
                <span className="text-muted-foreground text-sm">Brooklyn, NY</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Automated 80% of design workflows with 5,000+ lines of VBA code, saving 1,000+ annual engineering
                  hours
                </li>
                <li>
                  Developed CAD master models and parametric design systems, saving 2,000+ annual engineering hours
                </li>
                <li>Managed 300+ sales orders for 75 government agencies, contributing to $3.5M in revenue</li>
                <li>
                  Pioneered continuous improvement initiatives including PLM/ERP optimization and database system
                  implementation
                </li>
                <li>Created automated drawing generation and BOM management systems</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Embedded Firmware Engineer</h4>
                <span className="text-muted-foreground text-sm">Jun - Jul 2025</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">Cerelog</h5>
                  <Badge className="bg-gray-200 text-black hover:bg-gray-300">Contract</Badge>
                </div>
                <span className="text-muted-foreground text-sm">Brooklyn, NY</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Automated 80% of design workflows with 5,000+ lines of VBA code, saving 1,000+ annual engineering
                  hours
                </li>
                <li>
                  Developed CAD master models and parametric design systems, saving 2,000+ annual engineering hours
                </li>
                <li>Managed 300+ sales orders for 75 government agencies, contributing to $3.5M in revenue</li>
                <li>
                  Pioneered continuous improvement initiatives including PLM/ERP optimization and database system
                  implementation
                </li>
                <li>Created automated drawing generation and BOM management systems</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Product Engineer</h4>
                <span className="text-muted-foreground text-sm">Apr 2022 - Jun 2023</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">Lazurite</h5>
                  <Badge className="bg-gray-200 text-black hover:bg-gray-300">Full-Time</Badge>
                </div>
                <span className="text-muted-foreground text-sm">Cleveland, OH</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Designed and manufactured 15 portable demo devices with integrated electronics and software systems
                </li>
                <li>
                  Implemented PLM software to manage inventory of 75+ electronic components and optimize supply chain
                </li>
                <li>
                  Conducted 6 product validation tests and optimized manufacturing processes for first 10 production
                  units
                </li>
                <li>Developed cost analysis systems demonstrating 25% savings through data-driven optimization</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Chief of Staff / Technical Generalist</h4>
                <span className="text-muted-foreground text-sm">Sep 2021 - Feb 2022</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">Blended</h5>
                  <Badge className="bg-gray-200 text-black hover:bg-gray-300">Full-Time</Badge>
                </div>
                <span className="text-muted-foreground text-sm">Cleveland, OH</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Acquired first 50 users by developing automated workflows and implementing Product-Led-Growth
                  strategies
                </li>
                <li>Coordinated technical operations across three offices (Ohio, Washington, Argentina)</li>
                <li>Implemented automation systems and growth analytics to optimize user acquisition</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Design Engineer / Project Manager</h4>
                <span className="text-muted-foreground text-sm">Summer 2019</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">Birkdale Neuro Rehab Centre</h5>
                  <Badge className="bg-gray-200 text-black hover:bg-gray-300">Contract</Badge>
                </div>
                <span className="text-muted-foreground text-sm">London, UK</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>
                  Designed and prototyped innovative medical therapy device with 50% cost savings over alternatives
                </li>
                <li>
                  Integrated Arduino PLCs with Bluetooth connectivity, pressure sensors, and haptic feedback systems
                </li>
                <li>
                  Programmed 10 unique device outputs enabling patients to complete therapy through interactive games
                </li>
              </ul>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Technical Skills */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Frontend Development</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">React Native</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Supabase</Badge>
                  <Badge variant="secondary">Neon</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">C/C++</Badge>
                  <Badge variant="secondary">Arduino</Badge>
                  <Badge variant="secondary">VBA</Badge>
                  <Badge variant="secondary">MATLAB</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Deployment</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">GitTown</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                  <Badge variant="secondary">Netlify</Badge>
                  <Badge variant="secondary">Render</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">AI & Development Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cursor</Badge>
                  <Badge variant="secondary">Claude</Badge>
                  <Badge variant="secondary">ChatGPT</Badge>
                  <Badge variant="secondary">Replit</Badge>
                  <Badge variant="secondary">v0</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">CAD & Automation</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Inventor</Badge>
                  <Badge variant="secondary">iLogic</Badge>
                  <Badge variant="secondary">SolidWorks</Badge>
                  <Badge variant="secondary">AutoCAD</Badge>
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Projects */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Technical Projects</h3>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Full-Stack Web Applications</h4>
                <div className="flex gap-2">
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Supabase</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Developed modern web applications using React ecosystem with TypeScript and cloud databases.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Built responsive frontend interfaces with React and Next.js</li>
                <li>Implemented backend APIs using Node.js and Express</li>
                <li>Integrated PostgreSQL databases with Supabase and Neon for data management</li>
                <li>Deployed applications on Vercel, Netlify, and Render platforms</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Mobile Development</h4>
                <div className="flex gap-2">
                  <Badge>React Native</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>Cross-Platform</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Cross-platform mobile application development using React Native.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Developed mobile applications with shared codebase for iOS and Android</li>
                <li>Implemented native device features and responsive mobile UI</li>
                <li>Integrated with backend APIs and real-time data synchronization</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Design Automation System</h4>
                <div className="flex gap-2">
                  <Badge>VBA</Badge>
                  <Badge>iLogic</Badge>
                  <Badge>CAD APIs</Badge>
                  <Badge>Python</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Comprehensive automation system for mechanical design workflows with modern development practices.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Built 5,000+ lines of VBA and iLogic code to automate 80% of design processes</li>
                <li>Integrated with CAD APIs and database systems using Python scripts</li>
                <li>Implemented version control with Git and collaborative development workflows</li>
                <li>Used AI tools (ChatGPT, Claude) for code optimization and debugging</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">IoT & Embedded Systems</h4>
                <div className="flex gap-2">
                  <Badge>Arduino</Badge>
                  <Badge>C/C++</Badge>
                  <Badge>IoT</Badge>
                  <Badge>Bluetooth</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Hardware programming and IoT device development with sensor integration.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Programmed Arduino-based systems with C/C++ for medical device applications</li>
                <li>Implemented Bluetooth connectivity and sensor data processing</li>
                <li>Created interactive interfaces bridging hardware and software systems</li>
              </ul>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Education */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Education</h3>

            <div className="mb-2">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="font-medium">Master of Science in Innovation & Entrepreneurship</h4>
                <span className="text-muted-foreground text-sm">2020 - 2021</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-muted-foreground">John Carroll University</p>
                <span className="text-muted-foreground text-sm">GPA: 3.52</span>
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="font-medium">Bachelor of Science in Mechanical Engineering</h4>
                <span className="text-muted-foreground text-sm">2016 - 2020</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-muted-foreground">Miami University • Mathematics Minor • Cum Laude</p>
                <span className="text-muted-foreground text-sm">GPA: 3.68</span>
              </div>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Additional Experience */}
          <section>
            <h3 className="text-lg font-semibold mb-4">Leadership & Involvement</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium">Entrepreneurship Fellow</h4>
                <p className="text-muted-foreground">Venture For America • 2020-2023</p>
              </div>
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
