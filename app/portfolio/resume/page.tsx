import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { Separator } from "../../components/ui/separator"
import { PrintButton } from "../../components/PrintButton"

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 print:bg-white print:py-0">
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
              Software engineer with a mechanical engineering background, passionate about bridging hardware and software systems. 
              Specializing in embedded systems, AI applications, computer vision, and creative design solutions. 
            </p>
          </section>

          <Separator className="my-6" />

          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Professional Experience</h3>

            {/* Firmware & Mechanical Engineer */}
            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Firmware & Mechanical Engineer</h4>
                <span className="text-muted-foreground text-sm">July 2025 - Present</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">BATS-TOI</h5>
                  <Badge variant="finished">Contract</Badge>
                </div>
                <span className="text-muted-foreground text-sm">Brooklyn, NY</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Developing smart helmet technology integrating speakers, microphones, and EEG sensors for real-time coach-player communication and concussion monitoring</li>
                <li>Collaborating with ML engineer and CTO to implement computer vision and smart lens technology for augmented reality applications</li>
                <li>Designing firmware and hardware integration solutions for sports and military applications using embedded systems</li>
              </ul>
            </div>

            {/* Embedded Firmware Engineer */}
            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Embedded Firmware Engineer</h4>
                <span className="text-muted-foreground text-sm">Jun - Jul 2025</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">Cerelog</h5>
                  <Badge variant="finished">Contract</Badge>
                </div>
                <span className="text-muted-foreground text-sm">Brooklyn, NY</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Integrated Brainflow library with ESP32 microcontroller and ADS1289 EEG chip for real-time brain wave data processing</li>
                <li>Implemented serial communication protocols with custom message packaging, error handling, and O(n) ring buffer algorithm for reliable data transmission</li>
                <li>Developed parametric configuration system allowing dynamic adjustment of sampling rates, channel activation, and voltage gain settings through serial handshake protocols</li>
              </ul>
            </div>

            {/* Product Engineer */}
            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Product Engineer</h4>
                <span className="text-muted-foreground text-sm">Apr 2022 - Jun 2023</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">Lazurite</h5>
                  <Badge variant="published">Full-Time</Badge>
                </div>
                <span className="text-muted-foreground text-sm">Cleveland, OH</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Designed and manufactured 15 portable demo devices with integrated electronics and software systems</li>
                <li>Implemented PLM software to manage inventory of 75+ electronic components and optimize supply chain</li>
                <li>Conducted 6 product validation tests and optimized manufacturing processes for first 10 production units</li>
                <li>Developed cost analysis systems demonstrating 25% savings through data-driven optimization</li>
              </ul>
            </div>

            {/* Design Engineer / Project Manager */}
            <div className="mb-5">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Design Engineer / Project Manager</h4>
                <span className="text-muted-foreground text-sm">Summer 2019</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-muted-foreground">Birkdale Neuro Rehab Centre</h5>
                  <Badge variant="finished">Contract</Badge>
                </div>
                <span className="text-muted-foreground text-sm">London, UK</span>
              </div>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Designed and prototyped innovative medical therapy device with 50% cost savings over alternatives</li>
                <li>Integrated Arduino PLCs with Bluetooth connectivity, pressure sensors, and haptic feedback systems</li>
                <li>Programmed 10 unique device outputs enabling patients to complete therapy through interactive games</li>
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
                  <Badge variant="finished">TypeScript</Badge>
                  <Badge variant="finished">Next.js</Badge>
                  <Badge variant="finished">React</Badge>
                  <Badge variant="finished">React Native</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Backend & Database</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="deployed">Node.js</Badge>
                  <Badge variant="deployed">Express</Badge>
                  <Badge variant="deployed">PostgreSQL</Badge>
                  <Badge variant="deployed">Supabase</Badge>
                  <Badge variant="deployed">Neon</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="published">JavaScript</Badge>
                  <Badge variant="published">Python</Badge>
                  <Badge variant="published">C/C++</Badge>
                  <Badge variant="published">Arduino</Badge>
                  <Badge variant="published">VBA</Badge>
                  <Badge variant="published">MATLAB</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Deployment</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="experiment">GitTown</Badge>
                  <Badge variant="experiment">Docker</Badge>
                  <Badge variant="experiment">Vercel</Badge>
                  <Badge variant="experiment">Netlify</Badge>
                  <Badge variant="experiment">Render</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">AI & Development Tools</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="in-progress">Claude Code</Badge>
                  <Badge variant="in-progress">OpenAI Vision API</Badge>
                  <Badge variant="in-progress">OpenAI TTS</Badge>
                  <Badge variant="in-progress">ElevenLabs TTS</Badge>
                  <Badge variant="in-progress">Replit</Badge>
                  <Badge variant="in-progress">v0</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Media Production & Graphic Design</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="broadway">Final Cut Pro</Badge>
                  <Badge variant="broadway">iMovie</Badge>
                  <Badge variant="broadway">Logo Design</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">CAD & Automation</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="playhouse-square">Inventor</Badge>
                  <Badge variant="playhouse-square">iLogic</Badge>
                  <Badge variant="playhouse-square">SolidWorks</Badge>
                  <Badge variant="playhouse-square">AutoCAD</Badge>
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
                <h4 className="font-medium">AI Smart Mirror</h4>
                <div className="flex gap-2">
                  <Badge variant="finished">React</Badge>
                  <Badge variant="finished">OpenAI Vision API</Badge>
                  <Badge variant="finished">OpenAI TTS</Badge>
                  <Badge variant="finished">Raspberry Pi</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Interactive smart mirror with AI-powered computer vision and text-to-speech.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Integrated OpenAI Vision API for real-time object recognition and analysis</li>
                <li>Implemented text-to-speech functionality using OpenAI TTS for voice interactions</li>
                <li>Built responsive React interface for mirror display and user interactions</li>
                <li>Deployed on Raspberry Pi with custom hardware integration for mirror display</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex flex-col md:flex-row justify-between mb-1">
                <h4 className="font-medium">Design Automation System</h4>
                <div className="flex gap-2">
                  <Badge variant="deployed">VBA</Badge>
                  <Badge variant="deployed">iLogic</Badge>
                  <Badge variant="deployed">CAD APIs</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Comprehensive automation system for mechanical design workflows with modern development practices.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                <li>Built 5,000+ lines of VBA and iLogic code to automate 80% of design processes</li>
                <li>Integrated with CAD APIs and database systems using modern development practices</li>
                <li>Implemented version control with Git and collaborative development workflows</li>
                <li>Used AI tools for code optimization and debugging</li>
              </ul>
            </div>
          </section>

          <Separator className="my-6" />

          {/* Education */}
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Education</h3>

            <div className="mb-2">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="font-medium">AI Accelerator & Software Engineering Bootcamp</h4>
                <span className="text-muted-foreground text-sm">Summer 2025 Cohort</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-muted-foreground">Fractal Tech</p>
                <span className="text-muted-foreground text-sm">Brooklyn, NY</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Full-stack development, React/Next.js, mobile apps, AI integration, multiplayer games, real-time systems
              </p>
            </div>

            <div className="mb-2">
              <div className="flex flex-col md:flex-row justify-between">
                <h4 className="font-medium">Venture For America Fellowship</h4>
                <span className="text-muted-foreground text-sm">2021 - 2023</span>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <p className="text-muted-foreground">Entrepreneurship fellowship program</p>
                <span className="text-muted-foreground text-sm">Training Bootcamp: July 2021</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Career development program for recent graduates to work at startups and revitalize American cities
              </p>
            </div>

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
          
        </CardContent>
      </Card>
    </div>
  )
} 